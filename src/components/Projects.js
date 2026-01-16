import { useState } from "react";
import { motion } from "framer-motion";
import PlayStoreBadge from "./PlayStoreBadge";

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

let sneakersImage;
try {
  sneakersImage = require("../assets/images/sneakers.jpg");
} catch (e) {
  sneakersImage = null;
}

let habibistudentImage;
try {
  habibistudentImage = require("../assets/images/habibistudent.jfif");
} catch (e) {
  habibistudentImage = null;
}



let smartInvoiceImage;
try {
  smartInvoiceImage = require("../assets/images/smartinvoice.png");
} catch (e) {
  smartInvoiceImage = null;
}

let moprosperImage;
try {
  moprosperImage = require("../assets/images/moprosper.png");
} catch (e) {
  moprosperImage = null;
}

let ninthWakaImage;
try {
  ninthWakaImage = require("../assets/images/9thwaka.png");
} catch (e) {
  ninthWakaImage = null;
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");

  const mobileProjects = [
    {
      id: 101,
      title: "Moprosper",
      role: "Full Stack Developer",
      company: "Moprosper (FinTech)",
      period: "Available in PlayStore (App Store In Progress)",
      description:
        "A high-yield investment and savings platform designed to help users preserve wealth and achieve financial growth. The mobile application offers secure investment vaults for Gold, Real Estate, and Treasury Bills, alongside flexible savings plans yielding up to 20% APY. Features integrated utility payments, bank-level security protocols, and real-time interest tracking to empower users on their financial journey.",
      modules: [
        "Investment Vaults (Gold, TBills)",
        "Flexible & Locked Savings Plans",
        "Utility Payments (Airtime, Power, Cable)",
        "Wallet Management System",
        "KYC & Identity Verification",
        "Bank-Level Security & Encryption",
        "Real-time Interest Calculation",
        "Referral & Rewards System",
        "Transaction History & Statements",
        "Push Notifications & Alerts",
      ],
      technologies: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Paystack API",
        "Firebase",
      ],
      link: "https://moprosper.com",
      image: moprosperImage,
      type: "mobile",
    },
    {
      id: 102,
      title: "9thWaka",
      role: "Full Stack Developer",
      company: "9thWaka (Logistics)",
      period: "In Progress",
      description:
        "A tech-enabled night logistics platform that provides secure and efficient delivery services running till dawn, bridging the gap when most dispatch companies stop operations. The platform connects customers, vendors, and riders (NightWalkers) through mobile apps with real-time delivery requests, AI-optimized safe routing, live tracking, and in-app payments.",
      modules: [
        "Customer App (Request & Track Deliveries)",
        "AI Safe Route System (Safest & Best-Lit Routes)",
        "Emergency SOS Button",
        "Real-Time GPS Tracking & Live Updates",
        "In-App Chat & Voice Notes",
        "Paystack/Moniepoint Payment Integration",
        "Scheduled Night Deliveries",
        "Rider App (Verification & Navigation)",
        "Rider Wallet System & Earnings",
        "Night Mode Bonus System",
        "Admin Dashboard (Live Tracking)",
        "Vendor Management System",
      ],
      technologies: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Paystack API",
        "Google Maps API",
        "Firebase",
      ],
      link: "https://9thwaka-landing.vercel.app/",
      image: ninthWakaImage,
      type: "mobile",
    },
  ];

  const webProjects = [
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
      id: 0,
      title: "SmartInvoice",
      role: "Lead Full Stack Developer",
      company: "SmartInvoice (SaaS)",
      period: "Production Ready",
      description:
        "A multi-tenant subscription billing and invoicing platform designed for business owners to manage their own clients and invoicing. It serves as a centralized billing engine that integrates with external applications (like Payroll Systems) via secure webhooks. Users can generate professional invoices, handle SaaS subscriptions (monthly/yearly) or outright software sales, and automate access control for third-party apps through a robust payment pipeline.",
      modules: [
        "Multi-tenant Architecture",
        "SaaS & Outright Sales Models",
        "Automated Invoice Generation & Mailing",
        "Paystack Payment Pipeline (Initial, Renewals, Upgrades)",
        "Secure Webhook Orchestration (HMAC Signed)",
        "Cross-System Subscription Sync",
        "Client & Business Management",
        "Role-Based Access Control",
        "Audit Logging & Reliability",
        "Nigerian Tax & Compliance Workflows",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Paystack API",
        "Webhooks (HMAC)",
        "EmailJS / Nodemailer",
        "System Design",
      ],
      link: "https://smartinvoice.digitalentshub.net",
      image: smartInvoiceImage,
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
      link: "https://zamani.digitalentshub.net",
      image: zamaniLogo,
      type: "web-mobile",
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
      link: "https://sbms.digitalentshub.net/",
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
        "A comprehensive cloud-based SaaS payroll solution designed to automate and streamline payroll processing. It integrates seamlessly with SmartInvoice for subscription management, receiving secure webhooks to automatically activate, renew, or suspend access based on payment status. Eliminates manual payroll calculations, ensures compliance with Nigerian tax regulations (PAYE, Pension, NHF, NSITF), and provides real-time insights through role-based dashboards.",
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
      link: "https://payroll.digitalentshub.net/",
      image: payrollImage,
      type: "web",
    },
    {
      id: 6,
      title: "TechXtro Store",
      role: "Full Stack Developer",
      company: "TechXtro Store",
      period: "Production Ready",
      description:
        "A modern, responsive e-commerce platform specializing in tech products, fashion, and lifestyle items. Built with a focus on performance, user experience, and seamless payment processing. The platform features a comprehensive product catalog with categories for Men, Women, Jewelry, and Gadgets, integrated Paystack payment gateway for secure transactions, and a sophisticated dark/light mode theme system for enhanced user comfort. Implemented real-time cart management, order tracking, and automated email notifications using EmailJS for customer communication.",
      modules: [
        "Product Catalog & Management",
        "Shopping Cart & Checkout",
        "Paystack Payment Integration",
        "Dark/Light Mode Theme System",
        "User Authentication & Profiles",
        "Order Management & Tracking",
        "EmailJS Integration for Notifications",
        "Product Search & Filtering",
        "Category-Based Navigation",
        "Responsive Design (Mobile, Tablet, Desktop)",
        "Toast Notifications (React Toastify)",
        "Smooth Animations (Framer Motion)",
        "State Management (Redux)",
        "Modern UI Components (MUI)",
      ],
      technologies: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Material-UI (MUI)",
        "Paystack API",
        "EmailJS",
        "React Toastify",
        "Framer Motion",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful APIs",
      ],
      link: "https://techxtrostore.vercel.app/",
      image: sneakersImage,
      type: "web",
    },
    {
      id: 7,
      title: "Skill Kernel",
      role: "Frontend Developer (Template)",
      company: "Skill Kernel",
      period: "Production Ready",
      description:
        "A dynamic, responsive educational platform template designed for course providers and learning institutions. Built with vanilla HTML, CSS, and JavaScript to deliver optimal performance and smooth user interactions. The platform features a comprehensive course catalog system, advanced search and filtering capabilities, category-based navigation, and an intuitive interface optimized for accessibility and user engagement. Designed as a scalable template that can be easily enhanced with backend integration, payment systems, and advanced learning management features.",
      modules: [
        "Course Catalog & Display",
        "Advanced Search & Filtering",
        "Category-Based Navigation",
        "Course Detail Pages",
        "Popular Courses Section",
        "Short Courses Showcase",
        "Topic/Subject Filtering",
        "Course Reviews System",
        "User Authentication (Login/Apply)",
        "Responsive Design (Mobile-First)",
        "Performance Optimization",
        "Accessibility Features",
        "Newsletter Subscription",
        "Multi-Level Course Organization",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Responsive Design",
        "Vanilla JS",
        "Modern CSS Features",
        "Performance Optimization",
        "Accessibility (WCAG)",
      ],
      link: "https://skill-kernel-six.vercel.app/",
      image: habibistudentImage,
      type: "web",
    },
    // {
    //   id: 8,
    //   title: "NightWalker",
    //   role: "Full Stack Developer",
    //   company: "NightWalker",
    //   period: "In Progress",
    //   description:
    //     "A tech-enabled night logistics platform that provides secure and efficient delivery services between 5:00 PM and 10:00 PM, bridging the gap when most dispatch companies stop operations. The platform connects customers, vendors, and riders (NightWalkers) through mobile apps with real-time delivery requests, AI-optimized safe routing, live tracking, and in-app payments. Features advanced safety systems including AI Safe Route System, Emergency SOS buttons, real-time monitoring, and insurance-backed assurance for secure night-time logistics operations.",
    //   modules: [
    //     "Customer App (Request & Track Deliveries)",
    //     "AI Safe Route System (Safest & Best-Lit Routes)",
    //     "Emergency SOS Button (24/7 Control Room Connection)",
    //     "Real-Time GPS Tracking & Live Updates",
    //     "In-App Chat & Voice Notes",
    //     "Paystack/Moniepoint Payment Integration",
    //     "Scheduled Night Deliveries (Pre-booking)",
    //     "Smart Package Tracking with ETA",
    //     "Reorder & Bulk Delivery Scheduler",
    //     "Rider App (Verification & Navigation)",
    //     "Rider Wallet System & Earnings Dashboard",
    //     "Night Mode Bonus System",
    //     "Rider Safety Score & Performance Badges",
    //     "Safe Rest Stations Mapping",
    //     "Rider Insurance Plan Integration",
    //     "Admin Dashboard (Live Tracking & Analytics)",
    //     "Real-Time Rider Risk Monitoring",
    //     "Route Optimization & Demand Forecasting",
    //     "Vendor Management System",
    //     "Custom Notifications (SMS & App Alerts)",
    //   ],
    //   technologies: [
    //     "React Native",
    //     "React",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB",
    //     "AI/ML Integration",
    //     "Paystack API",
    //     "Moniepoint API",
    //     "Socket.io",
    //     "Real-Time GPS Tracking",
    //     "Push Notifications",
    //     "Map Integration",
    //     "Emergency Response Systems",
    //     "Data Analytics",
    //   ],
    //   link: "#",
    //   image: wakaImage,
    //   type: "web-mobile",
    //   status: "in-progress",
    // },
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

        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "web"
                ? "bg-yellow text-black shadow-lg shadow-yellow/20 scale-105"
                : "bg-transparent border border-ash/30 text-ash hover:border-yellow/50 hover:text-yellow"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === "mobile"
                ? "bg-yellow text-black shadow-lg shadow-yellow/20 scale-105"
                : "bg-transparent border border-ash/30 text-ash hover:border-yellow/50 hover:text-yellow"
            }`}
          >
            Mobile Apps
          </button>
        </div>

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {(activeTab === "web" ? webProjects : mobileProjects).map((project, index) => (
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
                  <div className="mb-6">
                    <div className="mb-4">
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
                      <p className="text-ash-light text-sm font-medium mb-1">
                        {project.role}
                      </p>
                      <p className="text-ash text-sm mb-0.5">{project.company}</p>
                      {project.id === 101 ? (
                        <div className="flex flex-col gap-2 mt-2">
                          <PlayStoreBadge />
                          <p className="text-ash-dark text-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow/50 animate-pulse" />
                            App Store In Progress
                          </p>
                        </div>
                      ) : (
                        <p className="text-ash-dark text-xs">{project.period}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3">
                      {project.link && project.link !== "#" && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="block w-full px-4 py-3 bg-yellow text-black text-sm font-bold rounded-lg hover:bg-yellow-dark transition-colors text-center uppercase tracking-wider shadow-lg shadow-yellow/10"
                          aria-label={`View ${project.title}`}
                        >
                          {project.type === "mobile" ? "View Landing Page Website" : "View Website"}
                        </motion.a>
                      )}
                      {project.adminLink && (
                        <motion.a
                          href={project.adminLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="block w-full px-4 py-3 bg-transparent border border-ash text-ash-light text-sm font-bold rounded-lg hover:border-yellow hover:text-yellow transition-colors text-center uppercase tracking-wider"
                          aria-label={`View ${project.title} Admin`}
                        >
                          View Admin
                        </motion.a>
                      )}
                    </div>
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
