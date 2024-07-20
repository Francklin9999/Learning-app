import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as data from '../const';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Learn.css';


export default function Learn() {
    const location = useLocation();
    const state = location.state;

    const { handleLesson } = data.useNavigation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const items = ['Tagbana', 'Spanish', 'English', 'French', 'Dutch', 'Portuguese', 'Turk'];

    const milestones = [
        { title: 'Basic', description: 'Learn the basics' },
        { title: 'Medium', description: 'Enough for everyday use' },
        { title: 'Advanced', description: 'Become fluent' },
        { title: 'Native', description: 'Learn to speak like a native speaker' },
      ];

    useEffect(() => {
        if (state) {
            setSelectedLanguage(state.language);
    };
    }, []);

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
            handleLesson(
                { 
                    level: selectedLevel, 
                    language: selectedLanguage, 
                });
        };
    }
    
    return (
        <>  
            <header className="container-fluid text-center learn-header">
                    <h1>Choose a language and a level</h1>
            </header>

            <main className="container learn-main">
                <div className="row justify-content-center">
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
                            <h3>Select a Language:</h3>
                            <button onClick={ () => toggleDropdown() } className="learn-dropdown-toggle">
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
                            <div className="learn-gotolesson">
                                <button onClick={goToLesson}>
                                    <span>Go to lesson</span>
                                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}