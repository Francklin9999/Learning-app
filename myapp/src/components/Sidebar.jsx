import { useState } from 'react';
import * as data from '../const';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Sidebar.css';

export default function Sidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const [content, setContent] = useState('');

    const { handleHome, handleLearn, handleLogin, handleSignUp, handleTerms } = data.useNavigation();

    const toggleSidebar = () => {
        setSidebar(!sidebar);
        options(false);
    };

    const options = (isConnected) => {
        if (isConnected) {
            return (
                setContent(
                <ul className="sidebar-content">
                    <li className="sidebar-content-options"><button onClick={data.handleHome}>Home</button></li>
                    <li className="sidebar-content-options"><a href="/Account">Account</a></li>
                    <li className="sidebar-content-options"><a href="/">Log out</a></li>
                    <li className="sidebar-content-options"><button  onClick={handleTerms}>Terms & Condition</button></li>
                </ul>
                )
            )
            
            } else {
                return (
                    setContent(
                    <ul className="sidebar-content">
                    <li className="sidebar-content-options"><button  onClick={handleHome}>Home</button></li>
                    <li className="sidebar-content-options"><button  onClick={handleLearn}>Learn</button></li>
                    <li className="sidebar-content-options"><button  onClick={handleLogin}>Login</button></li>
                    <li className="sidebar-content-options"><button  onClick={handleSignUp}>Sign Up</button></li>
                    <li className="sidebar-content-options"><button  onClick={handleTerms}>Terms & Condition</button></li>
                    </ul>
                    )
                )
            }
    }

    return (
        <div>
            <div className="sidebar-menuToggle">
                <button onClick={toggleSidebar}>
                <input id="sidebar-checkbox" type="checkbox" />
                <label className="container sidebar-toggle" htmlFor="checkbox">
                    <div className="sidebar-bar sidebar-bar--top"></div>
                    <div className="sidebar-bar sidebar-bar--middle"></div>
                    <div className="sidebar-bar sidebar-bar--bottom"></div>
                </label>
                </button>
            </div>
            <div>
                <div className={`${sidebar ? 'sidebar-sidebar-open' : 'sidebar-sidebar-closed'}`}>{content}</div>
            </div>
        </div>
    );
}