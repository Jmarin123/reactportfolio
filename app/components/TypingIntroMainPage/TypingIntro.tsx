import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import './Typing.css'

export default function TypingIntro() {
    let [secondLine, setSecondLine] = useState(false);
    let [thirdLine, setThirdLine] = useState(false);
    let info = ''
    let secondLineCallback = (el: HTMLElement | null) => {
        el?.classList.remove("custom-type-animation-cursor");
        info = 'expand-animation'
        setSecondLine(true)
    }

    let thirdCallBack = (el: HTMLElement | null) => {
        el?.classList.remove("custom-type-animation-cursor");
        setThirdLine(true)
    }

    return (
            <div className="flex h-full flex-col flex-grow justify-center"> {/* */}
                {/* <div className="text-white text-4xl">Content on Top</div>
            <div className="text-white text-4xl">TEST</div> */}
                 {/* col-start-2 row-start-1 */}
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        '',
                        900,
                        'Hello! I am Jason Osorio Marin',
                        secondLineCallback
                    ]}
                    speed={20}
                    className={`text-5xl sm:text-6xl dark:text-dark-text text-light-text text-center custom-type-animation-cursor font-bold select-none cursor-default before:content-['>'] my-3`}
                    repeat={0}
                />
                
                {secondLine ? <TypeAnimation
                    cursor={false}
                    sequence={[
                        '',
                        400,
                        (el) => el?.classList.add("custom-type-animation-cursor"),
                        'I am a',
                        thirdCallBack
                    ]}
                    speed={20}
                    className={`text-5xl sm:text-6xl  dark:text-dark-text text-light-text items-center font-bold select-none cursor-default text-center before:content-['>'] mb-3`}
                    repeat={0}
                /> : ''}
                {thirdLine ? <TypeAnimation
                    cursor={false}
                    sequence={[
                        '',
                        500,
                        (el) => el?.classList.add("custom-type-animation-cursor"),
                        'Front End',
                        600,
                        'Back End',
                        600,
                        'Full Stack Engineer',
                        (el) => el?.classList.remove("custom-type-animation-cursor")
                    ]}
                    speed={20}
                    className="text-6xl sm:text-7xl dark:text-dark-accent text-light-primary font-bold select-none cursor-default text-center before:content-['>'] " 
                    repeat={0}
                /> : ''}
                {/* <Terminal/> */}

                <style global jsx>{`
            .custom-type-animation-cursor::after {
                content: '|';
                animation: cursor 1.1s infinite step-start;
            }
            @keyframes cursor {
                50% {
                opacity: 0;
                }
            }
            `}</style>
            </div>
    )
}