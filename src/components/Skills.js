import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = {
    mobile: {
      title: "Mobile Development",
      skills: [
        "React Native",
        "Expo",
        "React Navigation",
        "iOS Development",
        "Android Development",
        "App Store Deployment",
        "Play Store Deployment",
        "App Store Connect",
        "Google Play Console",
        "TestFlight",
        "Code Signing",
        "APK/AAB Builds",
        "Store Listing Management",
        "App Review Process",
      ],
    },
    frontend: {
      title: "Frontend Development",
      skills: [
        "React",
        "Redux",
        "TypeScript",
        "Tailwind CSS",
        "jQuery",
        "HTML",
        "CSS",
        "JavaScript",
        "Next.js",
        "Bootstrap",
        "React-Bootstrap",
        "Figma",
        "Framer Motion",
        "React Hook Form",
        "Skeleton Screens",
        "Recharts",
        "Chart.js",
        "React Query",
        "Responsive Layouts",
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "Python",
        "RESTful APIs",
        "Firebase",
        "Clerk",
        "Socket.io",
        "External API Integration",
      ],
    },
    database: {
      title: "Database Management",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
    },
    stateManagement: {
      title: "State Management",
      skills: ["Redux", "Context API", "Auth Context"],
    },
    versionControl: {
      title: "Version Control & Collaboration",
      skills: ["Git", "GitHub", "GitLab", "Slack", "Figma", "ClickUp"],
    },
    cicd: {
      title: "CI/CD & Deployment",
      skills: [
        "Vercel",
        "Netlify",
        "Render",
        "GitLab CI/CD",
        "GitHub Actions",
        "Contabo",
        "aaPanel",
        "CPanel",
      ],
    },
    tools: {
      title: "Other Tools & Libraries",
      skills: [
        "Cloudinary",
        "AJAX",
        "IndexedDB",
        "EmailJS",
        "Toastify",
        "Algorithms",
        "SEO",
        "Web Performance",
        "UI/UX Design",
        "CRUD Operations",
        "Pagination",
        "OAuth",
        "Light/Dark Mode",
      ],
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-fit py-20 px-4 sm:px-6 lg:px-8 bg-dark-gray relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-yellow/5 rounded-full blur-3xl top-0 left-0"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-yellow/5 rounded-full blur-3xl bottom-0 right-0"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Technical Skills
            <motion.span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-yellow -bottom-2"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p
            className="text-ash-light text-lg sm:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Technologies and tools I work with to build amazing applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {Object.entries(skillsData).map(([key, category], cardIndex) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="bg-black/50 backdrop-blur-sm border border-ash/20 rounded-xl p-6 transition-all duration-300 hover:border-yellow/50 hover:shadow-2xl hover:shadow-yellow/20 relative overflow-hidden group"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow/0 to-yellow/0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                initial={false}
              />

              <motion.h3
                className="text-xl sm:text-2xl font-bold text-yellow mb-6 pb-4 border-b border-ash/20 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {category.title}
              </motion.h3>

              <motion.div
                className="flex flex-wrap gap-3 relative z-10"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={skillItemVariants}
                    whileHover={{
                      scale: 1.1,
                      color: "#ffd700",
                      borderColor: "#ffd700",
                      backgroundColor: "rgba(255, 215, 0, 0.1)",
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg bg-dark-gray border border-ash/30 text-ash text-sm font-medium transition-all duration-300 cursor-pointer hover:border-yellow/50 hover:bg-yellow/5 relative overflow-hidden group"
                  >
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
