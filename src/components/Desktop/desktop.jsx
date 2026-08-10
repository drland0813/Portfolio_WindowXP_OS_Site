import { useState, useEffect } from "react";
import DesktopIcon from "#components/DesktopIcon/desktopIcon.jsx";
import Taskbar from "#components/Taskbar/taskbar.jsx";
import WindowFrame from "#components/WindowFrame/windowFrame.jsx";
import Portfolio from "#components/Portfolio/Portfolio.jsx";
import PdfViewerPage from "#components/PdfViewer/PdfViewerPage.jsx";
import showcaseLogo from "../../assets/windows/showcase_logo.png";
import startSoundUrl from "../../assets/windows/nav/Windows XP start sound.mp3";
import iconIexplore from "../../assets/windows/nav/iexplore.png";

import "./desktop.css";

const CV_PDF_URL = "/Portfolio_WindowXP_OS_Site/cv/CV-PhamVanDien-UnityDeveloper.pdf";

const Desktop = ({ onShutdown }) => {
    useEffect(() => {
        const audio = new Audio(startSoundUrl);
        audio.play().catch(e => console.log("Audio play failed on startup:", e));
    }, []);

    const [activeWindow, setActiveWindow] = useState(null);

    const [docsWindow, setDocsWindow] = useState({
        open: true,
        minimized: false,
    });

    const [pdfWindow, setPdfWindow] = useState({
        open: false,
        minimized: false,
    });

    const openDocs = () => { setDocsWindow({ open: true, minimized: false }); setActiveWindow("docs"); };
    const closeDocs = () => setDocsWindow({ open: false, minimized: false });
    const minimizeDocs = () => setDocsWindow(prev => ({ ...prev, minimized: true }));

    const openPdf = () => { setPdfWindow({ open: true, minimized: false }); setActiveWindow("pdf"); };
    const closePdf = () => setPdfWindow({ open: false, minimized: false });
    const minimizePdf = () => setPdfWindow(prev => ({ ...prev, minimized: true }));

    return (
        <div className="desktop">

            {/* ICON */}
            <DesktopIcon
                title="My Showcase"
                icon={showcaseLogo}
                onDoubleClick={openDocs}
            />

            {/* My Showcase WINDOW */}
            {docsWindow.open && !docsWindow.minimized && (
                <WindowFrame
                    title="My Showcase"
                    onClose={closeDocs}
                    onMinimize={minimizeDocs}
                    zIndex={activeWindow === "docs" ? 10 : 1}
                    onFocus={() => setActiveWindow("docs")}
                >
                    <Portfolio onOpenPdf={openPdf} />
                </WindowFrame>
            )}

            {/* CV PDF VIEWER WINDOW */}
            {pdfWindow.open && !pdfWindow.minimized && (
                <WindowFrame
                    title="CV - Pham Van Dien | Unity Developer"
                    onClose={closePdf}
                    onMinimize={minimizePdf}
                    zIndex={activeWindow === "pdf" ? 10 : 1}
                    onFocus={() => setActiveWindow("pdf")}
                >
                    <PdfViewerPage pdfUrl={CV_PDF_URL} />
                </WindowFrame>
            )}

            {/* TASKBAR */}
            <Taskbar
                windows={[
                    {
                        id: "docs",
                        title: "Internet Explorer",
                        icon: iconIexplore,
                        isOpen: docsWindow.open,
                        isMinimized: docsWindow.minimized,
                        isActive: activeWindow === "docs" && !docsWindow.minimized,
                        onRestore: () => {
                            if (docsWindow.minimized || activeWindow !== "docs") {
                                setDocsWindow(prev => ({ ...prev, minimized: false }));
                                setActiveWindow("docs");
                            } else {
                                setDocsWindow(prev => ({ ...prev, minimized: true }));
                            }
                        }
                    },
                    {
                        id: "pdf",
                        title: "CV - Pham Van Dien",
                        icon: null,
                        isOpen: pdfWindow.open,
                        isMinimized: pdfWindow.minimized,
                        isActive: activeWindow === "pdf" && !pdfWindow.minimized,
                        onRestore: () => {
                            if (pdfWindow.minimized || activeWindow !== "pdf") {
                                setPdfWindow(prev => ({ ...prev, minimized: false }));
                                setActiveWindow("pdf");
                            } else {
                                setPdfWindow(prev => ({ ...prev, minimized: true }));
                            }
                        }
                    }
                ]}
                onShutdown={onShutdown}
            />
        </div>
    );
};

export default Desktop;