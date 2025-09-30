"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Star, Users, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Variants } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          yPercent: 20,
          opacity: 0.5,
          rotateX: 30,
          transformPerspective: 1200,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-600 mb-8 border border-gray-200/50"
          >
            <Star className="w-4 h-4 text-yellow-400 mr-2 fill-current" />
            Trusted by 50,000+ businesses worldwide
            <Users className="w-4 h-4 ml-2 text-blue-500" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The Complete Business
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block">
              Management Platform
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Centralize sales, inventory, accounting, and field operations in one
            powerful platform. From order-to-cash automation to route planning
            and real-time reporting.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>

            <motion.button
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center transition-colors duration-200 bg-white/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { icon: Zap, stat: "90%", label: "Faster Invoice Processing" },
              { icon: Users, stat: "Role-Based", label: "Access Control" },
              { icon: Star, stat: "Real-Time", label: "Inventory Tracking" },
              { icon: Play, stat: "Automated", label: "Route Planning" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">
                  {item.stat}
                </div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div ref={imageRef} className="relative max-w-6xl mx-auto">
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-gray-300 text-sm font-medium">
                Dashboard
              </div>
            </div>
            <div className="aspect-video bg-white">
              <video
                className="w-full h-full object-contain rounded-b-3xl"
                src="/videos/demo.mp4"
                autoPlay
                loop
                preload="metadata"
                muted
                playsInline
                controls={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
