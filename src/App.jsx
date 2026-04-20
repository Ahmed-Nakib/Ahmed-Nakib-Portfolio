import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './page/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

const App  = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Hero />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

export default App;
