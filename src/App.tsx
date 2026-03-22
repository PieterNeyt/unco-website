import Hero from "@/components/Hero/Hero.tsx";
import Features from "@/components/Features/Features.tsx";
import Pitch from "@/components/Pitch/Pitch.tsx";
import Article from "@/components/Article/Article.tsx";
import Kudos from "@/components/Kudos/Kudos.tsx";
import Slides from "@/components/Slides/Slides.tsx";
import Team from "@/components/Team/Team.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import {useReveal} from "@/hooks/useReveal.ts";
import Navbar from "@/components/Navbar/Navbar.tsx";

function App() {
    useReveal()

    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <Features/>
                <Pitch/>
                <Article/>
                <Kudos/>
                <Slides/>
                <Team/>
            </main>
            <Footer/>
        </>
    )
}

export default App
