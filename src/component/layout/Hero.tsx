import { ReactTyped } from "react-typed";
import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const controls = useAnimation();
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) controls.start("visible");
      },
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const fadeVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex items-center bg-[#0B0E14] text-white overflow-hidden">
      <Particles
        id="hero-particles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: ["#854FEE", "#4A90E2", "#FF4D6D"] },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 1.5, outModes: "out" },
            links: { enable: true, distance: 150, color: "#854FEE", opacity: 0.4, width: 1 },
          },
        }}
      />

      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#854FEE] via-[#4A90E2] to-[#FF4D6D] rounded-full blur-[140px] opacity-30 -z-10 animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-[#FF4D6D] via-[#854FEE] to-[#4A90E2] rounded-full blur-[140px] opacity-20 -z-10 animate-float"></div>

      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <Motion.div variants={fadeVariant} initial="hidden" animate={controls}>
          <h1 className="text-5xl font-bold leading-tight">
            HI, I AM{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#854FEE] via-[#4A90E2] to-[#FF4D6D]">
              AHMED NAKIB
            </span>
          </h1>
          <p className="mt-3 text-xl uppercase text-gray-300 font-semibold">
            <ReactTyped
              strings={["Full Stack Developer", "Frontend Engineer", "Backend Specialist"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Motion.a
              whileHover={{ scale: 1.08 }}
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-[#854FEE] via-[#4A90E2] to-[#FF4D6D] rounded-lg font-semibold text-white hover:brightness-125 transition duration-300 shadow-lg"
            >
              Hire Me
            </Motion.a>
            <Motion.a
              whileHover={{ scale: 1.08 }}
              href="/img/cv.pdf"
              download="my-cv.pdf"
              className="px-6 py-3 border border-[#854FEE] rounded-lg text-white hover:bg-gradient-to-r hover:from-[#854FEE] hover:via-[#4A90E2] hover:to-[#FF4D6D] transition duration-300"
            >
              Get CV
            </Motion.a>
          </div>
        </Motion.div>

        <Motion.div variants={fadeVariant} initial="hidden" animate={controls} whileHover={{ scale: 1.05 }} className="flex justify-center">
          <img
            src="/img/banner/home-right.png"
            alt="Hero"
            className="w-full max-w-lg drop-shadow-[0_0_25px_rgba(133,79,238,0.6)] animate-float-slow"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
