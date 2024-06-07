"use client"
import Navbar from "./components/Navbar/Navbar";
// PageContainer.js
import Terminal from "./components/Terminal";
import TransitionWrapper from "./components/transitionWrapper";

export default function Home() {
    return (
        <TransitionWrapper>
            <Navbar/>
            <Terminal/>
        </TransitionWrapper>
    );
}