import { useEffect } from "react";
import "./bootScreen.css";
import bootGif from "../../assets/windows/nav/boot.gif";

const BootScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000); // 2 seconds
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="boot-screen">
            <img src={bootGif} alt="Windows XP Loading..." className="boot-animation" />
        </div>
    );
};

export default BootScreen;
