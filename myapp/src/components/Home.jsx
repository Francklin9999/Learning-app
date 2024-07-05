import { title } from '../const'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../styles/Home.css';

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/learn");
    }

    const handleLogin = () => {
        navigate("/login");
    }

    const handleSignUp = () => {
        navigate("/signup");
    }

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
                <div className="home-header-details-login"><button onClick={handleLogin}>Login</button></div>
                <div className="home-header-details-signup"><button onClick={handleSignUp}>Sign up</button></div>
            </div>
        </header>

        <main className="home-main">
            <div className="container home-main-container">
                <div>
                    <h1 className="home-main-title">Learn a variety of languages with {title} -- fast, easy and fun!</h1>
                </div>
                <div className="home-main-container-languages">
                    <div><button onClick={handleClick} className="home-main-languages"><img src="../country-pics/Capture.PNG"/><p>Ivory</p></button></div>
                    <div><button onClick={handleClick} className="home-main-languages"><img src="../country-pics/Capture5.PNG"/><p>Spanish</p></button></div>
                    <div><button onClick={handleClick} className="home-main-languages"><img src="../country-pics/Capture6.PNG"/><p>English</p></button></div>
                    <div><button onClick={handleClick} className="home-main-languages"><img src="../country-pics/Capture7.PNG"/><p>French</p></button></div>
                    <div><button onClick={handleClick} className="home-main-languages"><img src="../country-pics/Capture8.PNG"/><p>Dutch</p></button></div>
                    <div><button onClick={handleClick} className="home-main-languages"><img src="../country-pics/Capture9.PNG"/><p>Portuguese</p></button></div>
                    <div><button onClick={handleClick} className="home-main-languages"><img src="../country-pics/Capture10.PNG"/><p>Turk</p></button></div>
                </div>
            </div>
                <div className="container-fluid" id="home-main-content">
                    <div>
                        <h1 className="home-main-content-title">Why learn a language?</h1>
                    </div>
                    <div className="home-main-content-content">
                        <p>
                            Learning a language is a great way to improve your communication skills, expand your cultural
                            understanding, and open up new opportunities for travel, work, and personal growth. With {title
                            }, you can learn a variety of languages at your own pace, with interactive lessons and exercises
                            that make learning fun and engaging. Whether you're a beginner or an experienced language learner,
                            {title} has something to offer for everyone.
                        </p>
                    </div>
                    <div className="row" id="home-main-title">
                        <h1>So what are you waiting for? <br></br>
                        Start learning today!</h1>
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