import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Skills from "../components/Skills";
import UserComment from "../components/UserComment";

function HomePage() {
    return ( 
        <>
        <Hero />
        <Skills />
        <Service />
        <UserComment />
        <Contact />
        </>
     );
}

export default HomePage;