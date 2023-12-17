import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypingIntro() {
    let [secondLine, setSecondLine] = useState(false);
    let [thirdLine, setThirdLine] = useState(false);
    let secondLineCallback = (el: HTMLElement | null) => {
        el?.classList.remove("custom-type-animation-cursor");
        setSecondLine(true)
    }

    let thirdCallBack = (el: HTMLElement | null) => {
        el?.classList.remove("custom-type-animation-cursor");
        setThirdLine(true)
    }

    return (
        <div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col text-center">
                {/* <div className="text-white text-4xl">Content on Top</div>
            <div className="text-white text-4xl">TEST</div> */}
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        '',
                        900,
                        'Hello! I am Jason Osorio Marin',
                        secondLineCallback
                    ]}
                    speed={20}
                    className="text-5xl md:text-8xl dark:text-dark-text text-light-text text-center custom-type-animation-cursor font-bold select-none cursor-default"
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
                    className="text-3xl md:text-4xl dark:text-dark-text text-light-text text-center font-bold select-none cursor-default"
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
                    className="text-4xl md:text-6xl dark:text-dark-accent text-light-primary text-center font-bold select-none cursor-defaultx"
                    repeat={0}
                /> : ''}

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
        </div>
    )
}