'use client'
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';


import Image from 'next/image';
export  const  Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed min-w-screen max-w-screen z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-amber-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <Image src={"/logo.jpeg"} width={50} height={50} className='rounded-full' alt='logo' />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 tracking-tight">
                दीपज्योति ज्योतिष
              </h1>
              <p className="text-xs text-amber-600 font-medium">वास्तु परामर्श केन्द्र</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-amber-600 transition-colors font-medium relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-6 py-2 rounded-full font-medium shadow-lg shadow-amber-200 hover:shadow-amber-300 transition-all"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-amber-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg"
      >
        <div className="px-4 py-6 space-y-4">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-600 hover:text-amber-600 transition-colors font-medium py-2 border-b border-amber-50"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-amber-500 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-amber-200"
          >
            Book Now
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};