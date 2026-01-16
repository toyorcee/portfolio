import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 shadow-lg" : "bg-black/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Logo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-ash hover:text-yellow transition-colors duration-300 font-medium text-sm uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            className="w-6 h-0.5 bg-yellow transition-all duration-300"
          />
          <motion.span
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-yellow transition-all duration-300"
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            className="w-6 h-0.5 bg-yellow transition-all duration-300"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md flex flex-col gap-4 p-6 border-t border-ash/20 min-h-[calc(100vh-5rem)]"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-ash hover:text-yellow transition-colors duration-300 font-medium text-sm uppercase tracking-wider py-2"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
