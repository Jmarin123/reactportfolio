"use client"
import { ReactNode, createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./LoadingScreen";
export const pageTheme = createContext('dark');
export default function MyApp({ children }: { children: ReactNode }){
    const [theme, setTheme] = useState<string>('dark');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate an asynchronous operation (e.g., data fetching)
        setTimeout(() => {
            setIsLoading(false); // Set isLoading to false when the data is loaded
      }, 700); // Simulating a 2-second loading time
    }, []);
    return (
        <>
        {isLoading ? (
            <LoadingScreen />
        ) : (
            <pageTheme.Provider value={theme}>
            <Navbar setGlobalTheme={setTheme}/>
            {children}
            </pageTheme.Provider>
        
        )}
        </>
    )
}