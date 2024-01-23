import Tilt from 'react-parallax-tilt';

export default function Projects(){
    return (
            <div id='projectPage' className="h-full w-screen bg-light-background dark:bg-dark-background flex items-center justify-center">
                <div className="grid grid-cols-4 grid-rows-2 gap-5 w-full px-7">
                    <Tilt className="h-40 text-center text-black bg-green-400 justify-center items-center flex rounded-lg">Tilt ✨</Tilt>
                    <Tilt className="h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-40 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                </div>
            </div>
    )
}