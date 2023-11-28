import ParticleBackground from "./ParticleBackground"
import TypingIntro from "./TypingIntro"
export default function MainPage({ globalTheme }: { globalTheme: string }) {
    return (<main className="relative h-screen">
        <ParticleBackground globalTheme={globalTheme} />
        <TypingIntro />
    </main>)
}