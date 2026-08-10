import { useEffect, useState } from "react";
import "./windowFrame.css";
import iconWebpage from "../../assets/windows/nav/webpage.png";
import iconMinimize from "../../assets/windows/nav/minimize.png";
import iconMaximize from "../../assets/windows/nav/maximize.png";
import iconClose from "../../assets/windows/nav/close.png";

const WindowFrame = ({
    title = "Window",
    icon = null,
    onMinimize,
    onClose,
    zIndex = 1,
    onFocus,
    children
}) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [position, setPosition] = useState({ x: (window.innerWidth / 2), y: (window.innerHeight / 2) });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });



    const handleMouseDown = (e) => {
        if (isMaximized) return;

        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;

            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
    }, [isDragging, offset]);




    return (
        <div
            className={`window-frame ${isMaximized ? "maximized" : ""}`}
            style={{
                zIndex: zIndex,
                ...(isMaximized ? {} : {
                    left: position.x,
                    top: position.y,
                    position: 'absolute',
                })
            }}
            onMouseDownCapture={onFocus}
        >
            <div className="window-titleBar"
                onMouseDown={handleMouseDown}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <img src={icon || iconWebpage} alt="icon" style={{ width: '16px', height: '16px' }} />
                    <span className="window-title">{title}</span>
                </div>
                <div className="window-controls">
                    <button
                        onClick={onMinimize}
                        className="btn minimize"
                    >
                        <img src={iconMinimize} alt="Minimize" className="window-btn-icon" />
                    </button>

                    <button
                        onClick={() => setIsMaximized(!isMaximized)}
                        className="btn maximize"
                    >
                        <img src={iconMaximize} alt="Maximize" className="window-btn-icon" />
                    </button>

                    <button
                        onClick={onClose}
                        className="btn close"
                    >
                        <img src={iconClose} alt="Close" className="window-btn-icon" />
                    </button>
                </div>
            </div>

            <div className="window-body" style={{ position: 'relative', height: '100%' }}>
                {isDragging && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }} />
                )}
                {children}
            </div>
        </div>
    );
};

export default WindowFrame;