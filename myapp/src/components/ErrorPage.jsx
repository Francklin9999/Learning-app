import { useState, useEffect } from 'react';
import * as data from '../const';
import '../styles/ErrorPage.css';

export default function ErrorPage() {
    const [countdown, setCountdown] = useState(10);

    const { handleHome } = data.useNavigation();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(intervalId);
            handleHome();
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
