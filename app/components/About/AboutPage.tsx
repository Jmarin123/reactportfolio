"use client"
import { pageTheme } from '@/app/_app';
import { useContext, useState } from 'react';
import Terminal, { ColorMode, TerminalInput, TerminalOutput } from 'react-terminal-ui';

export default function About(){
    let globalTheme = useContext(pageTheme)
    let terminalTheme = globalTheme === "dark" ? ColorMode.Dark : ColorMode.Light;
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput key={0}>Welcome to the React Terminal UI Demo!</TerminalOutput>
    ]);
    const what = (inputData:string) => {
        let ld = [...terminalLineData];
        let unique_key = new Date().getTime();
        ld.push(<TerminalInput key={'input' + unique_key}>{inputData}</TerminalInput>);
        ld.push(<TerminalOutput key={'output' + unique_key}>{inputData}</TerminalOutput>)
        setTerminalLineData(ld);
    }
    return (
            <div id='aboutPage' className="h-full w-screen bg-light-background dark:bg-dark-background flex items-center justify-center">
                <Terminal colorMode={ terminalTheme } height='400px'  onInput={what}>
                    { terminalLineData }
                </Terminal>
            </div>
    )
}