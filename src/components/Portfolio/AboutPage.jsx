import React from 'react';
import './portfolioPages.css';
import { userData } from '../../data/userData';
import childPhoto from '../../assets/projects/about-me/me_then.jpg';
import currentPhoto from '../../assets/projects/about-me/me_now.jpg';

const AboutPage = ({ navigateTo, lang }) => {
    const data = userData[lang].aboutData;

    return (
        <div className="portfolio-page-container">
            <div className="pp-content about-content">
                <h2 className="pp-title">{data.title}</h2>
                <div style={{ height: '2px', background: '#e0e0d6', margin: '20px 0' }}></div>
                <div className="about-layout">
                    <div className="about-text">
                        <p>{data.content}</p>
                        {data.extraItems && data.extraItems.length > 0 && (
                            <div className="about-extra">
                                <h3>{data.extraTitle}</h3>
                                <ul>
                                    {data.extraItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="about-photo-column" aria-label="Personal photos">
                        <figure className="about-photo-card">
                            <img src={childPhoto} alt="Pham Van Dien as a child" />
                            <figcaption>A curious kid who loved discovering how things worked.</figcaption>
                        </figure>
                        <figure className="about-photo-card">
                            <img src={currentPhoto} alt="Pham Van Dien now" />
                            <figcaption>What if? ...So I built it.</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutPage;
