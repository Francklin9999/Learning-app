import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PasswordReset.css';

export default function PasswordReset() {
    const navigate = useNavigate();

    const [showMessage, setShowMessage] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        setShowMessage(true);
        setTimeout (() => {
            navigate('/');
        }, 10000);
    };

    return (
            <>
            {showMessage ? (
            <div className="passwordreset-reset">
                <h3>An email has been sent!</h3>
                <p>Check your email for a link to reset your password.</p>
                <p>You will be redirected to the home page shortly.</p>
            </div>
            ) : (
                <div className="passwordreset-form-container">
                <div className="passwordreset-logo-container">Forgot Password</div>

                <form className="passwordreset-form" onSubmit={handleSumbit}>
                    <div className="passwordreset-form-group">
                        <label for="email">Email</label>
                    <input type="text" id="passwordreset-email" name="email" placeholder="Enter your email" required autocomplete="email"/>
                    </div>

                    <button className="passwordreset-form-submit-btn" type="submit">Send Email</button>
                </form>

                <p className="passwordreset-signup-link">Don't have an account?<a href="/SignUp" className="passwordreset-signup-link link"> Sign up now</a></p>
                </div>
        )}
        </>
    );
};