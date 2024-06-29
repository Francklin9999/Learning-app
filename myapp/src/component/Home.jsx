import '../styles/Home.css';

export default function Home() {
    return (
        <>
        <header>
        <div className="header">
            <img src="" alt="logo" className="logo" />
            <div className="title">
            <h1>Welcome. Happy to see you here!</h1>
            <h2>Start Learning now!</h2>
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
            <img src="" alt="background" clasName="background" />
            <div className="main-content">
                <h1>Start to learn today!</h1>
                <a href="/login" clasName="button">
                <p>Log In / Sign up</p>
                </a>
                <a href="/learn" className="button">
                <p>Continue without an account</p>
                </a>
            </div>
        </div>
        </main>
    
        <footer>
        <div className="footer">
            <p>Copyright © 2024</p>
            <p>Franck Fongang</p>
            <p>All rights Reserved</p>
        </div>
        </footer>

        </>
    );
}