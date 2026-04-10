import React, { useRef, useEffect } from 'react';
import './projectsView.css';
import './wikipediaProject.css'; // Mượn lại style cũ của phần nội dung
import { archiveData, projectsData } from '../../data/projectsData';

const ProjectsView = ({ navigateTo, activeProjectId, lang }) => {
    // 1. Lấy root data
    const sidebarData = archiveData[lang];
    
    // 2. Xác định dự án mặc định nếu chưa chọn
    // Tự động load dự án đầu tiên của mảng (ví dụ: neon-cyber-drift)
    const defaultId = sidebarData[0].projects[0].id;
    const currentId = activeProjectId || defaultId;
    
    // 3. Lấy dữ liệu bài báo của dự án đang hiển thị
    const projectContent = projectsData[lang][currentId] || projectsData[lang][defaultId];

    // 4. Ref để scroll về đầu khi chuyển project
    const contentRef = useRef(null);
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [currentId]);

    return (
        <div className="pv-container">
            {/* CỘT TRÁI - SIDEBAR TIMELINE */}
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

            {/* CỘT PHẢI - NỘI DUNG CHI TIẾT (Kế thừa từ Wiki) */}
            <div className="pv-content" ref={contentRef}>
                <div className="wiki-content-wrapper main-wrap" style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
                    <h1 className="wiki-title">{projectContent.title}</h1>
                    <div className="wiki-divider"></div>
                    
                    <div className="wiki-hero-split">
                        <div className="wiki-hero-media">
                            <div className="placeholder-gif target-cover">
                                <span>[ PLAYING GAMEPLAY GIF / TRAILER: {projectContent.title} ]</span>
                            </div>
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
