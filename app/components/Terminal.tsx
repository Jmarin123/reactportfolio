"use client"
import { useContext, useState, useCallback } from "react";
import { ReactTerminal } from "react-terminal";
import { TerminalContextProvider } from "react-terminal";
import RealAbout from "./About/AboutPage";
import Projects from "./Projects/ProjectPage";
import Contact from "./Contact/ContactPage";
import { pageTheme } from "@/app/switchForLoading";
import MainPage from "./MainPage";

type PageComponent = JSX.Element | null;

export default function About() {
    const [currentPage, setCurrentPage] = useState("exit");

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
                landing - Loads the landing page<br />
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
            <div id="aboutPage" className="h-full w-screen bg-light-background dark:bg-dark-background flex flex-col">
                <div className="w-full h-96 overflow-hidden rounded-lg p-16">
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
                {pageComponents[currentPage]}
            </div>
        </TerminalContextProvider>
    );
}