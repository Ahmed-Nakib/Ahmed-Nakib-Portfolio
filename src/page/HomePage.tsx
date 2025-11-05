import About from "@/component/layout/About"
import Comment from "@/component/layout/Comment"
import ExperienceSection from "@/component/layout/ExperienceSection"
import Form from "@/component/layout/From"
import Hero from "@/component/layout/Hero"
import Portfolio from "@/component/layout/Portfolio"
import Service from "@/component/layout/Service"

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <Service />
      <Portfolio />
      <Comment />
      <Form />
    </>
  )
}

export default HomePage
