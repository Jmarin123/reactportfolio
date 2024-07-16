import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { pageTheme } from "@/app/LoadingSwitch";
const Switcher = () => {
    const {theme, setTheme} = useContext(pageTheme)
    useEffect(() => {
        if (theme == false){
            const root = window.document.documentElement;
            root.classList.remove('dark');
            root.classList.add('light');
            localStorage.setItem('dark', 'false');
        }else{
            const root = window.document.documentElement;
            root.classList.remove('light');
            root.classList.add('dark');
            localStorage.setItem('dark', 'true');
        }
    }, [theme])

    const toggleDarkMode = () => {
        setTheme(!theme)
    };

    return (
        <div className='rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 p-3 cursor-pointer dark:hover:bg-neutral-700 mr-2' onClick={() => { toggleDarkMode() }}>
            <DarkModeSwitch
                checked={theme}
                onChange={() => {}}
                size={20}
            />
        </div>
    );
}

export default Switcher