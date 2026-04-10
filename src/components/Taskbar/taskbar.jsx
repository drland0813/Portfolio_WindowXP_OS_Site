import { useEffect, useState, useRef } from "react";
import "./taskbar.css";
import StartMenu from "#components/StartMenu/startMenu.jsx";
import TaskbarAppIcon from "#components/TaskbarAppIcon/taskbarAppIcon.jsx";

const VisitorCounter = () => {
    const [count, setCount] = useState(null);
    const [showBalloon, setShowBalloon] = useState(false);
    const balloonTimeout = useRef(null);

    useEffect(() => {
        const fetchVisits = async () => {
            try {
                const hasVisited = localStorage.getItem("drland_visited");
                let url = "https://api.counterapi.dev/v1/drland/portfolio";
                if (!hasVisited) {
                    url = "https://api.counterapi.dev/v1/drland/portfolio/up";
                }
                
                const res = await fetch(url);
                const data = await res.json();
                
                if (data && data.count) {
                    setCount(data.count);
                    if (!hasVisited) {
                        localStorage.setItem("drland_visited", "true");
                        // Auto show balloon on first ever visit
                        setTimeout(() => setShowBalloon(true), 2500);
                        balloonTimeout.current = setTimeout(() => setShowBalloon(false), 12500);
                    }
                }
            } catch (err) {
                console.error("Failed to load visitor count", err);
            }
        };
        fetchVisits();

        return () => {
            if (balloonTimeout.current) clearTimeout(balloonTimeout.current);
        };
    }, []);

    const toggleBalloon = () => {
        setShowBalloon(!showBalloon);
        if (balloonTimeout.current) clearTimeout(balloonTimeout.current);
    }

    return (
        <div className="tray-info-wrapper">
            <div className="tray-info-icon" title="Visitor Stats" onClick={toggleBalloon}>
                <svg width="15" height="15" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.5))', cursor: 'pointer' }}>
                    <path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12c0 1.93.55 3.72 1.48 5.23L2 22l4.77-1.48C8.28 21.45 10.07 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                    <path fill="#1a52b8" d="M11 17h2v-6h-2v6zm0-8h2V7h-2v2z"/>
                </svg>
            </div>
            
            {showBalloon && (
                <div className="xp-balloon">
                    <div className="xp-balloon-header">
                        <div className="xp-balloon-title">
                            <span style={{color: '#1a52b8', fontSize: '13px', lineHeight: 1}}>ℹ️</span> Portfolio Status
                        </div>
                        <button className="xp-balloon-close" onClick={() => setShowBalloon(false)}>X</button>
                    </div>
                    <div className="xp-balloon-body">
                        Thanks for dropping by!<br />
                        You are visitor number <strong>{count ? count.toLocaleString() : "..."}</strong>.<br />
                    </div>
                </div>
            )}
        </div>
    );
};



const Taskbar = ({ isOpen, isMinimized, onRestore }) => {
    const [time, setTime] = useState("");
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            setTime(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {openMenu && <StartMenu />}

            <div className="taskbar">
                <button
                    className="start-button"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                </button>
                {/* ICON APP */}
                {isOpen && (
                    <TaskbarAppIcon
                        title="My Showcase"
                        active={!isMinimized}
                        onClick={onRestore}
                    />
                )}

                <div className="system-tray">
                    <VisitorCounter />
                    <div className="clock-text">{time}</div>
                </div>
            </div>
        </>
    );
};

export default Taskbar;