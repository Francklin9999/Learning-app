import { useEffect, useState, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as data from '../const';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Lesson.css';

export default function Lesson(props) {
    const location = useLocation();
    const state = location.state;

    const { handleLearn } = data.useNavigation();
    const navigate = useNavigate();


    try {
        const level = state?.level.toLowerCase();
        const language = (state?.language.toLowerCase() === "tagbana") ? "french" : state?.language.toLowerCase();
        const questions = data.questions[`${language}`][`${level}`];
        
        const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
        const [question, setQuestion] = useState(questions[0][0]);
        const [isClicked, setIsClicked] = useState(false);
        const [currentSelection, setCurrentSelection] = useState(null);
        const [score, setScore] = useState(0);
        const [percentage, setPercentage] = useState(0);

        const handleChoiceClick = (index) => {
            setCurrentSelection(index);
            const isCorrect = index === questions[currentQuestionIndex][5];
            setIsClicked(true);
            const nextIndex = (currentQuestionIndex + 1);

            setTimeout(() => {
                isCorrect ? setScore(score + 1) : setScore(score);
                if (nextIndex >= questions.length) {
                    navigate('/score', { 
                        state: { 
                            score: score,
                            level : level,
                            language : language,
                        } 
                    });
                }
                setCurrentQuestionIndex(nextIndex);
                setQuestion(questions[nextIndex][0]);
                setIsClicked(false);
            }, 1000);
        };

        useEffect(() => {
            const calculatedPercentage = ((score / currentQuestionIndex) * 100).toFixed(1);
            setPercentage(calculatedPercentage);
        }, [currentQuestionIndex]);
        
        return (
                <div className="container lesson-form-container">
                    <div className="lesson-logo-container">{question}</div>
                    <form className="lesson-form" onSubmit={(e) => e.preventDefault()}>
                    <p className="lesson-question-count">Question: {currentQuestionIndex + 1}/{questions.length}</p>
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
                        <p className="lesson-question-count">Score: {score}/{currentQuestionIndex} | {percentage}%</p>
                    </form>
                </div>
            
        )
        } catch(e) {
            console.log(e);
            useEffect(() => {
                handleLearn;
            }, []);
        }
}