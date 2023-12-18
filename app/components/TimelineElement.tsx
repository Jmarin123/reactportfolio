import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import Tilt from 'react-parallax-tilt';
export default function TimelineElement() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        });

    return (
    <div ref={ref} className="vertical-timeline-element">
        <VerticalTimelineElement
            style={{boxShadow: "none"}}
            contentStyle={{
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            icon={""}
            iconStyle={{
            }}
            visible={inView}
            >
                <Tilt className="w-full h-40 text-center text-black bg-green-400 justify-center items-center flex m-0">Tilt ✨</Tilt>
        </VerticalTimelineElement>
    </div>
    );
}