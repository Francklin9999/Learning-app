import { useState } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/SignUp.css';

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const SignUpData = {
            firstName,
            LastName,
            email,
            password,
        }
    }

    return (
        <>
        <Sidebar />
        <div className="signup-content">
            <form className="singup-form">
                <div className="signup-top">
                    <p className="singup-title">Sign up</p>
                    <p className="singup-message">Sign up now to gain full.</p>
                </div>
                <div className="singup-flex">
                    <label>
                        <input className="singup-input" type="text" placeholder="" required />
                        <span>Firstname</span>
                    </label>

                    <label>
                        <input className="singup-input" type="text" placeholder="" required />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input className="singup-input" type="email" placeholder="" required />
                    <span>Email</span>
                </label>

                <label>
                    <input className="singup-input" type="password" placeholder="" required />
                    <span>Password</span>
                </label>
                <label>
                    <input className="singup-input" type="password" placeholder="" required />
                    <span>Confirm password</span>
                </label>
                <button className="singup-submit">Sign up</button>
                <p className="singup-signin">
                    Already have an account? <a href="/Login">Login</a>
                </p>
            </form>
        </div>
        <Footer />
        </>
    )
}