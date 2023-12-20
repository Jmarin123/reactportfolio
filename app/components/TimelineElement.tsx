import { VerticalTimelineElement } from "./VTElements/VerticaleTimelineElement";
import { useInView } from "react-intersection-observer";
import Tilt from 'react-parallax-tilt';
import './VTElements/VerticaleTimelineElement.css'
export default function TimelineElement() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        });

    return (
    <div ref={ref} className="vertical-timeline-element">
        <VerticalTimelineElement
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{
            }}
            visible={inView}
            >
                <Tilt className="w-full h-40 text-center text-black bg-green-400 justify-center items-center flex m-0">Tilt ✨</Tilt>
        </VerticalTimelineElement>
    </div>
    );
}