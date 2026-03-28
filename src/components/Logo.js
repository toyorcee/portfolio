import React from "react";
import { motion } from "framer-motion";

// Import the new SVG logo
import portfolioLogo from "../assets/images/portfolio-logo.svg";

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
      <div className={`${sizeClasses[size]} rounded-full bg-blue/10 flex items-center justify-center border-2 border-blue-500/30 overflow-hidden`}>
        <img
          src={portfolioLogo}
          alt="Portfolio Logo"
          className="w-full h-full object-contain p-1"
        />
      </div>
    </motion.div>
  );
};

export default Logo;
