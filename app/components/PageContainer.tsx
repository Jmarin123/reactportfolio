// PageContainer.js
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import { useEffect, useState } from "react";

export default function PageContainer() {
    const [fadeIn, setFadeIn] = useState(false);
    const [removeBlackScreen, setRemoveBlackScreen] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true);
        }, 600);
    }, []);
    const handleTransitionEnd = () => {
        if (fadeIn) {
            setRemoveBlackScreen(true);
        }
    };
    return (
        <>
            <div
                className={`bg-dark-background h-screen w-screen fixed top-0 left-0 z-50 ${fadeIn ? "opacity-0 transition-opacity duration-500 ease-in-out" : "opacity-100"} ${removeBlackScreen ? "hidden" : ""
                    }`}
                onTransitionEnd={handleTransitionEnd}
            />
            <div>
                <Navbar />
                <MainPage />
            </div>
        </>
    );
}