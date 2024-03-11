import Tilt from 'react-parallax-tilt';

export default function Projects(){
    return (
            <div id='projectPage' className="h-screen w-full bg-light-background dark:bg-dark-background flex items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-5 w-full px-7">
                    <Tilt className="h-60 text-center text-black bg-light-primary dark:bg-dark-primary justify-center items-center flex rounded-lg">
                        <div className='bg-light-accent dark:bg-dark-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Testing a button look</div>
                    </Tilt>
                    <Tilt className="h-60 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-60 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-60 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-60 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-60 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                    <Tilt className="h-60 text-center text-black bg-green-400 justify-center items-center flex">Tilt ✨</Tilt>
                </div>
            </div>
    )
}