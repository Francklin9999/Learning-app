import { useLocation } from 'react-router-dom';
import Conffeti from 'react-confetti';
import Emote from './Emote';
import '../styles/Score.css';


export default function Score() {
    const location = useLocation();
    const state = location.state;
  
    return (
      <>
      <Conffeti />
      <div className="score-page">
        {state.score}
      </div>
      <Emote />
      </>
    );
}