"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Switcher from './Switcher';
interface NavbarProps {
    setGlobalTheme: Dispatch<SetStateAction<string>>;
}
const Navbar: React.FC<NavbarProps> = ({ setGlobalTheme }) => {
    const [isOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const toggleNavbar = () => {
        setMenuOpen(!isOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;

            // Adjust the threshold value according to your layout
            setIsSticky(offset > 50);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`p-4 w-full flex justify-between items-center z-10 top-0 left-0 fixed ${isSticky ? "dark:bg-dark-background bg-light-background" : ""}`}>
            <div className='text-light-text text-2xl dark:text-dark-text'>Jason Osorio Marin</div>
            <div className='flex space-x-3 items-center'>
                <Switcher setGlobalTheme={setGlobalTheme} />
                <div className="md:hidden text-white flex items-center">
                    <button className='rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 p-3 cursor-pointer dark:hover:bg-neutral-700'
                        onClick={toggleNavbar}

                    >
                        <div
                            className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text transition-transform transform ${isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text mt-1 transition-opacity ${isOpen ? 'translate-x-6 opacity-0 transition-[opacity,transform] duration-300' : 'opacity-100 transition-[opacity,transform] duration-300'
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
};

export default Navbar;