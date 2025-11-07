import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onAnimationComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4500); // 4.5s before exit
    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setShow(false);
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (onAnimationComplete) onAnimationComplete();
      }}
    >
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--hero-primary)] via-[var(--hero-mid)] to-[var(--hero-accent)] animate-gradient-x"></div>

          {/* Optional blurred gradient circles */}
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[120px] opacity-20 bg-[var(--hero-primary)] animate-pulse-slow -z-10" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[120px] opacity-20 bg-[var(--hero-accent)] animate-pulse-slow -z-10" />

          {/* Typed text */}
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-center text-white z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ReactTyped
              strings={[
                "Hello, I'm Nakib.",
                "Welcome to my Portfolio.",
                "Let's begin...",
              ]}
              typeSpeed={60}
              backSpeed={30}
              backDelay={800}
              showCursor={false}
            />
          </motion.h1>

          {/* Loading dots */}
          <div className="flex items-center justify-center gap-2 mt-6 z-10">
            <span className="w-2 h-2 rounded-full animate-bounce-slow bg-[var(--hero-mid)] inline-block" />
            <span className="w-2 h-2 rounded-full animate-bounce-slower bg-[var(--hero-primary)] inline-block" />
            <span className="w-2 h-2 rounded-full animate-bounce-fast bg-[var(--hero-accent)] inline-block" />
          </div>

          {/* Skip button */}
          <button
            onClick={handleSkip}
            className="mt-8 px-6 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Skip Intro
          </button>

          {/* Custom animations */}
          <style jsx={true.toString()}>{`
            @keyframes bounce-fast {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
            }
            @keyframes bounce-slower {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-2px); }
            }
            .animate-bounce-fast { animation: bounce-fast 0.6s infinite; }
            .animate-bounce-slow { animation: bounce-slow 0.9s infinite; }
            .animate-bounce-slower { animation: bounce-slower 1.2s infinite; }

            /* Animated gradient background */
            @keyframes gradient-x {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .animate-gradient-x {
              background-size: 300% 300%;
              animation: gradient-x 8s ease infinite;
            }

            /* Pulse for blurred circles */
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.2; transform: scale(1); }
              50% { opacity: 0.35; transform: scale(1.05); }
            }
            .animate-pulse-slow { animation: pulse-slow 6s infinite; }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;