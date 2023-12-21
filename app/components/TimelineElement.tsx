import { VerticalTimelineElement } from "./VTElements/VerticaleTimelineElement";
import Tilt from 'react-parallax-tilt';
import './VTElements/VerticaleTimelineElement.css'
export default function TimelineElement() {
    return (
        <VerticalTimelineElement
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <Tilt className="w-full h-40 text-center text-black bg-green-400 justify-center items-center flex m-0">Tilt ✨</Tilt>
        </VerticalTimelineElement>
    );
}