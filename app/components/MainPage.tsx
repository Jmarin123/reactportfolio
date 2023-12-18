import ParticleBackground from "./ParticleBackground"
import TypingIntro from "./TypingIntro"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";
export default function MainPage({ globalTheme }: { globalTheme: string }) {
    return (<main className="overflow-x-hidden">
        <section className="h-screen">
            <ParticleBackground globalTheme={globalTheme} />
            <TypingIntro />
        </section>
        <section className="h-screen">
            <VerticalTimeline animate={true}>
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
                </div> */}

            </VerticalTimeline>
            
        </section>
    </main>)
}