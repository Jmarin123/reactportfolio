"use client"
import { ReactNode, createContext, useEffect, useState } from "react";
// import Router from "next/router"
import Navbar from "./components/Navbar";
import LoadingScreen from "./LoadingScreen";
import { AnimatePresence } from "framer-motion";
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
    // useEffect(() => {
    //     // Used for page transition
    //     const start = () => {
    //         setIsLoading(true)
    //     }
    //     const end = () => {
    //         setIsLoading(false)
    //     }
    //     Router.events.on("routeChangeStart", start)
    //     Router.events.on("routeChangeComplete", end)
    //     Router.events.on("routeChangeError", end)
    //     return () => {
    //         Router.events.off("routeChangeStart", start)
    //         Router.events.off("routeChangeComplete", end)
    //         Router.events.off("routeChangeError", end)
    //     }
    //     }, [])
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