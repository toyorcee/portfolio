import React from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-ash/20 py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Logo size="sm" />
          <motion.p
            className="text-ash text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} Olaniyan Oluwatoyosi. All rights reserved.
          </motion.p>
        </div>
      </div>
      
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-12 h-12 bg-yellow text-black rounded-full flex items-center justify-center shadow-lg shadow-yellow/20 font-bold text-xl hover:bg-yellow-dark transition-colors"
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;
