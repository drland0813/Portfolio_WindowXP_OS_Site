import React, { useRef, useEffect, useMemo, useState } from 'react';
import './projectsView.css';
import './wikipediaProject.css';
import { archiveData, projectsData } from '../../data/projectsData';

// Vite glob: tự động load tất cả ảnh trong src/assets/projects/**/
const allProjectImages = import.meta.glob(
    '../../assets/projects/**/*.{png,jpg,jpeg,webp,gif}',
    { eager: true }
);


const ProjectsView = ({ navigateTo, activeProjectId, lang }) => {
    const mediaScrollRef = useRef(null);
    const sidebarData = archiveData[lang];

    const defaultId = sidebarData[0].projects[0].id;
    const currentId = activeProjectId || defaultId;

    const projectContent = projectsData[lang][currentId] || projectsData[lang][defaultId];

    // Lọc ảnh theo imageFolder của project hiện tại
    const folderImages = useMemo(() => {
        const folder = projectContent.imageFolder;
        if (!folder) return [];
        return Object.entries(allProjectImages)
            .filter(([path]) => path.includes(`/projects/${folder}/`))
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([, mod]) => mod.default);
    }, [projectContent.imageFolder]);

    const contentRef = useRef(null);
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [currentId]);

    const scrollMedia = (direction) => {
        if (mediaScrollRef.current) {
            const scrollAmount = mediaScrollRef.current.clientWidth * 0.95;
            mediaScrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    // Lightbox
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = (e) => { e.stopPropagation(); setLightboxIndex(i => (i - 1 + folderImages.length) % folderImages.length); };
    const nextImage = (e) => { e.stopPropagation(); setLightboxIndex(i => (i + 1) % folderImages.length); };

    useEffect(() => {
        const handleKey = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + folderImages.length) % folderImages.length);
            if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % folderImages.length);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, folderImages.length]);

    return (
        <div className="pv-container">
            {/* LIGHTBOX OVERLAY — rendered at pv-container level to avoid scroll offset */}
            {lightboxIndex !== null && (
                <div className="lb-overlay" onClick={closeLightbox}>
                    <button className="lb-close" onClick={closeLightbox}>&#x2715;</button>
                    {folderImages.length > 1 && (
                        <button className="lb-nav lb-nav--left" onClick={prevImage}>&#10094;</button>
                    )}
                    <div className="lb-img-wrap" onClick={e => e.stopPropagation()}>
                        <img
                            src={folderImages[lightboxIndex]}
                            alt={`Screenshot ${lightboxIndex + 1}`}
                            className="lb-img"
                        />
                        <div className="lb-counter">{lightboxIndex + 1} / {folderImages.length}</div>
                    </div>
                    {folderImages.length > 1 && (
                        <button className="lb-nav lb-nav--right" onClick={nextImage}>&#10095;</button>
                    )}
                </div>
            )}

            <div className="pv-sidebar">
                <h3 style={{ marginTop: 0, marginBottom: '25px', fontFamily: 'serif', fontSize: '1.4rem', textAlign: 'left' }}>{lang === 'vi' ? 'Lưu Trữ Dự Án' : 'Project Archive'}</h3>
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
                <div className="wiki-content-wrapper main-wrap">


                    <h1 className="wiki-title">{projectContent.title}</h1>
                    <div className="wiki-divider"></div>
                    <div className="wiki-hero-split">
                        <div className="media-wrapper">
                            <div className="wiki-hero-media" ref={mediaScrollRef}>
                                <div className="media-scroll-item">
                                    {(() => {
                                        if (!projectContent.videoUrl) {
                                            return (
                                                <div className="placeholder-gif target-cover" style={{ margin: 0, maxWidth: '100%' }}>
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
                                                    style={{ border: 'none', padding: 0, backgroundColor: '#000', outline: 'none', margin: 0, maxWidth: '100%' }}
                                                />
                                            );
                                        }

                                        let iframeSrc = projectContent.videoUrl;
                                        if (iframeSrc.includes('drive.google.com')) {
                                            iframeSrc = iframeSrc.replace(/\/view.*$/, '/preview');
                                        } else if (iframeSrc.includes('youtube.com') || iframeSrc.includes('youtu.be')) {
                                            const match = iframeSrc.match(/[?&]v=([^&]+)/) || iframeSrc.match(/youtu\.be\/([^?]+)/);
                                            if (match && match[1]) {
                                                iframeSrc = `https://www.youtube.com/embed/${match[1]}?autoplay=1&mute=0&loop=1&playlist=${match[1]}&controls=1`;
                                            }
                                        }

                                        return (
                                            <iframe
                                                className="target-cover"
                                                src={iframeSrc}
                                                style={{ border: 'none', padding: 0, backgroundColor: '#000', margin: 0, maxWidth: '100%' }}
                                                allow="autoplay; encrypted-media; fullscreen"
                                                allowFullScreen
                                                title={`${projectContent.title} Demo`}
                                            ></iframe>
                                        );
                                    })()}
                                </div>
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
                                        <th>{projectContent.headerTitles.platform}</th>
                                        <td>{projectContent.platform}</td>
                                    </tr>
                                    {projectContent.duration && (
                                        <tr>
                                            <th>{projectContent.headerTitles.time}</th>
                                            <td>{projectContent.duration}</td>
                                        </tr>
                                    )}
                                    {projectContent.repo && (
                                        <tr>
                                            <th>{projectContent.headerTitles.repo}</th>
                                            <td><a href={projectContent.repo} target="_blank" rel="noreferrer">Link</a></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="wiki-main-content-full">
                        <h2 className="wiki-section-title">About This Game</h2>
                        <div className="wiki-divider"></div>
                        <p className="wiki-text">{projectContent.aboutData.pitch}</p>
                        <p className="wiki-text">{projectContent.aboutData.text}</p>

                        {/* Screenshots gallery – below About section */}
                        {(folderImages.length > 0) && (
                            <>
                                <h2 className="wiki-section-title" style={{ marginTop: '28px' }}>Screenshots</h2>
                                <div className="wiki-divider"></div>
                                <div className={`screenshot-gallery screenshot-gallery--${Math.min(folderImages.length, 3)}`}>
                                    {folderImages.map((src, index) => (
                                        <div
                                            key={index}
                                            className="screenshot-gallery__item"
                                            onClick={() => openLightbox(index)}
                                            title="Click to zoom"
                                        >
                                            <img
                                                src={src}
                                                alt={`Screenshot ${index + 1}`}
                                                className="screenshot-gallery__img"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}


                        <h2 className="wiki-section-title">What I Did</h2>
                        <div className="wiki-divider"></div>
                        <p className="wiki-text">
                            {projectContent.mechanicData.intro}
                        </p>

                        <ul className="wiki-text" style={{ paddingLeft: '20px' }}>
                            {projectContent.mechanics.map((mech, index) => (
                                <li key={index} style={{ marginBottom: '8px' }}>{mech.label}</li>
                            ))}
                        </ul>

                        <h2 className="wiki-section-title">Tech Use</h2>
                        <div className="wiki-divider"></div>
                        <p className="wiki-text" style={{ whiteSpace: 'pre-wrap' }}>
                            {projectContent.techData.text}
                        </p>

                        {projectContent.codeSnippet && (
                            <div className="wiki-code-snippet">
                                <code>
                                    <pre style={{ margin: 0 }}>{projectContent.codeSnippet}</pre>
                                </code>
                            </div>
                        )}

                        {projectContent.impact && projectContent.impact.length > 0 && (
                            <>
                                <h2 className="wiki-section-title">Impact & Results</h2>
                                <div className="wiki-divider"></div>
                                <ul className="wiki-text" style={{ paddingLeft: '20px' }}>
                                    {projectContent.impact.map((item, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>{item}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsView;
