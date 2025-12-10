import React, { useState } from "react";
import { motion } from "framer-motion";

let githubLogo;
try {
  githubLogo = require("../assets/images/github.png");
} catch (e) {
  githubLogo = null;
}

let instagramLogo;
try {
  instagramLogo = require("../assets/images/instagram.jpg");
} catch (e) {
  instagramLogo = null;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:oluwatoyosiolaniyan@gmail.com?subject=Contact from ${
      formData.name
    }&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
    setFormData({ name: "", email: "", message: "" });
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "Allen, Ikeja, Lagos, Nigeria",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "08151078248 | 08108663443",
      phones: [
        { number: "08151078248", link: "tel:+2348151078248" },
        { number: "08108663443", link: "tel:+2348108663443" },
      ],
    },
    {
      icon: "📧",
      label: "Email",
      value: "oluwatoyosiolaniyan@gmail.com",
      link: "mailto:oluwatoyosiolaniyan@gmail.com",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: githubLogo,
      link: "https://github.com/toyorcee",
      isImage: true,
    },
    {
      name: "Instagram",
      icon: instagramLogo,
      link: "https://www.instagram.com/teecrane_/",
      isImage: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
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
      id="contact"
      className="min-h-screen h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-dark-gray relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-yellow/5 rounded-full blur-3xl top-1/4 left-1/4"
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
          className="absolute w-96 h-96 bg-yellow/5 rounded-full blur-3xl bottom-1/4 right-1/4"
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
            Get In Touch
            <motion.span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-yellow -bottom-2"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
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
            Let's collaborate and bring your ideas to life
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-yellow text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-ash text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-ash-light hover:text-yellow transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : info.phones ? (
                        <div className="flex items-center gap-2 flex-wrap">
                          {info.phones.map((phone, phoneIndex) => (
                            <React.Fragment key={phoneIndex}>
                              <a
                                href={phone.link}
                                className="text-ash-light hover:text-yellow transition-colors"
                              >
                                {phone.number}
                              </a>
                              {phoneIndex < info.phones.length - 1 && (
                                <span className="text-ash">|</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      ) : (
                        <p className="text-ash-light">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-yellow mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full bg-black/50 border border-ash/20 flex items-center justify-center hover:border-yellow hover:bg-yellow/10 transition-all duration-300 overflow-hidden ${
                      social.isImage ? "p-0" : "text-xl"
                    }`}
                    aria-label={social.name}
                  >
                    {social.isImage && social.icon ? (
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-xl">{social.icon}</span>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            {/* Success Message */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 bg-black/95 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center z-50 p-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="w-20 h-20 rounded-full bg-yellow/20 flex items-center justify-center mb-4"
                >
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-12 h-12 text-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold text-yellow mb-2"
                >
                  Message Sent!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-ash-light text-center"
                >
                  Your email client should open shortly.
                  <br />
                  Thank you for reaching out!
                </motion.p>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => setShowSuccess(false)}
                  className="mt-6 px-6 py-2 bg-yellow text-black font-semibold rounded-lg hover:bg-yellow-dark transition-colors"
                >
                  Close
                </motion.button>
              </motion.div>
            )}

            <form
              onSubmit={handleSubmit}
              className={`bg-black/50 backdrop-blur-sm border border-ash/20 rounded-2xl p-8 space-y-6 ${
                showSuccess ? "opacity-30 pointer-events-none" : ""
              } transition-opacity duration-300`}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-ash-light text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-gray border border-ash/20 rounded-lg text-white placeholder-ash focus:outline-none focus:border-yellow transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-ash-light text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-gray border border-ash/20 rounded-lg text-white placeholder-ash focus:outline-none focus:border-yellow transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-ash-light text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-gray border border-ash/20 rounded-lg text-white placeholder-ash focus:outline-none focus:border-yellow transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-yellow text-black font-semibold rounded-lg hover:bg-yellow-dark transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
