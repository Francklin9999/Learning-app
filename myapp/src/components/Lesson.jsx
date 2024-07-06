import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/Lesson.css';

export default function Lesson(props) {
    const questions = [
        ["Which sentence is correct?", "He don't like coffee.",  "He doesn't like coffee.", "He not like coffee.", "He isn't like coffee.", 2],
        ["What does 'ubiquitous' mean?", "Unique", "Widespread", "Delicious", "Expensive", 2],
        ["What is the main idea of the passage?", "The benefits of exercise", "How to cook a new recipe", "History of the Internet", "Types of wild animals", 1],
        ["What did the speaker say about the weather?", "It's sunny and warm", "It's snowing heavily", "It's windy and cold", "It's raining cats and dogs", 4],
    ]

    const navigate = useNavigate();
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [question, setQuestion] = useState(questions[0][0]);
    const [isClicked, setIsClicked] = useState(false);
    const [currentSelection, setCurrentSelection] = useState(null);
    const [score, setScore] = useState(0);

    const handleChoiceClick = (index) => {
        setCurrentSelection(index);
        const isCorrect = index === questions[currentQuestionIndex][5];
        setIsClicked(true);
        const nextIndex = (currentQuestionIndex + 1);

        setTimeout(() => {
            isCorrect ? setScore(score + 1) : setScore(score);
            if (nextIndex >= questions.length) {
                navigate('/learn', { state: { score: score } });
            }
            setCurrentQuestionIndex(nextIndex);
            setQuestion(questions[nextIndex][0]);
            setIsClicked(false);
        }, 1000);
    };
    
    return (
        <>
            <div className="lesson-lesson">
            <Sidebar />
                <div className="lesson-form-container">
                    <div className="lesson-logo-container">{question}</div>
                    <form className="lesson-form" onSubmit={(e) => e.preventDefault()}>
                    <p className="lesson-question-count">Question: {currentQuestionIndex}/{questions.length}</p>
                        {questions[currentQuestionIndex].slice(1, 5).map((choice, index) => (
                            <button
                                key={index}
                                className="lesson-form-submit-btn"
                                id={index + 1 === questions[currentQuestionIndex][5] && isClicked ? "lesson-clicked-right" : (isClicked && index + 1 === currentSelection ? "lesson-clicked-wrong" : "")}

                                type="button"
                                onClick={() => handleChoiceClick(index + 1)}
                            >
                                {choice}
                            </button>
                        ))}
                        <p className="lesson-question-count">Score: {score}/{currentQuestionIndex} | Pourcentage%</p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
        
    )
}