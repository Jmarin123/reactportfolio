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
            setIsSticky(offset > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`p-4 w-full flex justify-between items-center top-0 sticky transition-colors duration-300 ease-in-out z-[100] ${isSticky ? "dark:bg-dark-primary bg-light-secondary" : ""}`}> {/* First Z */}
                <div className='text-light-text dark:text-dark-text text-xl md:text-2xl text-center'>Jason Osorio Marin</div>
                <div className='flex space-x-3 items-center'>
                    <button className="bg-transparent hover:bg-light-primary dark:hover:bg-light-secondary  text-light-text dark:text-dark-text font-semibold dark:hover:text-light-text hover:text-white py-2 px-4 border border-light-primary dark:border-light-secondary dark:hover:border-transparent hover:border-transparent rounded max-md:hidden">
                        Resume
                    </button>
                    <Switcher setGlobalTheme={setGlobalTheme} />
                    <div className="md:hidden text-white flex items-center"> {/* Second Z */}
                        <button className='rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 p-3 cursor-pointer dark:hover:bg-neutral-700'
                            onClick={toggleNavbar}

                        >
                            <div
                                className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            ></div>
                            <div
                                className={`w-5 h-1 rounded-md dark:bg-dark-text bg-light-text mt-1 transition-[opacity,transform] ${isOpen ? 'translate-x-6 opacity-0 duration-300' : 'opacity-100 duration-300'
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
            <div className={`md:hidden z-[60] fixed top-0 right-0 h-full w-full bg-light-primary dark:bg-dark-secondary transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full delay-150'}`}></div>
                <div className={`md:hidden z-[60] fixed top-0 right-0 h-full w-full bg-light-secondary dark:bg-dark-primary flex items-center justify-center transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0 delay-150' : 'translate-x-full'}`}>
                    <div className="p-8 flex flex-col text-center">
                        <a className="text-light-text dark:text-dark-text text-6xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-400 transition py-4">About Me</a>
                        <a className="text-light-text dark:text-dark-text text-6xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-400 transition py-4">Projects</a>
                        <a className="text-light-text dark:text-dark-text text-6xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-400 transition py-4">Contact Me</a>
                        <a className="text-light-text dark:text-dark-text text-6xl cursor-pointer hover:text-gray-400 dark:hover:text-gray-400 transition py-4">Resume</a>
                    </div>
                </div>

        </>
    );
};

export default Navbar;