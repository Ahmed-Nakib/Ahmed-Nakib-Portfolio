import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

// Components
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import UserComment from "./components/UserComment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="bg-[#0B0E14] dark:bg-black text-white transition-colors duration-500">
      {/* Loading Screen */}
      {!showMain && (
        <LoadingScreen onAnimationComplete={() => setShowMain(true)} />
      )}

      {/* Main Content */}
      {showMain && (
        <>
          <Toaster position="top-right" reverseOrder={false} />
          <Header />

          <main>
            <Hero />
            <About />
            <Skills />
            <Service />
            <Portfolio />
            <UserComment />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
