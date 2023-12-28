"use client"
import { createContext, useEffect, useState } from "react";
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";
export const pageTheme = createContext('dark');
export default function App({Component, pageProps, router}: AppProps){
    return (
        <div className="main">
            <AnimatePresence mode="wait">
                <Component key={router.route} {...pageProps}></Component>
            </AnimatePresence>
        </div>
    )
}