import { title } from '../const'
import '../styles/Home.css';
import Footer from './Footer';

export default function Home() {
    return (
        <>
        <header className="home-header">
            <div className="home-header-title">
                <h2>Franck</h2>
            </div>
            <div className="home-header-content">
                <h2>Start Learning now!</h2>
            </div>
            <div className="home-header-details">
            <div className="home-header-details-login"><a href="/login" className="home-header-details-login-a"><p>Log In</p></a></div>
                <div className="home-header-details-signup"><a href="/SignUp"  className="home-header-details-signup-a"><p>Sign up</p></a></div>
            </div>
        </header>

        <main className="home-main">
                {/* <img src="" alt="background" clasName="background" /> */}
                <div className="container-fluid" id="home-main-content">
                    <div className="row" id="home-main-title">
                        <h1>Start to learn today!</h1>
                    </div>
                    <div className="col" id="home-main-buttons">
                        <a href="/login" className="home-button button-account">
                            <p>Log In</p>
                        </a>
                        <a href="/SignUp" className="home-button button-account">
                            <p>Sign Up</p>
                        </a>
                    </div>
                    <div className="row">
                        <a href="/learn" className="home-button button-noaccount">
                            <p>Continue without an account</p>
                        </a>
                    </div>
                </div>
        </main>
    
        <footer className="home-footer">
            <Footer />
        </footer>

        </>
    );
}