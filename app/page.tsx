"use client"
// PageContainer.js
import { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import TransitionWrapper from "./components/transitionWrapper";

export default function Home() {
    const [fadeIn, setFadeIn] = useState<boolean>(false);
    const [removeBlackScreen, setRemoveBlackScreen] = useState<boolean>(false);
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
            {/* <div
                className={`bg-dark-background h-screen w-screen fixed top-0 left-0 z-[200] ${fadeIn ? "opacity-0 transition-opacity duration-500 ease-in-out" : "opacity-100"} ${removeBlackScreen ? "hidden" : ""
                    }`}
                onTransitionEnd={handleTransitionEnd}
            /> */}
            <TransitionWrapper>
              <MainPage/>
            </TransitionWrapper>
        </>
    );
}