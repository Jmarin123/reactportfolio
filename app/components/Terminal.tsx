"use client"
import { useContext, useState, useCallback } from "react";
import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";
import RealAbout from "./About/AboutPage";
import Projects from "./Projects/ProjectPage";
import Contact from "./Contact/ContactPage";
import { pageTheme } from "@/app/switchForLoading";
import MainPage from "./TypingIntroMainPage/MainPage";
import ParticleBackground from "./TypingIntroMainPage/ParticleBackground";

type PageComponent = JSX.Element | null;

export default function Terminal() {
    const [currentPage, setCurrentPage] = useState("landing");

    const setPage = useCallback((page: string) => {
        setCurrentPage(page);
        return `${page} page loading...`;
    }, []);

    const commands = {
        "landing": () => setPage("landing"),
        whoami: () => setPage("who"),
        "show-projects": () => setPage("projects"),
        "reach-out": () => setPage("contact"),
        exit: () => setPage("exit"),
        help: (
            <>These are the valid commands: <br />
                landing - Loads the landing page.<br />
                whoami - Get to know me!<br />
                show-projects - Get to see my previous and current projects made!<br />
                reach-out - A great way to get in touch with me! <br />
                exit - Want to close the current page? <br/>
                clear - Clears terminal of previous commands
            </>
        )
    };

    const pageComponents: Record<string, PageComponent> = {
        landing: <MainPage />,
        who: <RealAbout />,
        projects: <Projects />,
        contact: <Contact />,
        exit: null
    };

    const currentTheme:string = useContext(pageTheme);
    const terminalTheme:string = currentTheme === "dark" ? "dracula" : "light";

    return (
        <TerminalContextProvider>
            {/* DO NO CHANGE IT TO W-SCREEN IDK WHY BUT IT FUCKS IT UP */}
            {/* JUSTIFY CENTERING WITH FLEX BOX CAUSES THINGS TO CLIP OUT WHY */}
            <div id="aboutPage" className="min-h-screen bg-light-background dark:bg-dark-background flex flex-col relative justify-center">
                <ParticleBackground/>
                {pageComponents[currentPage]}
                <div className="h-96 min-h-[400px] rounded-lg px-16 my-6 w-full opacity-90">
                    <ReactTerminal
                        showControlButtons={false}
                        showControlBar={false}
                        commands={commands}
                        prompt={">"}
                        welcomeMessage={<>Welcome, to view all the commands run &quot;help&quot;<br /></>}
                        errorMessage={(message: string) => `${message}: not found`}
                        theme={terminalTheme}
                    />
                </div>
            </div>
        </TerminalContextProvider>
    );
}