"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
// import Router from "next/router"
import Navbar from "./components/Navbar/Navbar";
import LoadingScreen from "./LoadingScreen";

interface PageThemeContextType {
    theme: boolean;
    setTheme: (theme: boolean) => void;
}

// * DARK == TRUE * //
// * LIGHT == FALSE * //
export const pageTheme = createContext<PageThemeContextType>({
    theme: false,
    setTheme: () => {}
});

export default function LoadingSwitch({ children }: { children: ReactNode }){
    const [theme, setTheme] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (localStorage?.getItem("dark") != null){
            let boolLight:boolean = JSON.parse(localStorage.getItem("dark")!);
            if(boolLight){
                const root = window.document.documentElement;
                root.classList.remove('light');
                root.classList.add('dark');
            }else{
                const root = window.document.documentElement;
                root.classList.remove('dark');
                root.classList.add('light');
            }
            setTheme(boolLight);
        }
        setTimeout(() => {
            setIsLoading(false); // Set isLoading to false when the data is loaded
      }, 700); // Simulating a 2-second loading time
    }, []);
    return (
        <>
        {isLoading ? (
            <LoadingScreen />
        ) : (
                <pageTheme.Provider value={{ theme, setTheme }}>
                    <Navbar/>
                    {children}
                </pageTheme.Provider>
        )}
        </>
    )
}