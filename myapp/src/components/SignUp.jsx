import { useState } from 'react';
import Footer from './Footer';
import '../styles/SignUp.css';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const SignUpData = {
            email,
            username,
        }
    }

    return (
        <>
        <div className="SignUp">
            <form onSumbit={handleSubmit}>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email" 
                    id ="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    name="username" 
                    id ="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    name="password" 
                    id ="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
        </div>
        <Footer />
        </>
    )
}