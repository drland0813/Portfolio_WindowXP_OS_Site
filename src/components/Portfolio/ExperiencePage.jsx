import React from 'react';
import './portfolioPages.css';
import { userData } from '../../data/userData';

const ExperiencePage = ({ navigateTo, lang }) => {
    const data = userData[lang].experienceData;

    return (
        <div className="portfolio-page-container">
            <div className="pp-content">
                <h2 className="pp-title">{data.title}</h2>
                <div style={{ height: '2px', background: '#e0e0d6', margin: '20px 0' }}></div>
                {data.items.map((exp, idx) => (
                    <div className="pp-exp-item" key={idx}>
                        <h3 className="pp-exp-role">{exp.role}</h3>
                        <p className="pp-exp-company">{exp.company} • {exp.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ExperiencePage;
