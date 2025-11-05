import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "#about" },
  { id: 3, name: "Projects", path: "#projects" },
  { id: 4, name: "Contact", path: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll-based background change for better contrast
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Base classes for the header: dark background, fixed position, and smooth transition
  const headerClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? "bg-[#0B0E14] shadow-xl" : "bg-[#0B0E14] md:bg-transparent"
  }`;

  // Close mobile menu on navigation
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    // Use motion.header for potential top-level animations
    <Motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 120, duration: 0.5 }} className={headerClasses}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Gradient Text for consistency */}
          <Link to="/" className="text-4xl font-extrabold cursor-pointer">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#854FEE] to-[#FF4D6D] transition duration-300 hover:opacity-80">
                NAKIB.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-base font-semibold">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-[#854FEE] transition duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <Motion.a
              whileHover={{ scale: 1.08 }}
              href="#contact"
              className="hidden md:block px-6 py-3 bg-gradient-to-r from-[#854FEE] via-[#4A90E2] to-[#FF4D6D] rounded-lg font-semibold text-white shadow-lg hover:brightness-125 transition duration-300"
            >
              Contact Me
            </Motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden rounded p-2 text-gray-300 hover:text-[#854FEE] transition"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                // Close Icon (X)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu Icon (Hamburger)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (using framer-motion for smooth toggle) */}
      {isOpen && (
        <Motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-20 left-0 w-full bg-[#0B0E14] shadow-xl z-40 border-t border-gray-800"
        >
          <nav>
            <ul className="flex flex-col items-start gap-4 p-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id} className="w-full">
                  <Link
                    to={item.path}
                    onClick={handleNavLinkClick}
                    className="block w-full text-lg py-2 text-gray-300 hover:text-[#FF4D6D] transition border-b border-gray-700 last:border-b-0"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="w-full mt-2">
                <Motion.a
                  whileHover={{ scale: 1.02 }}
                  href="#contact"
                  onClick={handleNavLinkClick}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#854FEE] via-[#4A90E2] to-[#FF4D6D] rounded-lg font-semibold text-white shadow-lg transition duration-300"
                >
                  Contact Me
                </Motion.a>
              </li>
            </ul>
          </nav>
        </Motion.div>
      )}
    </Motion.header>
  );
};

export default Header;