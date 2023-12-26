import { AnimatePresence, motion } from "framer-motion"
import ParticleBackground from "./ParticleBackground"
import TypingIntro from "./TypingIntro"
// import TimelineElement from "./TimelineElement";
// import { VerticalTimeline } from "./VTElements/VerticaleTimeline";

export default function MainPage() {
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
            top: 0
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
        <div>
            <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none flex z-[9999]">
                {
                [...Array(colNum)].map((_, i) => {
                    return <motion.div {...anim(expand, colNum-i)} key={i} className="h-full w-full bg-black relative"></motion.div>
                })
                }
        </div> 
    <main className="overflow-x-hidden">
        <section className="h-screen">
            <ParticleBackground/>
            <TypingIntro />
        </section>
        
        {/* <section className="h-screen">
            <VerticalTimeline>
                <TimelineElement></TimelineElement>
                <TimelineElement></TimelineElement>
                <TimelineElement></TimelineElement>
                {/* <div ref={ref} className="vertical-timeline-element">
                    <VerticalTimelineElement
                        visible={inView}
                        contentStyle={{ background: '#000'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011-present"
                        iconStyle={{ background: '#ffffff' }}
                    >
                        <Tilt className="w-full h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    </VerticalTimelineElement>
                </div> */}
                {/* <div ref={ref} className="vertical-timeline-element">
                    <VerticalTimelineElement
                        visible={inView}
                        contentStyle={{ background: '#000'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011-present"
                        iconStyle={{ background: '#ffffff' }}
                    >
                        <Tilt className="w-full h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    </VerticalTimelineElement>
                </div>

            </VerticalTimeline>
            
        </section> */}
    </main>
    </div>
    )
}