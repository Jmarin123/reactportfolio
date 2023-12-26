"use client"
import { ReactNode, createContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./components/Navbar";
import LoadingScreen from "./LoadingScreen";
export const pageTheme = createContext('dark');
export default function MyApp({ children }: { children: ReactNode }){
    const [theme, setTheme] = useState<string>('dark');
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //   // Simulate an asynchronous operation (e.g., data fetching)
    //     setTimeout(() => {
    //         setIsLoading(false); // Set isLoading to false when the data is loaded
    //   }, 700); // Simulating a 2-second loading time
    // }, []);
    
    return (
        <>
        {/* {isLoading ? (
            <LoadingScreen />
        ) : ( */}
                    {/* <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none flex z-[9999]">
                    {
                        [...Array(colNum)].map((_, i) => {
                            return <motion.div {...anim(expand, colNum-i)} key={i} className="h-full w-full bg-black relative"></motion.div>
                        })
                    }
                    </div> */}
                    <AnimatePresence mode="wait">
                    <pageTheme.Provider value={theme}>
                        <div className="h-screen">
                            <Navbar setGlobalTheme={setTheme}/>
                            {children}
                        </div>
                    </pageTheme.Provider>
                    </AnimatePresence>
        {/* )} */}
        </>
    )
}