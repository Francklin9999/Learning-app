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
        <div className="home">
        <header className="home-header">
            <div className="home-header-title">
                <h2>Franck</h2>
            </div>
            <div className="home-header-content">
                <h2>Learn a new language today!</h2>
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
                    <div className="home-main-content-content">
                        <h1 >Why learn a language?</h1>
                        <p>
                            Learning a new language can significantly benefit employees and the overall success of a company. At our company, we are constantly expanding and engaging with a diverse client base, making multilingual capabilities increasingly essential. Here are some key reasons why language learning is particularly advantageous in our context:
                            Firstly, improved communication with clients and partners is a primary benefit. Many of our clients speak languages other than English, and being able to converse in their native language can build stronger, more trustful relationships. This can lead to enhanced customer satisfaction and loyalty, giving us a competitive edge in the market.
                            Secondly, language skills open up new markets and business opportunities. As we aim to expand our global presence, having team members who are proficient in various languages allows us to navigate and penetrate new regions more effectively. It enables us to understand cultural nuances, comply with local regulations, and tailor our services to meet regional needs.
                            Thirdly, learning a new language fosters cultural sensitivity and awareness. This is vital in our diverse workplace and client interactions. Employees who understand different cultures can work more collaboratively and innovatively, contributing to a more inclusive and dynamic work environment.
                            Moreover, personal and professional growth is another significant advantage. Language learning enhances cognitive abilities, such as problem-solving and multitasking, which can improve overall job performance. It also provides employees with a sense of achievement and can boost morale and job satisfaction.
                            In conclusion, investing in language learning is not just an individual asset but a strategic business decision. It equips our company to communicate more effectively, explore new markets, and foster a culturally aware and inclusive workplace, ultimately driving our long-term success.
                        </p>
                    </div>
                    <div className="row" id="home-main-title">
                        <h1 className="home-main-title-content">So what are you waiting for? <br></br>
                        Start learning today!</h1>
                    </div>
                    <div className="col" id="home-main-buttons">
                        <a href="/login" className="home-button-button-account">
                            <p>Log In</p>
                        </a>
                        <a href="/learn" className="home-button-button-account">
                            <p>Continue without an account</p>
                        </a>
                        <a href="/SignUp" className="home-button-button-account">
                            <p>Sign Up</p>
                        </a>
                    </div>
                </div>
        </main>
    
            <Footer />

        </div>
    );
}