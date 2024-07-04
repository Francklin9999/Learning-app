import '../styles/PasswordReset.css';

export default function PasswordReset() {
    return (
        <div className="form-container">
            <div className="logo-container">Forgot Password</div>

            <form className="form">
                <div className="form-group">
                    <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" required="" />
                </div>

                <button className="form-submit-btn" type="submit">Send Email</button>
            </form>

            <p className="signup-link">Don't have an account?<a href="/SignUp" className="signup-link link"> Sign up now</a></p>
        </div>
    )
}