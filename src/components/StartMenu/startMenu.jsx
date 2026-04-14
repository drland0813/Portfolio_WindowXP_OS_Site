import "./startMenu.css";
import guestAvatar from "../../assets/windows/nav/Guest_(Windows_XP).png";
import shutdownIcon from "../../assets/windows/nav/shutdown.png";

const StartMenu = ({ onShutdown }) => {
    return (
        <div className="start-menu">
            <div className="start-header">
                <div className="avatar-container">
                    <img src={guestAvatar} className="avatar" alt="Guest Avatar" />
                </div>
                <span className="username">Guest</span>
            </div>
            
            <div className="start-orange-line"></div>

            <div className="start-footer">
                <div className="footer-action" onClick={onShutdown}>
                    <img src={shutdownIcon} className="action-icon" alt="Turn Off Computer" />
                    <span className="action-text">T<u>u</u>rn Off Computer</span>
                </div>
            </div>
        </div>
    );
};

export default StartMenu;