import React, { useState } from "react";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Service";
import UserComment from "./components/UserComment";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {/* Loading screen */}
      {!showMain && (
        <LoadingScreen onAnimationComplete={() => setShowMain(true)} />
      )}

      {/* Main site */}
      {showMain && (
        <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-all duration-700">
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
      )}
    </>
  );
};

export default App;