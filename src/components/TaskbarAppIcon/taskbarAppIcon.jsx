import "./taskbarAppIcon.css";

const TaskbarAppIcon = ({ icon, title, active, onClick }) => {
    return (
        <div
            className={`taskbar-app ${active ? "active" : ""}`}
            onClick={onClick}
        >
            {icon && <img src={icon} alt="" className="taskbar-app-icon" />}
            <span className="taskbar-app-title">{title}</span>
        </div>
    );
};

export default TaskbarAppIcon;