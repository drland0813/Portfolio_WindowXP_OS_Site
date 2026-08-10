import React, { useState } from 'react';
import './ie6.css'; // Import the new IE6 styles
import PortfolioHome from './PortfolioHome';
import ProjectsView from './ProjectsView';
import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';

// Nav icons
import iconBack from '../../assets/windows/nav/back.png';
import iconForward from '../../assets/windows/nav/forward.png';
import iconStop from '../../assets/windows/nav/stop.png';
import iconRefresh from '../../assets/windows/nav/refresh.png';
import iconHome from '../../assets/windows/nav/home.png';
import iconSearch from '../../assets/windows/nav/search.png';
import iconFavorites from '../../assets/windows/nav/favorites.png';
import iconUp from '../../assets/windows/nav/up.png';
import iconBrowserFlag from '../../assets/windows/nav/browserflag.png';
import iconGo from '../../assets/windows/nav/go.png';
import iconWebpage from '../../assets/windows/nav/webpage.png';
import iconWorld from '../../assets/windows/nav/world.png';

const Portfolio = ({ onOpenPdf }) => {
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

                {/* IE Browser Flag Logo */}
                <div className="ie-logo">
                    <img src={iconBrowserFlag} alt="IE" className="ie-logo-img" />
                </div>
            </div>

            {/* 2. IE6 Standard Toolbar Buttons */}
            <div className="ie6-std-buttons">
                <button className={`ie6-btn ${history.length <= 1 ? 'disabled' : ''}`} onClick={handleBack} disabled={history.length <= 1}>
                    <span className="icon"><img src={iconBack} alt="Back" className="nav-icon" /></span>
                    <span className="btn-label">Back</span>
                </button>
                <button className="ie6-btn disabled">
                    <span className="icon"><img src={iconForward} alt="Forward" className="nav-icon" /></span>
                </button>
                <button className="ie6-btn disabled">
                    <span className="icon"><img src={iconStop} alt="Stop" className="nav-icon" /></span>
                </button>
                <button className="ie6-btn">
                    <span className="icon"><img src={iconRefresh} alt="Refresh" className="nav-icon" /></span>
                </button>
                <button className="ie6-btn" onClick={() => navigateTo('home')}>
                    <span className="icon"><img src={iconHome} alt="Home" className="nav-icon" /></span>
                </button>

                <div className="ie6-separator"></div>

                <button className="ie6-btn">
                    <span className="icon"><img src={iconSearch} alt="Search" className="nav-icon" /></span>
                    <span className="btn-label">Search</span>
                </button>
                <button className="ie6-btn">
                    <span className="icon"><img src={iconFavorites} alt="Favorites" className="nav-icon" /></span>
                    <span className="btn-label">Favorites</span>
                </button>
            </div>

            {/* 3. IE6 Address Bar */}
            <div className="ie6-address-bar">
                <span className="address-label">Address</span>
                <div className="address-input-wrapper">
                    <img src={iconWebpage} alt="" className="address-icon" />
                    <input type="text" value={addressValue} readOnly />
                </div>
                <button className="address-go">
                    <img src={iconGo} alt="Go" className="go-icon" />
                </button>
            </div>

            <div className="ie6-viewport">
                {/* Language Toggle - floating inside web content (Temporarily hidden) */}
                {/* 
                <div className="ie-lang-toggle">
                    <button className={`ie-lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
                    |
                    <button className={`ie-lang-btn ${lang === 'vi' ? 'active' : ''}`} onClick={() => setLang('vi')}>VI</button>
                </div>
                */}
                {currentView === 'home' && <PortfolioHome navigateTo={navigateTo} lang={lang} />}
                {currentView === 'about' && <AboutPage navigateTo={navigateTo} lang={lang} />}
                {currentView === 'experience' && <ExperiencePage navigateTo={navigateTo} lang={lang} />}
                {currentView === 'contact' && <ContactPage navigateTo={navigateTo} lang={lang} onOpenPdf={onOpenPdf} />}
                {currentView === 'projects' && <ProjectsView navigateTo={navigateTo} activeProjectId={activeProjectId} lang={lang} />}
            </div>

            <div className="ie6-status-bar">
                <div className="status-block flex-1">
                    <img src={iconWebpage} alt="" className="status-icon" /> Done
                </div>
                <div className="status-block zone">
                    <img src={iconWorld} alt="" className="status-icon" /> Internet
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
