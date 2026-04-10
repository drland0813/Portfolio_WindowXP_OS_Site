import { useEffect, useState } from "react";
import "./windowFrame.css";

const WindowFrame = ({
    title = "Window",
    onMinimize,
    onClose,
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
            className={`window-frame ${isMaximized ? "maximized" : ""
                }`}
            style={{
                left: position.x,
                top: position.y,
                position: 'absolute',
            }}
        // onMouseMove={handleMouseMove}
        // onMouseUp={handleMouseUp}
        >
            <div className="window-titleBar"
                onMouseDown={handleMouseDown}
            >
                {/*<span className="window-title">{title}</span>*/}
                <span className="window-title">{title}</span>
                <div className="window-controls">
                    <button
                        onClick={onMinimize}
                        className="btn minimize"
                    ></button>

                    <button
                        onClick={() => setIsMaximized(!isMaximized)}
                        className="btn maximize"
                    ></button>

                    <button
                        onClick={onClose}
                        className="btn close"
                    ></button>
                </div>
            </div>

            <div className="window-body">
                {children}
            </div>
        </div>
    );
};

export default WindowFrame;