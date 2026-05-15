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
                        <div className="pp-exp-heading">
                            <h3 className="pp-exp-role">{exp.role}</h3>
                            <span className="pp-exp-year">{exp.year}</span>
                        </div>
                        <p className="pp-exp-company">{exp.company}</p>
                        {exp.description && <p className="pp-exp-description">{exp.description}</p>}
                        {exp.contributions?.length > 0 && (
                            <div className="pp-exp-contributions">
                                {exp.sectionTitle && <h4>{exp.sectionTitle}</h4>}
                                <ul>
                                    {exp.contributions.map((item, itemIdx) => (
                                        <li key={itemIdx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
                {data.technologies?.items?.length > 0 && (
                    <div className="pp-exp-tech">
                        <h3>{data.technologies.title}</h3>
                        <div className="pp-exp-tech-list">
                            {data.technologies.items.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ExperiencePage;
