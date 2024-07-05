import { useState } from 'react';
import '../styles/Sidebar.css';

export default function Sidebar(props) {
    // return (
    //     <div className="sidebar-sidebar active">
    //         <img src="../country-pics/Capture.PNG" className="logo" atl="logo" />
    //         <ul>
    //             <li><a href="/">Home</a></li>
    //             <li><a href="/">Log in</a></li>
    //             <li><a href="/">about us</a></li>
    //             <li><a href="/">Contact Us</a></li>
    //         </ul>
    //     </div>
    // );


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