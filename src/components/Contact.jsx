import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Please replace EmailJS placeholder IDs!");
      return;
    }

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email format!");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully ✅");
        form.current.reset();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#0B0E14] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Connect With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#854FEE] to-[#FF4D6D]">
              Me
            </span>
          </h2>
          <p className="mt-2 sm:mt-3 text-gray-400 text-base sm:text-lg">
            Let's discuss your next project. I'm ready to work! 🚀
          </p>
        </motion.div>

        {/* Contact Cards & Form */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col space-y-6 p-6 sm:p-8 rounded-xl bg-[#1C1F26] border border-gray-800 shadow-2xl shadow-gray-900/50"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 sm:mb-3 text-[#854FEE]">
                Get in Touch
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                I'm available for freelance work and full-time opportunities.
                Send a message, or use the contact information below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:office.nakib@gmail.com"
                className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-[#4A90E2] transition duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 group-hover:bg-[#854FEE] group-hover:border-transparent transition-colors">
                  <FaEnvelope
                    size={16}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>
                <span className="text-sm sm:text-lg break-all">
                  office.nakib@gmail.com
                </span>
              </a>

              <a
                href="tel:+8801856682104"
                className="flex items-center gap-3 sm:gap-4 text-gray-300 hover:text-[#4A90E2] transition duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 group-hover:bg-[#854FEE] group-hover:border-transparent transition-colors">
                  <FaPhoneAlt
                    size={16}
                    className="text-gray-400 group-hover:text-white"
                  />
                </div>
                <span className="text-sm sm:text-lg">+8801856682104</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              {[
                {
                  Icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/nakibul-islam-b8684b37b",
                },
                {
                  Icon: FaGithub,
                  href: "https://github.com/Ahmed-Nakib",
                },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xl p-3 rounded-full bg-gray-800 border border-gray-700 text-gray-400 transition-all duration-300 hover:bg-[#854FEE] hover:text-white hover:border-transparent shadow-lg"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid gap-4 sm:gap-6 p-6 sm:p-8 rounded-xl bg-[#1C1F26] border border-gray-800 shadow-2xl shadow-gray-900/50"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 sm:p-4 bg-gray-900 rounded-xl border border-gray-700 focus:ring-2 focus:ring-[#4A90E2] outline-none text-white text-sm sm:text-base transition duration-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 sm:p-4 bg-gray-900 rounded-xl border border-gray-700 focus:ring-2 focus:ring-[#4A90E2] outline-none text-white text-sm sm:text-base transition duration-300"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              className="p-3 sm:p-4 bg-gray-900 rounded-xl border border-gray-700 focus:ring-2 focus:ring-[#4A90E2] outline-none text-white text-sm sm:text-base transition duration-300 resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="py-3 sm:py-4 font-bold rounded-xl text-white bg-gradient-to-r from-[#854FEE] to-[#FF4D6D] shadow-xl shadow-[#854FEE]/40 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FaPaperPlane size={16} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
