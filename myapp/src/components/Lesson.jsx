import { useState } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/Lesson.css';

export default function Lesson(props) {
    const questions = [
        ["Which sentence is correct?", "He don't like coffee",  "He doesn't like coffee", "He not like coffee", "He isn't like coffee", 2],
        ["What does 'ubiquitous' mean?", "Unique", "Widespread", "Delicious", "Expensive", 2],
        ["What is the main idea of the passage?", "The benefits of exercise", "How to cook a new recipe", "History of the Internet", "Types of wild animals", 1],
        ["What did the speaker say about the weather?", "It's sunny and warm", "It's snowing heavily", "It's windy and cold", "It's raining cats and dogs", 4],
    ]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [question, setQuestion] = useState(questions[0][0]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleChoiceClick = (index) => {
        const isAnswerCorrect = index === questions[currentQuestionIndex][5];
        setSelectedAnswer(index);
        setIsCorrect(isAnswerCorrect);

        if (isAnswerCorrect) {
            setIsClicked(true);
            setTimeout(() => {
                const nextIndex = (currentQuestionIndex + 1) % questions.length;
                setCurrentQuestionIndex(nextIndex);
                setQuestion(questions[nextIndex][0]);
                setSelectedAnswer(null);
                setIsCorrect(false);
                setIsClicked(false);
            }, 1000); 
        }
    };

    return (
        <>
            <div className="lesson-lesson">
                <div className="lesson-sidebar">
                    <Sidebar />
                </div>
                <div className="lesson-form-container">
                    <div className="lesson-logo-container">{question}</div>
                    <form className="lesson-form" onSubmit={(e) => e.preventDefault()}>
                        {questions[currentQuestionIndex].slice(1, 5).map((choice, index) => (
                            <button
                                key={index}
                                className="lesson-form-submit-btn"
                                id={index + 1 === questions[currentQuestionIndex][5] && isClicked ? "lesson-clicked" : ''}
                                type="button"
                                onClick={() => handleChoiceClick(index + 1)}
                            >
                                {choice}
                            </button>
                        ))}
                        <p className="lesson-question-count">Question: {currentQuestionIndex}/{questions.length}</p>
                    </form>
                </div>
            </div>
            <Footer />
        </>
        
    )
}