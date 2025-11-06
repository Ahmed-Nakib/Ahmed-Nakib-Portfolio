import React from 'react'
import Skills from './components/Skills'
import Service from './components/Service'
import UserComment from './components/UserComment'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Service />
      <UserComment />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Home
