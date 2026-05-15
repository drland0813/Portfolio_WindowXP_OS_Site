import React from 'react';
import './portfolioHome.css';
import { userData } from '../../data/userData';

const PortfolioHome = ({ navigateTo, lang }) => {
    const { homeConfig } = userData[lang];
    const nameMatch = homeConfig.name.match(/^(.*?)\s*(\(.+\))$/);
    const displayName = nameMatch ? nameMatch[1] : homeConfig.name;
    const alias = nameMatch ? nameMatch[2] : '';

    return (
        <div className="portfolio-home-container">
            <div className="portfolio-home-content">
                <h1 className="ph-title">
                    <span className="ph-title-name">{displayName}</span>
                    {alias && <span className="ph-title-alias">{alias}</span>}
                </h1>
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
