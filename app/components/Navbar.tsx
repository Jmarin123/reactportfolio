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
            setIsSticky(offset > 0);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    //TODO: MAKE A MODEL TO POP UP WHEN OPENING MENUE
    return (
        <>
        <nav className={`p-4 w-full flex justify-between items-center z-10 top-0 left-0 fixed transition-colors duration-300 ease-in-out ${isSticky ? "dark:bg-dark-primary bg-light-secondary" : ""}`}>
            <div className='text-light-text dark:text-dark-text text-xl md:text-2xl text-left'>Jason Osorio Marin</div>
            <div className='flex space-x-3 items-center'>
                <Switcher setGlobalTheme={setGlobalTheme} />
                <div className="md:hidden text-white flex items-center">
                    <button className='rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 p-3 cursor-pointer dark:hover:bg-neutral-700'
                        onClick={toggleNavbar}

                    >
                        <div
                            className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        ></div>
                        <div
                            className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text mt-1 transition-[opacity, transform] ${isOpen ? 'translate-x-6 opacity-0 duration-300' : 'opacity-100 duration-300'
                                }`}
                        ></div>
                        <div
                            className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text mt-1 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''
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
        {isOpen && (
        <div className={`md:hidden fixed top-0 right-0 h-full w-full bg-light-primary z-[9] flex items-center justify-center transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-8 flex flex-col">
                <a className="text-light-text dark:text-dark-text text-4xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-400 transition">About Me</a>
                <a className="text-light-text dark:text-dark-text text-4xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-400 transition">Projects</a>
                <a className="text-light-text dark:text-dark-text text-4xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-400 transition">Contact Me</a>
            </div>
            </div>
        )}
        </>
    );
};

export default Navbar;