'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Sparkles,
  ArrowRight,
  Users,
  Calendar,
  MapPin,
  Sun,
  Moon,
} from 'lucide-react';
import Image from 'next/image';


export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with Nepali-inspired pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-amber-50/80 via-white to-orange-50/70" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
        {/* Traditional pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgNUwxMCAzMEwzMCA1NUw1MCAzMEwzMCA1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzVBMTUyIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] bg-repeat" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center space-x-2 bg-linear-to-r from-amber-100 to-orange-100 px-5 py-2.5 rounded-full border border-amber-200/50 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-800">वि.सं. २०८२ • ५०००+ विश्वस्त ग्राहक</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight"
          >
            <span className="text-amber-600 font-serif">ज्योतिष</span> मार्गमा
            <span className="block text-amber-500 relative mt-1">
              आफ्नो भाग्य खोज्नुहोस्
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg"
          >
            वास्तु शास्त्र र ज्योतिषीय परामर्श सेवाहरू — तपाईंलाई सफलता,
            सद्भाव र आध्यात्मिक पूर्णतातर्फ मार्गदर्शन गर्न।
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-linear-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-amber-200/50 hover:shadow-amber-300/70 transition-all flex items-center gap-2"
            >
              परामर्श बुक गर्नुहोस्
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border border-amber-200/50 hover:border-amber-300"
            >
              थप जान्नुहोस्
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center space-x-8 pt-4"
          >
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 bg-amber-100 rounded-full">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              </div>
              <span className="text-gray-700 font-medium">४.९/५ मूल्याङ्कन</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 bg-amber-100 rounded-full">
                <Users className="h-4 w-4 text-amber-500" />
              </div>
              <span className="text-gray-700 font-medium">५०००+ ग्राहक</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2.5">
              <div className="p-1.5 bg-amber-100 rounded-full">
                <MapPin className="h-4 w-4 text-amber-500" />
              </div>
              <span className="text-gray-700 font-medium">काठमाडौं, नेपाल</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-amber-200/30">
            {/* Decorative border with mandala-like pattern */}
            <div className="absolute inset-0 p-2 pointer-events-none z-10">
              <div className="w-full h-full rounded-2xl border-2 border-dashed border-amber-300/30" />
            </div>

            <div className="absolute inset-0 bg-linear-to-tr from-amber-400/15 to-orange-400/10 z-10" />
            <Image
              src={"/landingpageimg.png"}
              alt="ज्योतिष परामर्श"
              className="w-full h-full object-content"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

            {/* Floating Cards */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-xl z-20 border border-amber-100/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-linear-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">अर्को सत्र</p>
                    <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                      <span>आज साँझ ७:०० बजे</span>
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <div className="h-3 w-3 rounded-full bg-green-400 shadow-lg shadow-green-200" />
                </motion.div>
              </div>
            </motion.div>

            {/* Top decorative badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-amber-100/50 z-20 flex items-center gap-2"
            >
              <Sun className="h-4 w-4 text-amber-500" />
              <span className="text-xs font-medium text-gray-700">शुभ समय</span>
            </motion.div>
          </div>

          {/* Decorative Elements with Nepali flair */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute -top-8 -right-8 h-28 w-28 rounded-full border-4 border-amber-200/40 opacity-30"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.08, 1],
            }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full border-4 border-orange-200/40 opacity-30"
          />
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.03, 1],
            }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute top-1/2 -right-12 h-12 w-12 rounded-full border-2 border-amber-300/20 opacity-20"
          />
          {/* Small mandala dots */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 3 + i, delay: i * 0.5 }}
              className={`absolute rounded-full bg-amber-300/30 ${
                i === 0 ? 'w-3 h-3 top-12 left-8' :
                i === 1 ? 'w-2 h-2 bottom-20 right-12' :
                'w-2.5 h-2.5 top-1/3 -left-4'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};