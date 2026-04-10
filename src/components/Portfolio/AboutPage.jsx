import React from 'react';
import './portfolioPages.css';
import { userData } from '../../data/userData';

const AboutPage = ({ navigateTo, lang }) => {
    const data = userData[lang].aboutData;

    return (
        <div className="portfolio-page-container">
            <div className="pp-content">
                <h2 className="pp-title">{data.title}</h2>
                <div style={{ height: '2px', background: '#e0e0d6', margin: '20px 0' }}></div>
                <p style={{whiteSpace: 'pre-line'}}>{data.content}</p>
            </div>
        </div>
    );
};
export default AboutPage;
