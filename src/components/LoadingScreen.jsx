import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const LoadingScreen = ({ onAnimationComplete }) => {
  const [show, setShow] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => setShow(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Mouse move for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallax = (factorX, factorY) => ({
    x: (mousePos.x - 0.5) * factorX,
    y: (mousePos.y - 0.5) * factorY,
  });

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (onAnimationComplete) onAnimationComplete();
      }}
    >
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Particles background */}
          <Particles
            id="loading-particles"
            init={particlesInit}
            className="absolute inset-0 -z-20"
            options={{
              fpsLimit: 60,
              interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
              particles: {
                color: { value: ["#854FEE", "#4A90E2", "#FF4D6D"] },
                links: { enable: true, distance: 120, color: "#854FEE", opacity: 0.3, width: 1 },
                move: { enable: true, speed: 1.2, outModes: "out" },
                number: { value: 60 },
                size: { value: { min: 2, max: 5 } },
              },
            }}
          />

          {/* Wave / floating gradient layers */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full -z-10"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(135deg, #854FEE 0%, #4A90E2 50%, #FF4D6D 100%)",
              opacity: 0.15,
              filter: "blur(120px)",
              ...parallax(30, 15),
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-full h-full -z-10"
            animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(225deg, #FF4D6D 0%, #854FEE 50%, #4A90E2 100%)",
              opacity: 0.12,
              filter: "blur(100px)",
              ...parallax(20, 20),
            }}
          />

          {/* 3D-ish floating blobs */}
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#854FEE] opacity-30"
            animate={{ y: [0, -25, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ ...parallax(40, 30) }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-[#FF4D6D] opacity-25"
            animate={{ y: [0, 20, 0], x: [0, -20, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ ...parallax(35, 25) }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-[#4A90E2] opacity-20 -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [0, -15, 0], x: [0, 15, 0], scale: [1, 1.07, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{ ...parallax(25, 20) }}
          />

          {/* Typed text */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white z-10 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <ReactTyped
              strings={[
                "Hi, I'm Nakib.",
                "Welcome to my Portfolio.",
                "Let's create something amazing!",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              showCursor={true}
              cursorChar="|"
            />
          </motion.h1>

          {/* Bouncing dots */}
          <div className="flex items-center justify-center gap-2 mt-6 z-10">
            <motion.span
              className="w-3 h-3 rounded-full bg-[#4A90E2]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
            <motion.span
              className="w-3 h-3 rounded-full bg-[#854FEE]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
            <motion.span
              className="w-3 h-3 rounded-full bg-[#FF4D6D]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>

          {/* Skip button */}
          <motion.button
            onClick={handleSkip}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-6 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Skip Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
