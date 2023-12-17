import ParticleBackground from "./ParticleBackground"
import TypingIntro from "./TypingIntro"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Tilt from 'react-parallax-tilt';
export default function MainPage({ globalTheme }: { globalTheme: string }) {
    return (<main>
        <section className="h-screen">
            <ParticleBackground globalTheme={globalTheme} />
            <TypingIntro />
        </section>
        <section className="h-screen">
            <VerticalTimeline animate={true}>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{ background: '#000'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011-present"
                    iconStyle={{ background: '#ffffff' }}
                >
                    <Tilt className="w-full h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{ background: '#000'}}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011-present"
                    iconStyle={{ background: '#ffffff' }}
                >
                    <Tilt className="w-full h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                </VerticalTimelineElement>
            </VerticalTimeline>
            
        </section>
    </main>)
}