import React from "react";
import { motion } from "framer-motion";

let portfolioLogo;
try {
  portfolioLogo = require("../assets/images/logo.jpg");
} catch (e) {
  portfolioLogo = null;
}

const Logo = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <motion.div
      className={`flex items-center cursor-pointer ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {portfolioLogo ? (
        <img
          src={portfolioLogo}
          alt="Portfolio Logo"
          className={`${sizeClasses[size]} rounded-full object-cover border-2 border-yellow/30`}
        />
      ) : (
        <div
          className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-yellow to-yellow-dark flex items-center justify-center`}
        >
          <span className="text-black font-bold text-sm">OO</span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;
