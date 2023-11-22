import IntroPage from "./IntroPage"
export default function MainPage({ globalTheme }: { globalTheme: string }) {
    return (<main>
        <IntroPage globalTheme={globalTheme} />
    </main>)
}