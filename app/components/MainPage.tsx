import ParticleBackground from "./ParticleBackground"
import TypingIntro from "./TypingIntro"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Tilt from 'react-parallax-tilt';
export default function MainPage({ globalTheme }: { globalTheme: string }) {
    return (<main>
        <section className="relative h-screen -z-[1]">
            <ParticleBackground globalTheme={globalTheme} />
            <TypingIntro />
        </section>
        {/* <section className="relative h-screen -z-[1]">
            <VerticalTimeline animate={true}>
                <VerticalTimelineElement
                    visible={true}
                    contentStyle={{ background: '#ffffff', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011-present"
                    iconStyle={{ background: '#ffffff', color: '#fff' }}
                >
                    <h3 className="text-black">Creative Director</h3>
                    <h4 className="">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section> */}
    </main>)
}