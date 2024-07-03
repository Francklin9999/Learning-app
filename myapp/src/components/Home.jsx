import { title } from '../const'
import '../styles/Home.css';
import Footer from './Footer';

export default function Home() {
    return (
        <>
        <header>
        <div className="header">
            <img src="" alt="logo" className="logo" />
            <div className="title">
            <h1>Welcome to Franck</h1>
            <h2>Start Learning {title} now!</h2>
            </div>
            <div>
                <a href="/login" className="button">
                <p>Sign up</p>
                <p>Log In</p>
                </a>
            </div>
        </div>
        </header>

        <main>
            <div className="main">
                {/* <img src="" alt="background" clasName="background" /> */}
                <div className="container-fluid" id="main-content">
                    <div className="row">
                        <h1>Start to learn today!</h1>
                    </div>
                    <div className="row">
                        <a href="/login" className="button button-account">
                            <p>Log In</p>
                        </a>
                        <a href="/SignUp" className="button button-account">
                            <p>Sign Up</p>
                        </a>
                    </div>
                    <div className="row">
                        <a href="/learn" className="button button-noaccount">
                            <p>Continue without an account</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    
        <footer>
            <Footer />
        </footer>

        </>
    );
}