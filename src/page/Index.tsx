import About from "@/component/layout/About"
import Comment from "@/component/layout/Comment"
import Contact from "@/component/layout/Contact"
import Hero from "@/component/layout/Hero"
import Portfolio from "@/component/layout/Portfolio"
import Service from "@/component/layout/Service"
import Skills from "@/component/layout/Skills"


const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Service />
      <Portfolio />
      <Comment />
      <Contact />
    </div>
  )
}

export default Index
