"use client"
import { AnimatePresence, motion } from "framer-motion";
import './visualizeBackground.css'
export default function TransitionWrapper({
    children,
  }: {
    children: React.ReactNode
  }){
    const anim = (variants: any, custom: number) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
            custom
        }
    }
    const expand = {
        initial: {
            top: "50%"
        },
        enter: (i: number) => ({
            top: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            },
            transitionEnd: {
                height: 0,
                top: 0
            }
        }),
        exit: (i: number) => ({
            height: "100%",
            transition: {
                duration: 0.4,
                delay: 0.05 * i
            },
        })
    }
    const colNum = 10;
    return (
        //PLAN IS TO MAKE 2 BARS OPEN FROM THE MIDDLE
        <div className="relative box-border min-h-screen flex flex-col">
            {/* <div className="h-full w-full absolute top-0 left-0 pointer-events-none flex overflow-hidden z-20">
                {
                [...Array(colNum)].map((_, i) => {
                    return <motion.div {...anim(expand, colNum-i)} key={i} className="h-full w-full bg-black dark:bg-white relative opacity-50"></motion.div>
                })
                }
            </div> */}
            <div className="computer-background"/>

            {children}
        </div>
        
    )
}