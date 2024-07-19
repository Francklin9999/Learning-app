import { title } from '../const'
import * as data from '../const';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';

export default function Home() {
    const { handleLearn, handleLogin, handleSignUp } = data.useNavigation();

    return (
        <div className="home">
        <header className="container-fluid home-header">
            <div className="row justify-content-center text-center">
                <h2 className="col home-header-content">Franck</h2>
                <h2 className="col home-header-content">Learn a new language today!</h2>
                <div className="col home-header-details">
                    <nav className="row home-header-nav">
                        <a className="col home-header-details-login" href="/login">Log in</a>
                        <a className="col home-header-details-signup" href="/login">SignUp</a>
                    </nav>
                </div>
            </div>
        </header>

        <main className="container-fluid home-main">
            <div className="container-fluid home-main-container">
                <h1 className="row home-main-title">Learn a variety of languages with {title} -- fast, easy and fun!</h1>
                <div className="row home-main-container-languages">
                    <button onClick={handleLearn} className="home-main-languages"><img src="../country-pics/tagbana.PNG"/>Tagbana</button>
                    <button onClick={handleLearn} className="home-main-languages"><img src="../country-pics/spanish.PNG"/>Spanish</button>
                    <button onClick={handleLearn} className="home-main-languages"><img src="../country-pics/england.png"/>English</button>
                    <button onClick={handleLearn} className="home-main-languages"><img src="../country-pics/french.PNG"/>French</button>
                    <button onClick={handleLearn} className="home-main-languages"><img src="../country-pics/dutch.PNG"/>Dutch</button>
                    <button onClick={handleLearn} className="home-main-languages"><img src="../country-pics/portugal.PNG"/>Portuguese</button>
                    <button onClick={handleLearn} className="home-main-languages"><img src="../country-pics/turk.PNG"/>Turk</button>
                </div>
            </div>
                <div className="container home-second-container">
                    <div className="container home-second-container-container">
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
                    <div className="container-fluid home-second-title">
                        <h1 className="row home-second-title-content">So what are you waiting for? <br></br>
                        Start learning today!</h1>
                        <div className="row home-main-buttons">
                            <button onClick={handleLogin} className="col-2 home-button-button-account">
                                <p>Log In</p>
                            </button>
                            <button onClick={handleLearn} className="col-4 home-button-button-account">
                                <p>Continue without an account</p>
                            </button>
                            <button onClick={handleSignUp} className="col-2 home-button-button-account">
                                <p>Sign Up</p>
                            </button>
                        </div>
                    </div>
                </div>
        </main>
        </div>
    );
}