import { useState } from 'react';
import '../styles/Sidebar.css';

export default function Sidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const [content, setContent] = useState('');

    const toggleSidebar = () => {
        setSidebar(!sidebar);
        // if (!sidebar) {
        //     return options(false);
        // } else {
        //     return setContent('');
        // }
    };

    const options = (isConnected) => {
        if (isConnected) {
            return (
                setContent(
                <ul className="sidebar-Content">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Account">Account</a></li>
                    <li><a href="/">Log out</a></li>
                    <li><a href="/terms">Terms & Condition</a></li>
                </ul>
                )
            )
            
            } else {
                return (
                    setContent(
                    <ul className="sidebar-Content">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href="/terms">Terms & Condition</a></li>
                    </ul>
                    )
                )
            }
    }

    return (
        <div>
            <button className="sidebar-btn" onClick={toggleSidebar}>
            </button>
            <div>
                <div className={`sidebar-sidebar ${sidebar ? 'sidebar-open' : 'sidebar-close'}`}>
                <button className="sidebar-btn" onClick={toggleSidebar}>
                </button>
                { content }
                </div>
            </div>
        </div>
    );
}