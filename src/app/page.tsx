"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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
  MessageCircle,
} from "lucide-react";
import landingpageimg from "../../public/landingpageimg.png";
import Image from "next/image";
import { Hero } from "@/components/Hero";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Kundali Analysis",
      description:
        "Detailed birth chart analysis to understand your life's purpose and path.",
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: <Moon className="h-8 w-8" />,
      title: "Vastu Shastra",
      description:
        "Harmonize your living and working spaces with ancient Vastu principles.",
      color: "from-blue-400 to-indigo-400",
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Muhurta Selection",
      description:
        "Find the most auspicious dates and times for important life events.",
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Remedial Solutions",
      description:
        "Personalized remedies including gemstones, mantras, and rituals.",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Vastu Consultation",
      description:
        "Expert advice for home, office, and business space optimization.",
      color: "from-red-400 to-rose-400",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Spiritual Guidance",
      description:
        "Holistic spiritual counseling for personal and professional growth.",
      color: "from-yellow-400 to-amber-400",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive astrological and Vastu solutions tailored to your
            unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: any; index: number }> = ({
  service,
  index,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-50"
    >
      <div
        className={`inline-flex p-4 rounded-xl bg-linear-to-br ${service.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
      <motion.button
        whileHover={{ x: 5 }}
        className="mt-4 text-amber-500 font-medium flex items-center gap-2 group-hover:text-amber-600 transition-colors"
      >
        Learn More <ArrowRight className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop"
              alt="About Deepjyoti Astrology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-amber-900/40 to-transparent"></div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-lg rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="h-14 w-14 rounded-full bg-amber-100 flex items-center justify-center">
                  <Award className="h-7 w-7 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    15+ Years Experience
                  </p>
                  <p className="text-sm text-gray-500">
                    Trusted by thousands worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            About <span className="text-amber-500">Deepjyoti</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Deepjyoti Jyotish tatha Vastu Paramarsh Kendra is a premier
            astrological consultancy founded with the vision of bringing ancient
            wisdom to modern lives.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our expert astrologers and Vastu consultants combine traditional
            knowledge with contemporary understanding to provide holistic
            solutions for life's challenges.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              {
                label: "Happy Clients",
                value: "5000+",
                icon: <Users className="h-5 w-5" />,
              },
              {
                label: "Years Experience",
                value: "15+",
                icon: <Award className="h-5 w-5" />,
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-md border border-amber-50"
              >
                <div className="flex items-center space-x-2 text-amber-500 mb-1">
                  {stat.icon}
                  <span className="text-sm font-medium">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-amber-200 hover:shadow-amber-300 transition-all"
          >
            Read More About Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Kathmandu, Nepal",
      text: "Deepjyoti's Vastu consultation transformed our home. The positive energy flow is incredible!",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Priya Adhikari",
      location: "Pokhara, Nepal",
      text: "The Kundali analysis was eye-opening. Everything predicted came true! Highly recommended.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Suresh Khanal",
      location: "Butwal, Nepal",
      text: "Their muhurta selection for our business launch brought tremendous success. Grateful forever.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Client <span className="text-amber-500">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from people whose lives we've touched
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-amber-50 relative"
            >
              <Quote className="h-10 w-10 text-amber-200 absolute top-4 right-4" />
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover border-2 border-amber-200"
                />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us or reach out for a consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="h-5 w-5" />,
                    text: "JFW6+9M7, Kesar Marg, Tilottama 32907, Nepal",
                  },
                  {
                    icon: <Phone className="h-5 w-5" />,
                    text: "+977-985-704-XXXX",
                  },
                  {
                    icon: <Mail className="h-5 w-5" />,
                    text: "info@deepjyoti.com",
                  },
                  {
                    icon: <Clock className="h-5 w-5" />,
                    text: "Mon-Sat: 9:00 AM - 7:00 PM",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-amber-50 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                      {item.icon}
                    </div>
                    <span className="text-gray-600">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Youtube, MessageCircle].map(
                  (Icon, idx) => (
                    <motion.a
                      key={idx}
                      href="#"
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-200 transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-amber-50"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all outline-none"
                  placeholder="Tell us about your query"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-amber-200 hover:shadow-amber-300 transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-amber-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1684.3473350423246!2d83.46152695045667!3d27.64407843895822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685b309e1a2df%3A0x6092d599aed89b6e!2sJFW6%2B9M7%2C%20Kesar%20Marg%2C%20Tilottama%2032907!5e1!3m2!1sen!2snp!4v1787850395714!5m2!1sen!2snp"
            width="100%"
            height="450"
             allowFullScreen
            style={{ border: 0 }}
            className="w-full"
            loading="lazy"
            title="Deepjyoti Astrology Location"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5!2d83.45!3d27.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM5JzAwLjAiTiA4M8KwMjcnMDAuMCJF!5e0!3m2!1sen!2snp!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Deepjyoti Astrology Location"
          ></iframe> */}
        </motion.div>
      </div>
    </section>
  );
};

export default App;
