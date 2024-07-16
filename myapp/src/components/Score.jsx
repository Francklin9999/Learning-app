import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Conffeti from 'react-confetti';
import Emote from './Emote';
import '../styles/Score.css';


export default function Score() {
    const location = useLocation();
    const state = location.state;
    
    const [content, setContent] = useState('');
    const [emotion, setEmotion] = useState('');

    const navigate = useNavigate();

    const result = () => {
      if (state.score >=8 ) {
        setContent('Excellent! You did great!');
        setEmotion( "happy");
      } else if (state.score >= 6) {
        setContent("Good! Keep Practicing!");
        setEmotion("happy");
      } else {
        setContent("Don't worry! Keep trying and you'll improve.");
        setEmotion("sad");
      }
    };

    useEffect(() => {
      result();
      }, []);

    const handleLearn = () => {
      navigate('/learn');
    }

    const handleMenu = () => {
      navigate('/learn');
    }
  
    const handleTryAgain = () => {
      navigate('/lesson', {
        state: {
          level : state.level,
          language : state.language,
        }
        });
    }

    const handleNextLesson = () => {
      if (level == "native") {

      }
      navigate('/lesson', {
        state: {
          level : ((level == "basic") ? "medium" : (level == "medium") ? "advanced" : "native"),
          language : state.language,
          }
          });
    }
  
    return (
      <div className="score">

      <Conffeti />
      <div className="score-page">
        <div className="score-emote">
            <Emote state={emotion} />
          </div>
        <div className="score-content">
          <h2>You got a score of {state.score} out of 10</h2>
          <h5>{content}</h5>
          <div className="score-content-buttons">
            <button onClick={handleLearn}>Next Lesson</button>
            <button onClick={handleTryAgain}>Try again</button>
            <button onClick={handleNextLesson}>Next Level</button>
            <button onClick={handleMenu}>Menu</button>
          </div>
        </div>
      </div>
      
      </div>
    );
}