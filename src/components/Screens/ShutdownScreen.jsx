import { useEffect } from "react";
import "./shutdownScreen.css";
import logonLogo from "../../assets/windows/nav/logonlogo.png";
import shutdownSoundUrl from "../../assets/windows/nav/Windows XP shutdown sound.mp3";

const ShutdownScreen = ({ onRestart }) => {
    useEffect(() => {
        const audio = new Audio(shutdownSoundUrl);
        let hasFinished = false;

        const finish = () => {
            if (!hasFinished) {
                hasFinished = true;
                onRestart();
            }
        };

        audio.onended = finish;

        audio.play().catch(error => {
            console.error("Audio play failed:", error);
            setTimeout(finish, 3000);
        });

        // 6 second fallback just in case the audio gets stuck playing or can't trigger onended
        const fallbackTimer = setTimeout(finish, 6000);

        return () => {
            audio.pause();
            audio.onended = null;
            clearTimeout(fallbackTimer);
        };
    }, [onRestart]);

    return (
        <div className="shutdown-screen-full">
            <div className="shutdown-top-bar">
            </div>
            <div className="shutdown-white-line"></div>
            <div className="shutdown-middle-area">
                <div className="shutdown-center-content">
                    <img src={logonLogo} alt="Windows XP" className="shutdown-logo-center" />
                    <div className="shutdown-message-center">
                        Windows is shutting down...
                    </div>
                </div>
            </div>
            <div className="shutdown-orange-line"></div>
            <div className="shutdown-bottom-bar"></div>
        </div>
    );
};

export default ShutdownScreen;
