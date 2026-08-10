import React, { useRef } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './pdfViewer.css';

// pdfjs worker version must match pdfjs-dist version
import { version as pdfjsVersion } from 'pdfjs-dist/package.json';

const PdfViewerPage = ({ pdfUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: () => [],   // hide sidebar tabs (thumbnails/bookmarks)
        renderToolbar: (Toolbar) => (
            <Toolbar>
                {(slots) => {
                    const {
                        CurrentPageInput,
                        GoToNextPage,
                        GoToPreviousPage,
                        NumberOfPages,
                        ShowSearchPopover,
                        Zoom,
                        ZoomIn,
                        ZoomOut,
                        Download,
                        Print,
                    } = slots;
                    return (
                        <div className="rpv-xp-toolbar">
                            <div className="rpv-xp-toolbar-left">
                                <ShowSearchPopover />
                                <div className="rpv-xp-sep" />
                                <GoToPreviousPage />
                                <span className="rpv-xp-page-info">
                                    <CurrentPageInput /> / <NumberOfPages />
                                </span>
                                <GoToNextPage />
                                <div className="rpv-xp-sep" />
                                <ZoomOut />
                                <Zoom />
                                <ZoomIn />
                            </div>
                            <div className="rpv-xp-toolbar-right">
                                <Download />
                                <Print />
                            </div>
                        </div>
                    );
                }}
            </Toolbar>
        ),
    });

    const workerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

    return (
        <div className="pdf-viewer-container">
            <Worker workerUrl={workerUrl}>
                <Viewer
                    fileUrl={pdfUrl}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
};

export default PdfViewerPage;
