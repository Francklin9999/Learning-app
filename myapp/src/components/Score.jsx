import { useLocation } from 'react-router-dom';
import '../styles/Score.css';


export default function Score() {
    const location = useLocation();
    const score = location.state.score;
}