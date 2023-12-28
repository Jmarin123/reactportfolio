"use client"
// PageContainer.js
import MainPage from "./components/MainPage";
import TransitionWrapper from "./components/transitionWrapper";

export default function Home() {
    return (
        <TransitionWrapper>
            <MainPage/>
        </TransitionWrapper>
    );
}