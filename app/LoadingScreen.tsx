"use client"
import React, { useEffect, useState } from "react";
const LoadingScreen = () => {
    const [isFadeOut, setIsFadeOut] = useState(false);

    useEffect(() => {
        return () => {
            // This cleanup function runs when the LoadingScreen component is unmounted
            setIsFadeOut(true); // Trigger fade-out effect when unmounting
        };
    }, []);
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-dark-background bg-opacity-80 flex justify-center items-center text-white ${isFadeOut ? "opacity-0 transition-opacity duration-500 ease-in-out" : ""}`}>
            <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin mx-3"></div>
            <p className="mt-4">Loading...</p>
        </div>
    );
};

export default LoadingScreen;