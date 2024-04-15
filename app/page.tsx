"use client"
// PageContainer.js
import Terminal from "./components/Terminal";
import TransitionWrapper from "./components/transitionWrapper";

export default function Home() {
    return (
        <TransitionWrapper>
            <Terminal/>
        </TransitionWrapper>
    );
}