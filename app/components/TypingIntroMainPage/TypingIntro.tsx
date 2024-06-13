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
            <div className="grid grid-rows-3 grid-cols-4 my-6">
                {/* <div className="text-white text-4xl">Content on Top</div>
            <div className="text-white text-4xl">TEST</div> */}
                <div className={`col-start-2 row-start-1 `}>
                    <div className={`flex relative ${secondLine ? 'expand-animation' : ''} before:bg-slate-500`}>
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                '',
                                900,
                                'Hello! I am Jason Osorio Marin',
                                secondLineCallback
                            ]}
                            speed={20}
                            className={`text-5xl md:text-8xl dark:text-dark-text text-light-text text-center custom-type-animation-cursor font-bold select-none cursor-default`}
                            repeat={0}
                        />
                    </div>
                </div>
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
                    className={`text-3xl md:text-8xl dark:text-dark-text text-light-text flex justify-center items-center font-bold select-none cursor-default col-start-3 row-start-2 text-center`}
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
                    className=" text-4xl md:text-8xl dark:text-dark-accent text-light-primary text-center font-bold select-none cursor-default col-span-2 col-start-2 row-start-3 flex justify-center items-center"
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