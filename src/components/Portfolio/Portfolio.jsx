import React, { useState } from 'react';
import './ie6.css'; // Import the new IE6 styles
import PortfolioHome from './PortfolioHome';
import ProjectsView from './ProjectsView';
import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';

const Portfolio = () => {
    const [history, setHistory] = useState([{ view: 'home', data: null }]);
    const [lang, setLang] = useState('en');

    const currentRoute = history[history.length - 1];
    const currentView = currentRoute.view;
    const activeProjectId = currentRoute.data;

    const navigateTo = (view, projectId = null, replace = false) => {
        if (replace) {
            const newHistory = [...history];
            newHistory[newHistory.length - 1] = { view, data: projectId };
            setHistory(newHistory);
        } else {
            setHistory([...history, { view, data: projectId }]);
        }
    };

    const handleBack = () => {
        if (history.length > 1) {
            setHistory(history.slice(0, -1));
        }
    };

    let addressValue = "http://www.drland.com/";
    if (currentView === "projects") {
        addressValue = activeProjectId 
            ? `http://www.drland.com/projects/${activeProjectId}` 
            : `http://www.drland.com/projects`;
    } else if (currentView !== "home") {
        addressValue += currentView;
    }

    return (
        <div className="ie6-container">
            {/* 1. IE6 Menu Bar */}
            <div className="ie6-menu-bar">
                <span className="ie-menu-item"><u>F</u>ile</span>
                <span className="ie-menu-item"><u>E</u>dit</span>
                <span className="ie-menu-item"><u>V</u>iew</span>
                <span className="ie-menu-item">F<u>a</u>vorites</span>
                <span className="ie-menu-item"><u>T</u>ools</span>
                <span className="ie-menu-item"><u>H</u>elp</span>
                
                {/* Language Toggle in Menu Bar */}
                <div className="ie-lang-toggle">
                    <button className={`ie-lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                    |
                    <button className={`ie-lang-btn ${lang === 'vi' ? 'active' : ''}`} onClick={() => setLang('vi')}>VI</button>
                </div>
                {/* Fake Windows Flag Logo */}
                <div className="ie-logo">⊞</div> 
            </div>

            {/* 2. IE6 Standard Toolbar Buttons */}
            <div className="ie6-std-buttons">
                 <button className={`ie6-btn ${history.length <= 1 ? 'disabled' : ''}`} onClick={handleBack} disabled={history.length <= 1}>
                     <span className="icon">🔙</span> {lang === 'vi' ? 'Lùi lại' : 'Back'}
                 </button>
                 <button className="ie6-btn disabled">
                     <span className="icon">🔜</span>
                 </button>
                 <button className="ie6-btn disabled">
                     <span className="icon">❌</span>
                 </button>
                 <button className="ie6-btn">
                     <span className="icon">🔄</span>
                 </button>
                 <button className="ie6-btn" onClick={() => navigateTo('home')}>
                     <span className="icon">🏠</span>
                 </button>
                 
                 <div className="ie6-separator"></div>
                 
                 <button className="ie6-btn">
                     <span className="icon">🔍</span> Search
                 </button>
                 <button className="ie6-btn">
                     <span className="icon">⭐</span> Favorites
                 </button>
            </div>

            {/* 3. IE6 Address Bar */}
            <div className="ie6-address-bar">
                <span className="address-label">Address</span>
                <div className="address-input-wrapper">
                     <span className="ie-earth">e</span>
                     <input type="text" value={addressValue} readOnly />
                </div>
                <button className="address-go">
                    <span style={{color: '#fff', background: '#316ac5', padding: '0 4px', borderRadius: '50%', marginRight: '3px'}}>→</span> Go
                </button>
            </div>

            <div className="ie6-viewport">
                {currentView === 'home' && <PortfolioHome navigateTo={navigateTo} lang={lang} />}
                {currentView === 'about' && <AboutPage navigateTo={navigateTo} lang={lang} />}
                {currentView === 'experience' && <ExperiencePage navigateTo={navigateTo} lang={lang} />}
                {currentView === 'contact' && <ContactPage navigateTo={navigateTo} lang={lang} />}
                {currentView === 'projects' && <ProjectsView navigateTo={navigateTo} activeProjectId={activeProjectId} lang={lang} />}
            </div>

            <div className="ie6-status-bar">
                <div className="status-block flex-1">
                    <span style={{fontSize: '12px', marginRight: '5px'}}>📄</span> Done
                </div>
                <div className="status-block zone">
                    <span style={{fontSize: '12px'}}>🌐</span> Internet
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
