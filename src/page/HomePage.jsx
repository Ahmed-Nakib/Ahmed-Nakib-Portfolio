import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Service from "../components/Service";
import UserComment from "../components/UserComment";
import Portfolio from "../components/Portfolio";

function HomePage() {
  return (
    <>
      <Hero />
      <Skills />
      <Service />
      <Portfolio/>
      <UserComment />
    </>
  );
}

export default HomePage;