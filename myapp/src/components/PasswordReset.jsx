import '../styles/PasswordReset.css';

export default function PasswordReset() {
    return (
        <div className="passwordreset-form-container">
            <div className="passwordreset-logo-container">Forgot Password</div>

            <form className="passwordreset-form">
                <div className="passwordreset-form-group">
                    <label for="email">Email</label>
                <input type="text" id="passwordreset-email" name="email" placeholder="Enter your email" required/>
                </div>

                <button className="passwordreset-form-submit-btn" type="submit">Send Email</button>
            </form>

            <p className="passwordreset-signup-link">Don't have an account?<a href="/SignUp" className="passwordreset-signup-link link"> Sign up now</a></p>
        </div>
    )
}