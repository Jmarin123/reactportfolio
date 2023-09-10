import React from "react";

const LoadingScreen = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center text-white z-50">
            <div className="border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin mx-3"></div>
            <p className="mt-4">Loading...</p>
        </div>
    );
};

export default LoadingScreen;