import {title, language} from '../const';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import '../styles/Learn.css';


export default function Learn() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const items = ['Ivory', 'Spanish', 'English', 'French', 'Dutch', 'Portuguese', 'Turk'];

    const milestones = [
        { title: 'Basic', description: 'Learn the basics' },
        { title: 'Medium', description: 'Enough for everyday use' },
        { title: 'Advanced', description: 'Become fluent' },
        { title: 'Native', description: 'Learn to speak like a native speaker' },
      ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    const handleItemClick = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
      };

    const handleLevel = (level) => {
        setSelectedLevel(level)
    }

    const goToLesson = () => {
        if(selectedLevel == null || selectedLanguage == null) {
            alert('Please select a level and language');
        } else {
            window.location.href = '/lesson';
        }
    }
    
    return (
        <>
            
            <header className="learn-header">
                    <h1>{title}</h1>
            </header>

            <main className="container-fluid learn-main">
                <div className="col learn-roadmap-container">
                    {milestones.map((milestone, index) => (
                    <div key={index} className="learn-roadmap-item" id={(index % 2 === 0 || index === 0) ? 'learn-roadmap-items-even' : 'learn-roadmap-items-odd'}>
                    <div className="learn-roadmap-icon">
                        <span>{index + 1}</span>
                    </div>
                    <div className="learn-roadmap-content">
                        <h3>{milestone.title}</h3>
                        <button onClick={() => handleLevel(milestone.title)} id={(milestone.title === selectedLevel) ? "learn-roadmap-content-level-selected" : ""}>Select {milestone.title}</button>
                        <p>{milestone.description}</p>
                    </div>
                    {index !== milestones.length - 1 && <div className="learn-roadmap-line"></div>}
                    </div>
                    ))}
                </div>
                <div className="col learn-button-container">
                    <div className="learn-dropdown">
                        <div className="learn-dropdown-options">
                        Select a Language:
                        <button onClick={toggleDropdown} className="learn-dropdown-toggle">
                            {selectedLanguage || 'Select'}
                        </button>
                        {isOpen && (
                            <ul className="learn-dropdown-menu">
                            {items.map((item, index) => (
                                <li key={index} onClick={() => handleItemClick(item)} className="learn-dropdown-item">
                                {item}
                                </li>
                            ))}
                            </ul>
                        )}
                        </div>
                    </div>
                <div>
                    <button onClick={goToLesson}>Go to lesson</button>
                </div>
                </div>
            </main>

            <Sidebar/>
        </>
    );
}