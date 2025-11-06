import React from 'react'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Service from './components/Service'
import UserComment from './components/UserComment'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <div>
      <Toaster />
      <Header />
      <Hero />
      <Skills />
      <Service />
      <UserComment />
      <Portfolio />
    </div>
  )
}

export default App
