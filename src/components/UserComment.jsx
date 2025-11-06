import { CommentData } from "../data/data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// 🎨 Color Constants
const HeroPrimaryColor = "#854FEE";
const HeroAccentColor = "#FF4D6D";
const HeroMidColor = "#4A90E2";
const CardBackground = "#1C1F26";
const DarkBackground = "#0B0E14";

const UserComment = () => {
  return (
    <section
      id="testimonials"
      style={{ backgroundColor: DarkBackground }}
      className="py-24 md:py-32"
    >
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
              style={{
                backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroAccentColor})`,
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
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
            1024: { slidesPerView: 3, slidesPerGroup: 1 },
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
                style={{
                  backgroundColor: CardBackground,
                  borderColor: "#1f2937",
                }}
                className="group h-full border rounded-xl shadow-xl p-8 flex flex-col items-center text-center transition duration-500 hover:border-[#854FEE] hover:shadow-[0_0_25px_rgba(133,79,238,0.6)]"
              >
                {/* Quote Icon */}
                <div
                  style={{ color: HeroAccentColor }}
                  className="text-4xl mb-4"
                >
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
                  style={{
                    backgroundImage: `linear-gradient(to right, ${HeroPrimaryColor}, ${HeroMidColor})`,
                  }}
                  className="p-1 rounded-full border-4 border-transparent"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/80x80/2C313C/ffffff?text=${item.name.charAt(
                        0
                      )}`;
                    }}
                    style={{ borderColor: CardBackground }}
                    className="w-20 h-20 rounded-full object-cover border-4"
                  />
                </div>

                <h3
                  style={{ transition: "color 0.3s" }}
                  className="mt-4 text-xl font-bold text-white group-hover:text-[#854FEE]"
                >
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.company || "Satisfied Client"}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-12"></div>
        </Swiper>
      </div>

      {/* Custom Pagination Styling */}
      <style>
        {`
          .swiper-pagination-custom {
            bottom: 0px !important;
            position: relative;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .swiper-pagination-bullet {
            background: #4b5563 !important;
            opacity: 1 !important;
            margin: 0 5px !important;
            width: 10px !important;
            height: 10px !important;
            transition: all 0.3s;
            border-radius: 9999px;
          }
          .swiper-pagination-bullet-active-custom {
            background: linear-gradient(to right, ${HeroPrimaryColor}, ${HeroAccentColor}) !important;
            width: 30px !important;
            border-radius: 10px !important;
          }
        `}
      </style>
    </section>
  );
};

export default UserComment;
