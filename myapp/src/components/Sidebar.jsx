import '../styles/Sidebar.css';
import { useState } from 'react';

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <div>
            <div className="sidebar-btn" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            </div>
            <div>
                <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#option1">Option 1</a></li>
                        <li><a href="#option2">Option 2</a></li>
                        <li><a href="#option3">Option 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}