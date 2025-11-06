import { ServiceData } from "../data/data.js";
import { motion } from "framer-motion";

const HeroPrimaryColor = "#854FEE";
const HeroAccentColor = "#FF4D6D";
const HeroMidColor = "#4A90E2";

const Service = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="bg-[#0B0E14] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white sm:text-5xl"
          >
            My{" "}
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroAccentColor}]`}
            >
              Service Offers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-gray-400 sm:text-lg leading-relaxed"
          >
            Providing expert development services with a focus on modern, performant, and scalable web applications.
          </motion.p>
        </div>

        {/* Service Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {ServiceData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: `0 0 40px rgba(133, 79, 238, 0.4)` }}
              className="group relative p-8 rounded-xl border border-gray-800 bg-[#1C1F26] text-center transition duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-xl transition duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  padding: "2px",
                  background: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor}, ${HeroAccentColor})`,
                  WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  zIndex: 0,
                }}
              ></div>

              <div className="relative z-10">
                <div
                  className={`mx-auto h-16 w-16 p-3 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[${HeroPrimaryColor}] to-[${HeroMidColor}]/80 shadow-lg`}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-10 w-10 object-contain filter brightness-125"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{service.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
