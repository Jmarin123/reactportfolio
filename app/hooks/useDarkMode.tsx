import { useState, useEffect, useRef } from "react";

export default function useDarkMode() {
    const false_flag = useRef(false)
    const [theme, setTheme] = useState<string>('dark'); // Set a default theme
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        // Load theme from localStorage when the component is mounted
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        if (false_flag.current) {
            const root = window.document.documentElement;
            root.classList.remove(colorTheme);
            root.classList.add(theme);
            localStorage.setItem('theme', theme);
        } else {
            false_flag.current = true
        }
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}