import ParticleBackground from "./ParticleBackground"
export default function MainPage({ globalTheme }: { globalTheme: string }) {
    return (<main className="relative h-screen">
        <ParticleBackground globalTheme={globalTheme} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center flex-col">
            {/* <div className="text-white text-4xl">Content on Top</div>
            <div className="text-white text-4xl">TEST</div> */}
        </div>
        <div className="h-screen"></div>
    </main>)
}