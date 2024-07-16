"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Switcher from './Switcher';
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
    const [isOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const toggleNavbar = () => {
        setMenuOpen(!isOpen);
    };
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset == 0 && isSticky == true){
                setIsSticky(false);
            }else if (offset > 0 && isSticky == false){
                setIsSticky(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isSticky]);
    return (
        <nav className={`overflow-x-hidden sticky top-0 py-4 w-full flex justify-around items-center transition-colors duration-300 ease-in-out z-[100]  ${isSticky ? "dark:bg-dark-primary bg-light-secondary shadow-lg" : ""}`}> 
            <a href='/' className='text-light-text dark:text-dark-text text-2xl text-center cursor-pointer max-sm:hidden'>Jason Osorio Marin</a>
            <a href='/' className='text-light-text dark:text-dark-text text-2xl text-center cursor-pointer sm:hidden'>Jason Osorio</a>
            <div className='flex items-center'>
                <a href="/resume" className='px-3'>
                    <button className="bg-transparent hover:bg-light-primary dark:hover:bg-light-secondary  text-light-text dark:text-dark-text font-semibold dark:hover:text-light-text hover:text-white py-2 px-4 border border-light-primary dark:border-light-secondary dark:hover:border-transparent hover:border-transparent rounded">
                        Resume
                    </button>
                </a>
                <Switcher />
            </div>
        </nav>  
    );
};

export default Navbar;