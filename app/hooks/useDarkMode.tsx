import { useState, useEffect } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState<string>('light'); // Set a default theme
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        // Load theme from localStorage when the component is mounted
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}