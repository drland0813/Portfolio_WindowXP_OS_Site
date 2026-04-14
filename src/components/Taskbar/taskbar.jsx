import { useEffect, useState, useRef } from "react";
import "./taskbar.css";
import StartMenu from "#components/StartMenu/startMenu.jsx";
import TaskbarAppIcon from "#components/TaskbarAppIcon/taskbarAppIcon.jsx";
import iconIexplore from "../../assets/windows/nav/iexplore.png";

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
                    localStorage.setItem("drland_visited", "true");
                }
                
                const res = await fetch(url);
                const data = await res.json();
                
                if (data && data.count) {
                    setCount(data.count);
                }
            } catch (err) {
                console.error("Failed to load visitor count", err);
            }

            // Always auto-show balloon on every visit
            setTimeout(() => setShowBalloon(true), 2500);
            balloonTimeout.current = setTimeout(() => setShowBalloon(false), 12500);
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
                        Have a wonderful day! 🌟<br />
                        Thanks for dropping by —<br />
                        you are visitor number <strong>{count ? count.toLocaleString() : "..."}</strong>.
                    </div>
                </div>
            )}
        </div>
    );
};



const Taskbar = ({ isOpen, isMinimized, onRestore, onShutdown }) => {
    const [time, setTime] = useState("");
    const [openMenu, setOpenMenu] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openMenu && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        };

        if (openMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-US", {
                hour: "numeric",
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
        <div ref={wrapperRef}>
            {openMenu && <StartMenu onShutdown={onShutdown} />}

            <div className="taskbar">
                <button
                    className={`start-button ${openMenu ? "active" : ""}`}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                </button>
                {/* ICON APP */}
                {isOpen && (
                    <TaskbarAppIcon
                        icon={iconIexplore}
                        title="Internet Explorer"
                        active={!isMinimized}
                        onClick={onRestore}
                    />
                )}

                <div className="system-tray">
                    <VisitorCounter />
                    <div className="clock-text">{time}</div>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;