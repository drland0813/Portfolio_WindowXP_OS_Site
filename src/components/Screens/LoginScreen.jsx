import { useState } from "react";
import "./loginScreen.css";
import logonLogo from "../../assets/windows/nav/logonlogo.png";
import guestAvatar from "../../assets/windows/nav/Guest_(Windows_XP).png";

const LoginScreen = ({ onLogin }) => {
    const [loadingGuest, setLoadingGuest] = useState(false);

    const handleGuestClick = () => {
        setLoadingGuest(true);
        setTimeout(() => {
            onLogin();
        }, 1500); // 1.5s loading time
    };

    return (
        <div className="login-screen">
            <div className="login-top-bar"></div>
            <div className="login-white-line"></div>
            <div className="login-middle-area">
                <div className="login-left">
                    <div className="login-left-content">
                        <img src={logonLogo} alt="Windows XP" className="logon-logo" />
                        <h2 className="login-prompt">To begin, click your user name</h2>
                    </div>
                </div>
                <div className="login-divider"></div>
                <div className="login-right">
                    
                    <div className="user-list">
                        <div className="user-item disabled">
                            <img src={guestAvatar} alt="Drland" className="user-avatar grayscale" />
                            <div className="user-info">
                                <span className="user-name">Drland</span>
                                <span className="user-status">Locked</span>
                            </div>
                        </div>

                        <div className="user-item" onClick={handleGuestClick}>
                            <img src={guestAvatar} alt="Guest" className="user-avatar" />
                            <div className="user-info">
                                <span className="user-name">Guest</span>
                                {loadingGuest && <span className="user-loading">Loading your personal settings...</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-orange-line"></div>
            <div className="login-bottom-bar">
            </div>
        </div>
    );
};

export default LoginScreen;
