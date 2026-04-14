import { useState, useEffect } from "react";
import Desktop from "./components/Desktop/Desktop";
import BootScreen from "./components/Screens/BootScreen";
import LoginScreen from "./components/Screens/LoginScreen";
import ShutdownScreen from "./components/Screens/ShutdownScreen";
import clickSoundUrl from "./assets/windows/nav/mouseclick.mp3";
import "./App.css";

const App = () => {
    const [screen, setScreen] = useState('boot');

    useEffect(() => {
        const audio = new Audio(clickSoundUrl);
        const playClickSound = () => {
            audio.currentTime = 0;
            audio.play().catch(() => {});
        };

        window.addEventListener('mousedown', playClickSound);
        return () => window.removeEventListener('mousedown', playClickSound);
    }, []);

    return (
        <>
            <div className="scanlines"></div>
            {screen === 'boot' && <BootScreen onComplete={() => setScreen('login')} />}
            {screen === 'login' && <LoginScreen onLogin={() => setScreen('desktop')} />}
            {screen === 'desktop' && <Desktop onShutdown={() => setScreen('shutdown')} />}
            {screen === 'shutdown' && <ShutdownScreen onRestart={() => setScreen('boot')} />}
        </>
    );
};

export default App;