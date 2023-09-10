import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
    useEffect(() => {
        // Set darkSide based on colorTheme when colorTheme changes
        setDarkSide(colorTheme === "light" ? true : false);
    }, [colorTheme]);
    const toggleDarkMode = (checked: boolean) => {
        (setTheme as Dispatch<SetStateAction<string>>)(colorTheme as string);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={25}
            />
        </>
    );
}