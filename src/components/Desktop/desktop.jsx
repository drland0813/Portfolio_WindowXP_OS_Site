import { useState } from "react";
import DesktopIcon from "#components/DesktopIcon/desktopIcon.jsx";
import Taskbar from "#components/Taskbar/taskbar.jsx";
import WindowFrame from "#components/WindowFrame/windowFrame.jsx";
import Portfolio from "#components/Portfolio/Portfolio.jsx";
import showcaseLogo from "../../assets/windows/showcase_logo.png";

import "./desktop.css";

const Desktop = () => {
    const [docsWindow, setDocsWindow] = useState({
        open: false,
        minimized: false,
    });

    const openDocs = () => {
        setDocsWindow({ open: true, minimized: false });
    };

    const closeDocs = () => {
        setDocsWindow({ open: false, minimized: false });
    };

    const minimizeDocs = () => {
        setDocsWindow(prev => ({ ...prev, minimized: true }));
    };

    const restoreDocs = () => {
        setDocsWindow(prev => ({ ...prev, minimized: false }));
    };

    return (
        <div className="desktop">

            {/* ICON */}
            <DesktopIcon
                title="My Showcase"
                icon={showcaseLogo}
                onDoubleClick={openDocs}
            />

            {/* WINDOW */}
            {docsWindow.open && !docsWindow.minimized && (
                <WindowFrame
                    title="My Showcase"
                    onClose={closeDocs}
                    onMinimize={minimizeDocs}
                >
                    <Portfolio />
                </WindowFrame>
            )}

            {/* TASKBAR */}
            <Taskbar
                isOpen={docsWindow.open}
                isMinimized={docsWindow.minimized}
                onRestore={restoreDocs}
            />
        </div>
    );
};

export default Desktop;