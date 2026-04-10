import React from 'react';
import './portfolioHome.css';
import { userData } from '../../data/userData';

const PortfolioHome = ({ navigateTo, lang }) => {
    const { homeConfig } = userData[lang];

    return (
        <div className="portfolio-home-container">
            <div className="portfolio-home-content">
                <h1 className="ph-title">{homeConfig.name}</h1>
                <p className="ph-subtitle">{homeConfig.role}</p>
                <div className="ph-links">
                    <button className="ph-link" onClick={() => navigateTo('about')}>{homeConfig.navLinks.about}</button>
                    <button className="ph-link" onClick={() => navigateTo('experience')}>{homeConfig.navLinks.exp}</button>
                    <button className="ph-link" onClick={() => navigateTo('projects')}>{homeConfig.navLinks.projects}</button>
                    <button className="ph-link" onClick={() => navigateTo('contact')}>{homeConfig.navLinks.contact}</button>
                </div>
            </div>
            <div className="ph-footer">
                <p>{homeConfig.copyright}</p>
            </div>
        </div>
    );
};

export default PortfolioHome;
