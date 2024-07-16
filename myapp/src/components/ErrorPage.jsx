import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ErrorPage.css';

export default function ErrorPage() {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(intervalId);
            navigate('/');
        }

        return () => clearInterval(intervalId);
    }, [countdown]);

    return (
        <div className="error-page">
            <h1>This page does not exist</h1>
            <h5>You will be redirected to the home page in {countdown} seconds</h5>
        </div>
    );
}
