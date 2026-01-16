import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

let profileImage;
try {
  profileImage = require("../assets/images/profimage.jpeg");
} catch (e) {
  profileImage = null;
}

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const x = useMotionValue(0);
  const yRotate = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(yRotate);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    yRotate.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    yRotate.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const name = "Olaniyan Oluwatoyosi";

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black perspective-1000"
    >
      {/* Dynamic Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-gray to-black z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow/10 via-black to-black opacity-40" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center z-20 w-full"
        >
          {/* 1. Intro Tag */}
          <motion.p
            variants={itemVariants}
            className="text-ash text-sm sm:text-base md:text-lg mb-6 font-light tracking-[0.2em] uppercase"
          >
            Hello, I am
          </motion.p>

          {/* 2. Massive Name */}
          <div className="relative mb-12">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex flex-col items-center gap-2 font-sans"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { 
                        x: 0, 
                        opacity: 1,
                        transition: { duration: 0.8, ease: "easeOut" }
                    }
                }}
                className="flex flex-wrap justify-center gap-x-4"
              >
                {name.split(" ")[0].split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    className="inline-block hover:text-yellow transition-colors duration-300 cursor-default"
                    whileHover={{
                      scale: 1.1,
                      y: -10,
                      color: "#ffd700",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div 
                variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: { 
                        x: 0, 
                        opacity: 1,
                        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
                    }
                }}
                className="flex flex-wrap justify-center gap-x-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
              >
                {name.split(" ")[1].split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    className="inline-block hover:text-yellow transition-colors duration-300 cursor-default"
                    whileHover={{
                      scale: 1.1,
                      y: -10,
                      color: "#ffd700",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </motion.h1>
          </div>

          {/* 3. Central 3D Image */}
          <motion.div
            variants={itemVariants}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-12"
            style={{
              perspective: 1000,
              x,
              rotateY,
              rotateX
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(75px)",
              }}
              className="w-full h-full relative"
            >
              {/* Glow behind */}
              <div className="absolute inset-0 bg-yellow/20 rounded-full blur-[60px] transform translate-z-[-20px]" />

              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 relative shadow-2xl shadow-yellow/10 bg-dark-gray">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-dark-gray text-ash">
                    <span className="text-4xl">👤</span>
                  </div>
                )}
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Orbitals */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-yellow/20 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-white/5 rounded-full"
              />
            </motion.div>
          </motion.div>


          {/* 4. Role & Description */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl text-yellow mb-6 font-semibold tracking-wide"
          >
            Full Stack MERN Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-ash-light text-base sm:text-lg max-w-2xl mb-10 leading-relaxed mx-auto"
          >
            Innovative and results-driven developer with over 4 years of
            experience designing, developing, and deploying responsive web and
            mobile applications.
          </motion.p>

          {/* 5. Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center w-full"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest text-center bg-yellow text-black shadow-lg shadow-yellow/20 relative overflow-hidden group w-full sm:w-auto min-w-[200px]"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, borderColor: "#ffd700", color: "#ffd700", backgroundColor: "rgba(255, 215, 0, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest text-center bg-transparent text-ash border border-ash/50 transition-all duration-300 w-full sm:w-auto min-w-[200px]"
            >
              View Work
            </motion.a>
          </motion.div>

          {/* 6. Footer Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mt-16 text-xs sm:text-sm text-ash/60 uppercase tracking-wider"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for Work
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span> Lagos, Nigeria
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
         {[...Array(5)].map((_, i) => (
             <motion.div
                key={i}
                className="absolute bg-ash/5 rounded-full"
                style={{
                    width: Math.random() * 200 + 50,
                    height: Math.random() * 200 + 50,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, Math.random() * 100 - 50],
                    x: [0, Math.random() * 100 - 50],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
             />
         ))}
      </div>
    </section>
  );
};

export default Hero;
