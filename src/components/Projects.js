import React from "react";
import { motion } from "framer-motion";

let elraLogo;
try {
  elraLogo = require("../assets/images/elra-logo.png");
} catch (e) {
  elraLogo = null;
}

let jetoutImage;
try {
  jetoutImage = require("../assets/images/jetout.jpg");
} catch (e) {
  jetoutImage = null;
}

let zamaniLogo;
try {
  zamaniLogo = require("../assets/images/zamani-logo.png");
} catch (e) {
  zamaniLogo = null;
}

let sbmsImage;
try {
  sbmsImage = require("../assets/images/SBMS.jpeg");
} catch (e) {
  sbmsImage = null;
}

let payrollImage;
try {
  payrollImage = require("../assets/images/Payroll.jpeg");
} catch (e) {
  payrollImage = null;
}

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ELRA ERP System",
      role: "Full Stack Developer (MERN)",
      company: "Federal Ministry of Finance (Century Info Systems)",
      period: "August 4 – September 30, 2025",
      description:
        "Developed a full-scale ERP system for Nigeria's Equipment Leasing Registration Authority (ELRA) under the Federal Ministry of Finance. The platform digitized internal operations, automated compliance tracking, and unified inter-departmental workflows.",
      modules: [
        "Department Management",
        "Finance",
        "HR",
        "Inventory",
        "Procurement",
        "Payroll",
        "Legal & Compliance",
        "Projects",
        "Sales",
        "Customer Care",
        "Communication",
        "System Administration",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "MERN Stack"],
      link: "https://elra-erp.onrender.com/",
      image: elraLogo,
      type: "web",
    },
    {
      id: 2,
      title: "JetOut Experience",
      role: "Frontend Developer (Contract)",
      company: "Gurugeeks Royalty Limited",
      period: "May 20 – July 20, 2025",
      description:
        "Built a comprehensive event planning and booking platform where users can discover, plan, and book experiences, parties, and events. The platform enables event discovery (like events coming to Lagos, Nigeria), ticket purchasing, and a full merchandise store where users can buy party wearables and items to take home. Also developed a complete admin dashboard for managing events, bookings, merchandise inventory, and orders.",
      modules: [
        "Event Discovery & Search",
        "Ticket Booking System",
        "Interactive Booking Flows",
        "Merchandise Store",
        "Checkout & Payment",
        "Admin Dashboard",
        "Event Management",
        "Booking Management",
        "Inventory Management",
        "User Management",
      ],
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "React Hook Form",
        "RESTful APIs",
        "Toastify",
        "Git/GitHub",
      ],
      link: "https://jetoutexperience.com/",
      adminLink: "https://www.jetoutexperience.com/admin/login",
      image: jetoutImage,
      type: "web",
    },
    {
      id: 3,
      title: "Zamani Capital",
      role: "Full Stack Developer",
      company: "Zamani Capital",
      period: "In Progress",
      description:
        "A digital financial services platform (web and mobile) that provides lending and savings solutions. Enables customers to apply for loans, manage savings, and handle financial transactions through a comprehensive wallet system. Features a multi-factor credit scoring system that evaluates customers using bureau data, KYC verification, income analysis, alternative data sources, and behavioral patterns from repayment history.",
      modules: [
        "Loan Application System",
        "Multi-Factor Credit Scoring",
        "Savings Accounts with Interest Tracking",
        "Three-Wallet System (Main, Loans, Savings)",
        "Loan Management & Repayment",
        "Transaction History & Tracking",
        "Real-time Notifications",
        "Role-Based Access Control",
        "Field Account Officer Portal",
        "Risk Officer Dashboard",
        "Operations Management",
        "Automated Workflows",
        "Compliance Tracking",
        "Reporting & Analytics",
      ],
      technologies: [
        "React",
        "React Native",
        "Node.js",
        "MongoDB",
        "Express.js",
        "MERN Stack",
      ],
      link: "#",
      image: zamaniLogo,
      type: "web-mobile",
      status: "in-progress",
    },
    {
      id: 4,
      title: "School Bill Management System (SBMS)",
      role: "Full Stack Developer",
      company: "SBMS",
      period: "Production Ready",
      description:
        "A comprehensive full-stack web application designed to streamline financial operations for educational institutions. Enables schools to efficiently manage student billing, payments, expenses, and financial reporting through an intuitive, role-based interface. Features multi-tenant architecture, Paystack payment integration, real-time notifications, and comprehensive analytics.",
      modules: [
        "Multi-Tenant Architecture",
        "Role-Based Access Control (Admin, Bursar, Student)",
        "Bill Management & Assignment",
        "Paystack Payment Integration",
        "Payment Processing & Allocation",
        "Student Management",
        "Academic Management (Terms, Classes)",
        "Financial Analytics & Reporting",
        "Expense Management",
        "Inventory Management",
        "Real-time Notifications (Socket.io)",
        "Payment Reminders (Automated)",
        "Receipt Generation (PDF)",
        "Report Export (PDF, Excel, CSV)",
      ],
      technologies: [
        "React 19",
        "Vite",
        "Tailwind CSS 4",
        "Node.js",
        "Express 5",
        "MongoDB",
        "Socket.io",
        "Paystack API",
        "JWT",
        "Framer Motion",
        "Recharts",
        "jsPDF",
      ],
      link: "https://sbms-2z2m.onrender.com/",
      image: sbmsImage,
      type: "web",
    },
    {
      id: 5,
      title: "Payroll Management System (PMS)",
      role: "Full Stack Developer",
      company: "PMS",
      period: "In Progress",
      description:
        "A comprehensive cloud-based SaaS payroll solution designed to automate and streamline payroll processing for organizations of all sizes. Eliminates manual payroll calculations, ensures compliance with Nigerian tax regulations (PAYE, Pension, NHF, NSITF), and provides real-time insights through role-based dashboards. Features automated payroll processing, template management, multi-level approval workflows, and employee self-service portal.",
      modules: [
        "Automated Payroll Processing",
        "Template Management System",
        "Employee Management",
        "Tax Configuration & Compliance",
        "Payslip Generation & Distribution",
        "Plan-Based Approval Workflows",
        "Role-Based Dashboards",
        "Real-Time Notifications (Socket.io)",
        "Reporting & Analytics",
        "Multi-Organization Support",
        "SaaS Subscription Management",
        "Employee Self-Service Portal",
        "CSV Import/Export",
        "PDF Generation",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
        "PDF Generation",
        "CSV Processing",
        "SaaS Architecture",
      ],
      link: "#",
      image: payrollImage,
      type: "web",
      status: "in-progress",
    },
    // Add more projects here following the same structure
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-fit py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-yellow/5 rounded-full blur-3xl top-1/4 right-1/4"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-yellow/5 rounded-full blur-3xl bottom-1/4 left-1/4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
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
            Professional Experience
            <motion.span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-yellow -bottom-2"
              initial={{ width: 0 }}
              whileInView={{ width: "140px" }}
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
            Showcasing my work and contributions to impactful projects
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-dark-gray/80 backdrop-blur-sm border border-ash/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-yellow/50 hover:shadow-2xl hover:shadow-yellow/20 group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <motion.div
                  className={`lg:w-1/3 h-64 lg:h-auto relative overflow-hidden flex items-center justify-center ${
                    project.status === "in-progress"
                      ? "bg-gradient-to-br from-yellow/10 via-dark-gray to-black"
                      : "bg-gradient-to-br from-dark-gray to-black"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-8"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4 opacity-50 flex items-center justify-center gap-2">
                          {project.type === "mobile" ? (
                            "📱"
                          ) : project.type === "web-mobile" ? (
                            <>
                              <span>📱</span>
                              <span>�</span>
                            </>
                          ) : (
                            "💻"
                          )}
                        </div>
                        <p className="text-ash text-sm uppercase tracking-wider">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Content Section */}
                <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <motion.h3
                            className="text-2xl sm:text-3xl font-bold text-yellow"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.title}
                          </motion.h3>
                          {project.status === "in-progress" && (
                            <span className="px-2 py-1 text-xs font-semibold bg-yellow/20 border border-yellow/30 text-yellow rounded-md">
                              In Progress
                            </span>
                          )}
                        </div>
                        <p className="text-ash-light text-sm font-medium">
                          {project.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {project.link && project.link !== "#" && (
                          <div className="relative group/link">
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-yellow hover:text-yellow-dark text-2xl cursor-pointer"
                              aria-label={`View ${project.title}`}
                            >
                              ↗
                            </motion.a>
                            {/* Tooltip */}
                            <div className="absolute right-0 top-full mt-2 px-3 py-1.5 bg-black/90 border border-yellow/30 rounded-lg text-xs text-yellow whitespace-nowrap opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                              Visit main site
                              <div className="absolute -top-1 right-4 w-2 h-2 bg-black border-l border-t border-yellow/30 rotate-45"></div>
                            </div>
                          </div>
                        )}
                        {project.adminLink && (
                          <div className="relative group/admin">
                            <motion.a
                              href={project.adminLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-ash hover:text-yellow text-xl cursor-pointer"
                              aria-label={`View ${project.title} Admin`}
                            >
                              ⚙️
                            </motion.a>
                            {/* Tooltip */}
                            <div className="absolute right-0 top-full mt-2 px-3 py-1.5 bg-black/90 border border-yellow/30 rounded-lg text-xs text-yellow whitespace-nowrap opacity-0 group-hover/admin:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                              Visit admin panel
                              <div className="absolute -top-1 right-4 w-2 h-2 bg-black border-l border-t border-yellow/30 rotate-45"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-ash text-sm mb-1">{project.company}</p>
                    <p className="text-ash-dark text-xs">{project.period}</p>
                  </div>

                  {/* Description */}
                  <p className="text-ash-light mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Modules/Features */}
                  {project.modules && project.modules.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-yellow text-sm font-semibold mb-3 uppercase tracking-wider">
                        Key Modules Delivered:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.modules.map((module, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{
                              scale: 1.05,
                              color: "#ffd700",
                              borderColor: "#ffd700",
                            }}
                            className="px-3 py-1.5 rounded-lg bg-black/50 border border-ash/30 text-ash text-xs font-medium transition-all duration-300 cursor-default hover:border-yellow/50 hover:bg-yellow/5"
                          >
                            {module}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-ash/20">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-md bg-yellow/10 border border-yellow/20 text-yellow text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
