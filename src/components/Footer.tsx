'use client'

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Compass, 
  Sun, 
  Moon, 
  Sparkles,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Quote,
  Award,
  Users,
  Calendar,
  Home,
  MessageCircle
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Compass className="h-8 w-8 text-amber-400" />
              <div>
                <h3 className="font-bold text-lg">दीपज्योति ज्योतिष</h3>
                <p className="text-sm text-amber-400">वास्तु परामर्श केन्द्र</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Guiding souls towards cosmic harmony since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Kundali Analysis</li>
              <li>Vastu Shastra</li>
              <li>Muhurta Selection</li>
              <li>Remedial Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Address</h4>
            <p className="text-gray-400 text-sm">
              JFW6+9M7, Kesar Marg<br />
              Tilottama 32907, Nepal
            </p>
            <p className="text-gray-400 text-sm mt-2">
              📞 +977-985-704-XXXX
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 दीपज्योति ज्योतिष तथा वास्तु परामर्श केन्द्र. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};