import React from 'react'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Service from './components/Service'
import UserComment from './components/UserComment'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Toaster />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Service />
      <UserComment />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
