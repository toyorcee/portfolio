import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import PlayStoreBadge from "./PlayStoreBadge";
import nlseeImage from "../assets/images/NLSEE.png";
import jetoutImage from "../assets/images/jetout.jpg";
import zamaniLogo from "../assets/images/zamani-logo.png";
import sbmsImage from "../assets/images/SBMS.jpeg";
import payrollImage from "../assets/images/Payroll.jpeg";
import sneakersImage from "../assets/images/sneakers.jpg";
import habibistudentImage from "../assets/images/habibistudent.jfif";
import smartInvoiceImage from "../assets/images/smartinvoice.png";
import moprosperImage from "../assets/images/moprosper.png";
import ninthWakaImage from "../assets/images/9thwaka.png";
import alertproLogo from "../assets/images/alertpro-logo.svg";
import elraLogo from "../assets/images/elra-logo.png";

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
    {
      id: 103,
      title: "Zamani Mobile App",
      role: "Mobile Developer",
      company: "Zamani Capital",
      period: "In Progress",
      description:
        "A high-performance mobile application built with Flutter, designed to deliver the full suite of Zamani's financial services. This cross-platform solution enables seamless loan applications, savings management, and wallet transactions with a focus on native performance and smooth user experience. Features include biometric authentication, real-time balance updates, and an intuitive interface for managing the three-wallet system.",
      modules: [
        "Cross-Platform Architecture (Flutter)",
        "Biometric Authentication",
        "Loan Application & Tracking",
        "Savings Goal Management",
        "Three-Wallet System Integration",
        "Real-time Transaction History",
        "Push Notifications",
        "Secure Profile Management",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful APIs",
      ],
      link: "#",
      image: zamaniLogo,
      type: "mobile",
    },
  ];

  const webProjects = [
    {
      id: 8,
      title: "NLSEE 2026",
      role: "Lead Full Stack Developer",
      company: "National Leasing Summit & Equipment Expo",
      period: "In Progress",
      description:
        "A high-performance, full-stack event registration and management platform built for the NLSEE Summit. The platform streamlines registrations for industry leaders, policymakers, and innovators in Nigeria's ₦5.2 trillion equipment economy. Features complex multi-role registration flows, automated invoicing, and digital ticketing with QR code verification.",
      modules: [
        "Unified Registration (Multi-Role Support & Dynamic Forms)",
        "Secure Payment Integration (Paystack, Webhooks)",
        "Digital Ticketing (QR Code & PDF E-Tickets)",
        "On-site Verification Portal (Ticket Scanning)",
        "Automated Invoicing & Receipt Generation",
        "Interactive Countdown & Professional Aesthetic",
      ],
      technologies: [
        "React 19",
        "Vite",
        "Tailwind CSS 4",
        "Node.js",
        "Express 5",
        "MongoDB",
        "Paystack API",
        "Lucide React",
        "React Router 7",
        "jsPDF",
        "Framer Motion",
        "aaPanel Hosting",
        "Bitvise SSH Deployment",
      ],
      link: "https://nationalequipmentleasingsummit.com/",
      image: nlseeImage,
      type: "web",
    },
    {
      id: 10,
      title: "ELRA Vendor Portal",
      role: "Full Stack Developer",
      company: "Equipment Leasing Registration Authority (ELRA)",
      period: "Production Ready",
      description:
        "A high-performance government procurement and compliance platform for Nigeria's ELRA. The portal manages the entire vendor ecosystem, from multi-step registration and automated CAC/Tax verification to digital bidding and contract lifecycle management. It ensures transparency and efficiency in government-to-business (G2B) interactions.",
      modules: [
        "Unified Vendor Registration (Individuals & Corporate)",
        "Automated Compliance & Verification (CAC, Tax Clearance)",
        "RFQ & Digital Bidding Marketplace",
        "Contract Lifecycle & Milestone Management",
        "Centralized Vendor Dashboard & Notifications",
        "Secure Payment Visibility & Invoice Tracking",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Framer Motion",
        "JWT Security",
        "FGN Procurement Standards",
        "aaPanel Hosting",
        "Bitvise SSH Deployment",
      ],
      link: "https://vendors.elra.gov.ng",
      image: elraLogo,
      type: "web",
    },
    {
      id: 9,
      title: "Alertpro",
      role: "Lead Full Stack Developer",
      company: "Alertpro AI",
      period: "Active Development",
      description:
        "A cutting-edge, real-time intelligence and broadcast platform designed to eliminate the noise of the modern digital landscape. It continuously scans the web, APIs, news feeds, social media, and private data sources to detect high-impact signals and instantly delivers them to users via WhatsApp, SMS, Email, App Push, and In-App feeds.",
      modules: [
        "Intelligent Monitoring Engine (Multi-Source Scanning, Custom Alerts, Automated Scrapers)",
        "Smart AI Filtering (Gemini-powered Noise Reduction, Urgency Scoring)",
        "Multi-Channel Delivery (WhatsApp, SMS, Email, Push Notifications)",
        "Wallet & Billing System (Usage-Based Pricing, Integrated Payments)",
        "Real-Time Tracking (Alert Costs & Wallet Balance)",
      ],
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "Socket.io",
        "Firebase (FCM)",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "Gemini AI",
        "Node-cron",
      ],
      link: "https://alert-pro.onrender.com",
      image: alertproLogo,
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
        "Server Deployment & Hosting (aaPanel/VPS)",
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 relative inline-block mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Featured Projects
            <motion.span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-blue -bottom-2"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.h2>
          <motion.p
            className="text-ash-light text-base sm:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Showcasing my work and contributions to impactful projects
          </motion.p>
        </motion.div>

        <div className="flex justify-center mb-12 space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("web")}
            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "web"
                ? "bg-blue text-white shadow-lg shadow-blue-500/30"
                : "bg-transparent text-ash hover:text-blue border border-ash/20"
            }`}
          >
            Websites
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab("mobile")}
            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "mobile"
                ? "bg-blue text-white shadow-lg shadow-blue-500/30"
                : "bg-transparent text-ash hover:text-blue border border-ash/20"
            }`}
          >
            Mobile Apps
          </motion.button>
        </div>

        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {(activeTab === "web" ? webProjects : mobileProjects).map((project) => (
            <ProjectCard3D key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard3D = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full transition-all duration-700 hover:border-blue-500/30 group relative overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Animated Highlight */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="flex flex-col lg:flex-row h-full transform-style-3d">
        {/* Image Section */}
        <div
          className={`lg:w-1/3 h-64 lg:h-auto relative overflow-hidden flex items-center justify-center ${
            project.status === "in-progress"
              ? "bg-gradient-to-br from-blue/10 via-dark-gray to-black"
              : "bg-gradient-to-br from-dark-gray to-black"
          }`}
          style={{ transform: "translateZ(20px)" }}
        >
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain p-8 transform transition-transform duration-500 group-hover:scale-110"
              style={{ transform: "translateZ(40px)" }}
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
                      <span>💻</span>
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
        </div>

        {/* Content Section */}
        <div 
            className="lg:w-2/3 p-6 lg:p-8 flex flex-col bg-dark-gray/95"
            style={{ transform: "translateZ(30px)" }}
        >
          {/* Header */}
          <div className="mb-6">
            <div className="mb-4">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue">
                  {project.title}
                </h3>
                {project.status === "in-progress" && (
                  <span className="px-2 py-1 text-xs font-semibold bg-blue/20 border border-blue/30 text-blue rounded-md">
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
                        <span className="w-1.5 h-1.5 rounded-full bg-blue/50 animate-pulse" />
                            App Store In Progress
                      </p>
                    </div>
                ) : (
                <p className="text-ash-dark text-xs">{project.period}</p>
                )}
            </div>

            <div className="flex flex-col gap-3 relative z-20">
              {project.link && project.link !== "#" && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 rounded-xl bg-blue text-white font-bold uppercase tracking-widest text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10">{project.type === "mobile" ? "View Landing Page Website" : "View Website"}</span>
                  <span className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300 text-lg">↗</span>
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </motion.a>
              )}
              {project.adminLink && (
                <a
                  href={project.adminLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 bg-transparent border border-ash text-ash-light text-sm font-bold rounded-lg hover:border-blue hover:text-blue transition-all transform hover:scale-[1.02] text-center uppercase tracking-wider"
                >
                  View Admin
                </a>
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
              <h4 className="text-blue text-sm font-semibold mb-3 uppercase tracking-wider">
                Key Modules Delivered:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.modules.map((module, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-black/50 border border-ash/30 text-ash text-xs font-medium transition-colors hover:border-blue-500/50 hover:bg-blue-600/5"
                  >
                    {module}
                  </span>
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
                    className="px-3 py-1 rounded-md bg-blue/10 border border-blue/20 text-blue text-xs font-medium"
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
  );
};


export default Projects;
