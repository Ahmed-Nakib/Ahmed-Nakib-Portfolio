import { ReactTyped } from "react-typed";
import { motion as Motion, useAnimation } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLElement | null>(null);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const textVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const imageVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center bg-[#0B0E14] text-white overflow-hidden"
    >
      {/* ✨ Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            color: { value: "#854FEE" },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#854FEE" },
          },
        }}
      />

      {/* Neon Glow Lights */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#854FEE] rounded-full blur-[140px] opacity-30 -z-10"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-[140px] opacity-20 -z-10"></div>

      {/* Content */}
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <Motion.div variants={textVariant} initial="hidden" animate={controls}>
          <h1 className="text-5xl font-bold leading-tight">
            HI, I AM <span className="text-[#854FEE]">AHMED NAKIB</span>
          </h1>

          <p className="mt-3 text-xl uppercase text-gray-300 font-semibold">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Frontend Engineer",
                "Backend Specialist",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Motion.a
              whileHover={{ scale: 1.06 }}
              href="#"
              className="px-6 py-3 bg-[#854FEE] rounded-lg font-semibold hover:bg-white hover:text-[#854FEE] transition duration-300"
            >
              Hire Me
            </Motion.a>
            <Motion.a
              whileHover={{ scale: 1.06 }}
              href="#"
              className="px-6 py-3 border border-[#854FEE] rounded-lg hover:bg-[#854FEE] transition duration-300"
            >
              Get CV
            </Motion.a>
          </div>
        </Motion.div>

        <Motion.div
          variants={imageVariant}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.03 }}
          className="flex justify-center"
        >
          <img
            src="/img/banner/home-right.png"
            alt="Hero"
            className="w-full max-w-lg drop-shadow-[0_0_25px_rgba(133,79,238,0.4)]"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
