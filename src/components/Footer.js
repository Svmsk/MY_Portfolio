import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: '#', icon: 'github' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: 'envelope' },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center gap-6 text-sm font-semibold leading-6 text-white"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="flex items-center gap-2 hover:text-primary-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa-brands fa-${link.icon} text-xl`} />
                {link.name}
              </a>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm leading-6 text-gray-400"
          >
            Built with React & Tailwind CSS © {new Date().getFullYear()} Borusu Sri Venkata Maheswara Sai Krishna. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
