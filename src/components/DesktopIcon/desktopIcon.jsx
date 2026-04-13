import "./desktopIcon.css"

const DesktopIcon = ({ title, icon, onDoubleClick }) => {
    return (
        <div className="desktop-icon" onDoubleClick={onDoubleClick} tabIndex={0}>
            <div className="icon-wrapper">
                <img src={icon} alt=""/>
            </div>
            <span>{title}</span>
        </div>
    );
};

export default DesktopIcon;