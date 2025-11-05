import { CommentData } from "@/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Color Constants from Hero Section
const HeroPrimaryColor = "#854FEE"; // Purple
const HeroAccentColor = "#FF4D6D"; // Pink/Red
const HeroMidColor = "#4A90E2"; // Blue
const CardBackground = "#1C1F26";
const DarkBackground = "#0B0E14";

const Comment = () => {
  return (
    <section id="testimonials" className={`bg-[${DarkBackground}] py-24 md:py-32`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            What Clients{" "}
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroAccentColor}]`}
            >
              Say
            </span>{" "}
            <span className="text-4xl">✨</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 max-w-2xl mx-auto">
            Here’s what some of my happy clients say about working with me.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1} 
          loop={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1 },
            640: { slidesPerView: 2, slidesPerGroup: 1 },
            1024: { slidesPerView: 3, slidesGroup: 1 },
          }}
          className="mt-16 pb-16"
        >
          {CommentData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group h-full bg-[${CardBackground}] border border-gray-800 rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition duration-500 hover:border-[${HeroPrimaryColor}] hover:shadow-[0_0_25px_rgba(133,79,238,0.6)]`}
              >
                {/* Quote Icon */}
                <div className={`text-4xl mb-4 text-[${HeroAccentColor}]`}>
                    &ldquo;
                </div>

                {/* Testimonial Details */}
                <p className="text-gray-300 text-base italic leading-relaxed mb-6">
                  "{item.details}"
                </p>
                
                {/* Divider */}
                <div className="w-16 h-0.5 bg-gray-700 mb-6"></div>


                {/* Client Image */}
                <div
                  className={`p-1 rounded-full border-4 border-transparent bg-gradient-to-r from-[${HeroPrimaryColor}] to-[${HeroMidColor}]`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    // Placeholder image if real image is missing
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; 
                      target.src = `https://placehold.co/80x80/2C313C/ffffff?text=${item.name.charAt(0)}`;
                    }}
                    className={`w-20 h-20 rounded-full object-cover border-4 border-[${CardBackground}]`}
                  />
                </div>

                <h3
                  className={`mt-4 text-xl font-bold text-white group-hover:text-[${HeroPrimaryColor}] transition-colors`}
                >
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.company || "Satisfied Client"}
                </p>

              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination Container */}
          <div className="swiper-pagination-custom flex justify-center mt-12"></div>
        </Swiper>
      </div>

      {/* Custom Pagination Styling - Added here to ensure visibility */}
      <style>
        {`
          .swiper-pagination-custom {
            bottom: 0px !important;
            position: relative; /* Use relative to respect the flow */
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .swiper-pagination-bullet {
            background: #4b5563 !important; /* Dark gray for visibility */
            opacity: 1 !important;
            margin: 0 5px !important;
            width: 10px !important;
            height: 10px !important;
            transition: all 0.3s;
            border-radius: 9999px; /* Fully rounded */
          }

          .swiper-pagination-bullet-active-custom {
            background: linear-gradient(
              to right,
              ${HeroPrimaryColor},
              ${HeroAccentColor}
            ) !important;
            width: 30px !important; /* Make active bullet longer */
            border-radius: 10px !important;
          }
        `}
      </style>
    </section>
  );
};

export default Comment;