import ParticleBackground from "./ParticleBackground"
import TypingIntro from "./TypingIntro"
export default function MainPage({ globalTheme }: { globalTheme: string }) {
    return (<main>
        <section className="relative h-screen -z-[1]">
            <ParticleBackground globalTheme={globalTheme} />
            <TypingIntro />
        </section>
    </main>)
}