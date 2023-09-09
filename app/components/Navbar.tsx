"use client"
import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!isOpen);
    };

    return (
        <nav className="bg-light-primary p-4 w-full flex items-center">
        </nav>
    );
}


/*
<nav className="bg-light-primary p-4">
            <div className="container mx-4 flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    Jason Osorio Marin
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="text-white focus:outline-none focus:text-white"
                    >
                        <div
                            className={`w-6 h-1 bg-white transition-transform transform ${isOpen ? 'rotate-45 translate-y-1' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-6 h-1 bg-white mt-1 transition-opacity ${isOpen ? 'opacity-0' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-6 h-1 bg-white mt-1 transition-transform transform ${isOpen ? '-rotate-45 -translate-y-1' : ''
                                }`}
                        ></div>
                    </button>
                </div>
                <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="text-white">Projects</a>
                    <a href="#" className="text-white">Experience</a>
                    <a href="#" className="text-white">About Me</a>
                </div>
            </div>
        </nav>
*/