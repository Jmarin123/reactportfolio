
import ParticleBackground from "./TypingIntroMainPage/ParticleBackground"
import TypingIntro from "./TypingIntroMainPage/TypingIntro"
import About from "./About/AboutPage"
import Projects from "./Projects/ProjectPage"
// import TimelineElement from "./TimelineElement";
// import { VerticalTimeline } from "./VTElements/VerticaleTimeline";

export default function MainPage() {
    return (
            <main className="overflow-x-hidden overflow-y-hidden">
                <section className="h-screen shadow-md">
                    <ParticleBackground/>
                    <TypingIntro />
                </section>
                <section className="min-h-screen h-full">
                    <About/>
                </section>
                {/* <section className="h-screen">
                    <Projects/>
                </section> */}

                            {/* <VerticalTimelineElement
                                visible={inView}
                                contentStyle={{ background: '#000'}}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date="2011-present"
                                iconStyle={{ background: '#ffffff' }}
                            >
                                <Tilt className="w-full h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt> */}
            </main>
    )
}