import { TypeAnimation } from "react-type-animation";

export default function TypingIntro() {
    return (
        <div className="h-screen">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col text-center">
                {/* <div className="text-white text-4xl">Content on Top</div>
            <div className="text-white text-4xl">TEST</div> */}
                {/* Todo: Fix the animation using a callback */}
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        '',
                        900,
                        'Hi! I am Jason Osorio Marin',
                        (el) => el!.classList.remove("custom-type-animation-cursor")
                    ]}
                    speed={20}
                    className="text-8xl dark:text-dark-text text-light-text text-center custom-type-animation-cursor font-bold"
                    repeat={0}
                />
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        '',
                        3500,
                        (el) => el?.classList.add("custom-type-animation-cursor"),
                        'I am a',
                        (el) => el?.classList.remove("custom-type-animation-cursor")
                    ]}
                    speed={20}
                    className="text-4xl dark:text-dark-text text-light-text text-center font-bold"
                    repeat={0}
                />
                <TypeAnimation
                    cursor={false}
                    sequence={[
                        '',
                        4300,
                        (el) => el?.classList.add("custom-type-animation-cursor"),
                        'Front End',
                        600,
                        'Back End',
                        600,
                        'Full Stack Engineer',
                        (el) => el?.classList.remove("custom-type-animation-cursor")
                    ]}
                    speed={20}
                    className="text-6xl dark:text-dark-accent text-light-primary text-center font-bold"
                    repeat={0}
                />

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