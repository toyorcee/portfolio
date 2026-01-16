import React from "react";
import { motion } from "framer-motion";

const PlayStoreBadge = ({ className }) => {
  return (
    <motion.a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-black border border-ash/30 rounded-lg px-3 py-1.5 hover:bg-dark-gray hover:border-ash/50 transition-all duration-300 group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6 fill-current text-white group-hover:text-yellow transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.609 1.814L13.792 12 3.61 22.186a1.006 1.006 0 01-.61-.92V2.734a1 1 0 01.609-.92zm11.583 11.582L4.996 23.591l12.16-6.848-1.964-3.347zm1.365-1.365l2.256 3.84 3.033-1.706c.866-.488.866-1.964 0-2.452l-3.033-1.707-2.256 3.841-2.256-1.5zM15.192 10.604L5.003.408l12.153 6.847 1.964-3.346-3.928 6.695z" />
      </svg>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] text-ash-light uppercase font-medium tracking-wider">
          Get it on
        </span>
        <span className="text-sm font-bold text-white group-hover:text-yellow transition-colors duration-300">
          Google Play
        </span>
      </div>
    </motion.a>
  );
};

export default PlayStoreBadge;
