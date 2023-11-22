import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";
interface SwitcherProps {
    setGlobalTheme: Dispatch<SetStateAction<string>>;
}
const Switcher: React.FC<SwitcherProps> = ({ setGlobalTheme }) => {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    useEffect(() => {
        // Set darkSide based on colorTheme when colorTheme changes
        setDarkSide(colorTheme === "light" ? true : false);
        setGlobalTheme(colorTheme === "light" ? 'dark' : 'light')
    }, [colorTheme, setGlobalTheme]);
    const toggleDarkMode = (checked: boolean) => {
        (setTheme as Dispatch<SetStateAction<string>>)(colorTheme as string);
        setDarkSide(checked);
    };

    return (
        <div className='rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-900 p-3 cursor-pointer dark:hover:bg-neutral-700' onClick={() => { toggleDarkMode(darkSide) }}>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={20}
            />
        </div>
    );
}

export default Switcher