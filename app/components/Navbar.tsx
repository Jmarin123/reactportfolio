"use client"
import React, { useState } from 'react';
import Switcher from './Switcher';
export default function Navbar() {
    const [isOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!isOpen);
    };

    return (
        <nav className="p-4 h-full w-full flex justify-between items-center px-4">
            <div className='text-light-text text-2xl dark:text-dark-text'>Jason Osorio Marin</div>
            <div className='flex space-x-3 items-center'>
                <Switcher />
                <div className="md:hidden text-white flex items-center">
                    <button className='rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 p-3 cursor-pointer dark:hover:bg-neutral-700'
                        onClick={toggleNavbar}

                    >
                        <div
                            className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text transition-transform transform ${isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text mt-1 transition-opacity ${isOpen ? 'translate-x-6 opacity-0 transition-[opacity,transform]' : 'translate-x-0 opacity-100 transition-[opacity,transform]'
                                }`}
                        ></div>
                        <div
                            className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text mt-1 transition-transform transform ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        ></div>
                    </button>
                </div>
                <a className="text-light-text dark:text-dark-text text-lg cursor-pointer hover:text-gray-400 dark:hover:text-gray-400
                transition max-md:hidden">About Me</a>
                <a className="text-light-text dark:text-dark-text text-lg cursor-pointer hover:text-gray-400 dark:hover:text-gray-400
                transition max-md:hidden">Projects</a>
                <a className="text-light-text dark:text-dark-text text-lg cursor-pointer hover:text-gray-400 dark:hover:text-gray-400
                transition max-md:hidden">Contact Me</a>
            </div>
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