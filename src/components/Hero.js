import React from "react";
import { motion } from "framer-motion";

let profileImage;
try {
  profileImage = require("../assets/images/profimage.jpeg");
} catch (e) {
  profileImage = null;
}

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-black via-dark-gray to-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-ash text-lg sm:text-xl mb-2 font-light"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            >
              Olaniyan Oluwatoyosi
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl text-yellow mb-6 font-semibold"
            >
              Full Stack MERN Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-ash-light text-base sm:text-lg max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Innovative and results-driven developer with over 4 years of
              experience designing, developing, and deploying responsive web and
              mobile applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wider text-center bg-yellow text-black hover:bg-yellow-dark hover:shadow-lg hover:shadow-yellow/50 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg font-medium text-sm uppercase tracking-wider text-center bg-transparent text-ash border-2 border-ash hover:border-yellow hover:text-yellow transition-all duration-300"
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 text-sm text-ash"
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-yellow text-lg">📍</span>
                <span>Afolabi Aina, Allen, Ikeja, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-yellow text-lg">📞</span>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="tel:+2348151078248"
                    className="text-ash hover:text-yellow transition-colors"
                  >
                    08151078248
                  </a>
                  <span className="text-ash">|</span>
                  <a
                    href="tel:+2348108663443"
                    className="text-ash hover:text-yellow transition-colors"
                  >
                    08108663443
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="text-yellow text-lg">📧</span>
                <a
                  href="mailto:oluwatoyosiolaniyan@gmail.com"
                  className="text-ash hover:text-yellow transition-colors"
                >
                  oluwatoyosiolaniyan@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex items-center justify-center relative"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-yellow/30 bg-dark-gray flex items-center justify-center relative z-10 overflow-hidden shadow-2xl shadow-yellow/20">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Olaniyan Oluwatoyosi"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ash/10 to-black/50">
                  <span className="text-ash text-sm uppercase tracking-wider">
                    Your Photo
                  </span>
                </div>
              )}
            </div>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-yellow/10 rounded-full -z-10"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <motion.div
          className="absolute w-64 h-64 bg-yellow rounded-full opacity-10 top-10 right-10"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-yellow rounded-full opacity-10 bottom-20 left-10"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-yellow rounded-full opacity-10 top-1/2 right-1/4"
          animate={{
            y: [0, -15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
