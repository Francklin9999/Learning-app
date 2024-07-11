import { useState } from 'react';
import '../styles/Sidebar.css';

export default function Sidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const [content, setContent] = useState('');

    const toggleSidebar = () => {
        setSidebar(!sidebar);
        options(false);
    };

    const options = (isConnected) => {
        if (isConnected) {
            return (
                setContent(
                <ul className="sidebar-content">
                    <li className="sidebar-content-options"><a href="/">Home</a></li>
                    <li className="sidebar-content-options"><a href="/Account">Account</a></li>
                    <li className="sidebar-content-options"><a href="/">Log out</a></li>
                    <li className="sidebar-content-options"><a href="/terms">Terms & Condition</a></li>
                </ul>
                )
            )
            
            } else {
                return (
                    setContent(
                    <ul className="sidebar-content">
                    <li className="sidebar-content-options"><a href="/">Home</a></li>
                    <li className="sidebar-content-options"><a href="/login">Login</a></li>
                    <li className="sidebar-content-options"><a href="/signup">Sign Up</a></li>
                    <li className="sidebar-content-options"><a href="/terms">Terms & Condition</a></li>
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
                <label className="sidebar-toggle" htmlFor="checkbox">
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