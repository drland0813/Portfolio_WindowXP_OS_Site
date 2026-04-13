import React, { useRef, useEffect } from 'react';
import './projectsView.css';
import './wikipediaProject.css';
import { archiveData, projectsData } from '../../data/projectsData';

const ProjectsView = ({ navigateTo, activeProjectId, lang }) => {
    const sidebarData = archiveData[lang];
    
    const defaultId = sidebarData[0].projects[0].id;
    const currentId = activeProjectId || defaultId;
    
    const projectContent = projectsData[lang][currentId] || projectsData[lang][defaultId];

    const contentRef = useRef(null);
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [currentId]);

    return (
        <div className="pv-container">
            <div className="pv-sidebar">
                <h3 style={{marginTop: 0, marginBottom: '25px', fontFamily: 'serif', fontSize: '1.4rem', textAlign: 'left'}}>{lang === 'vi' ? 'Lưu Trữ Dự Án' : 'Project Archive'}</h3>
                {sidebarData.map((group, idx) => (
                    <div className="pv-year-block" key={idx}>
                        <div className="pv-year-title">{group.year}</div>
                        <ul className="pv-project-list">
                            {group.projects.map((proj, pIdx) => (
                                <li 
                                    key={pIdx}
                                    className={`pv-project-item ${currentId === proj.id ? 'active' : ''}`}
                                    onClick={() => navigateTo('projects', proj.id, true)}
                                >
                                    {proj.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="pv-content" ref={contentRef}>
                <div className="wiki-content-wrapper main-wrap" style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
                    <h1 className="wiki-title">{projectContent.title}</h1>
                    <div className="wiki-divider"></div>
                    
                    <div className="wiki-hero-split">
                        <div className="wiki-hero-media">
                            {(() => {
                                if (!projectContent.videoUrl) {
                                    return (
                                        <div className="placeholder-gif target-cover">
                                            <span>[ PLAYING GAMEPLAY GIF / TRAILER: {projectContent.title} ]</span>
                                        </div>
                                    );
                                }

                                if (projectContent.videoUrl.endsWith('.mp4') || projectContent.videoUrl.endsWith('.webm')) {
                                    return (
                                        <video 
                                            className="target-cover" 
                                            src={projectContent.videoUrl} 
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline
                                            style={{ border: 'none', padding: 0, backgroundColor: '#000', outline: 'none' }}
                                        />
                                    );
                                }

                                let iframeSrc = projectContent.videoUrl;
                                if (iframeSrc.includes('drive.google.com')) {
                                    iframeSrc = iframeSrc.replace(/\/view.*$/, '/preview');
                                } else if (iframeSrc.includes('youtube.com') || iframeSrc.includes('youtu.be')) {
                                    const match = iframeSrc.match(/[?&]v=([^&]+)/) || iframeSrc.match(/youtu\.be\/([^?]+)/);
                                    if (match && match[1]) {
                                        iframeSrc = `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=1&loop=1&playlist=${match[1]}&controls=0`;
                                    }
                                }

                                return (
                                    <iframe 
                                        className="target-cover" 
                                        src={iframeSrc} 
                                        style={{ border: 'none', padding: 0, backgroundColor: '#000' }}
                                        allow="autoplay; encrypted-media; fullscreen" 
                                        allowFullScreen
                                        title={`${projectContent.title} Demo`}
                                    ></iframe>
                                );
                            })()}
                        </div>
                        
                        <div className="wiki-hero-info">
                            <table className="infobox-table">
                                <tbody>
                                    <tr>
                                        <th>{projectContent.headerTitles.role}</th>
                                        <td>{projectContent.role}</td>
                                    </tr>
                                    <tr>
                                        <th>{projectContent.headerTitles.engine}</th>
                                        <td><a href="#">{projectContent.engine}</a></td>
                                    </tr>
                                    <tr>
                                        <th>{projectContent.headerTitles.lang}</th>
                                        <td>{projectContent.language}</td>
                                    </tr>
                                    <tr>
                                        <th>Nền tảng</th>
                                        <td>{projectContent.platform}</td>
                                    </tr>
                                    <tr>
                                        <th>{projectContent.headerTitles.team}</th>
                                        <td>{projectContent.teamSize}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="wiki-main-content-full">
                        <p className="wiki-text">
                            <strong>{projectContent.title}</strong> {projectContent.elevatorPitch.substring(projectContent.title.length + 3) /* Fallback offset */}
                            {projectContent.elevatorPitch}
                        </p>

                        <h2 className="wiki-section-title">{projectContent.overviewData.title}</h2>
                        <div className="wiki-divider"></div>
                        <p className="wiki-text">
                            {projectContent.overviewData.text}
                        </p>

                        <h2 className="wiki-section-title">{projectContent.mechanicData.title}</h2>
                        <div className="wiki-divider"></div>
                        <p className="wiki-text">
                            {projectContent.mechanicData.intro}
                        </p>
                        
                        <div className="wiki-gallery">
                            {projectContent.mechanics.map((mech, index) => (
                                <div className="gallery-item" key={index}>
                                    <div className="placeholder-image-small"><span>{mech.imagePlaceholder}</span></div>
                                    <p>{mech.label}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="wiki-section-title">{projectContent.techData.title}</h2>
                        <div className="wiki-divider"></div>
                        <p className="wiki-text">
                            {projectContent.techData.text}
                        </p>
                        <div className="wiki-code-snippet">
                            <code>
                                <pre style={{ margin: 0 }}>{projectContent.codeSnippet}</pre>
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsView;
