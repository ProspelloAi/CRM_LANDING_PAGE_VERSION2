"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck as CheckCircle } from "lucide-react";

export default function CTASection() {
  const benefits = [
    "14-day free trial",
    "No setup fees",
    "Cancel anytime",
    "24/7 support",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Streamline Your
            <span className="block bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              Entire Business?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join growing businesses using our platform to manage sales,
            inventory, accounting, and field operations in one unified system
            with enterprise-grade security.
          </p>

          {/* Benefits List */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-bold flex items-center justify-center hover:bg-blue-50 transition-colors duration-200 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>

            <motion.button
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-blue-100 mb-4">
              Trusted by growing businesses worldwide
            </p>
            <div className="flex justify-center space-x-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="w-6 h-6 bg-yellow-400 rounded-full"
                ></div>
              ))}
            </div>
            <p className="text-blue-100 text-sm mt-2">
              Comprehensive business management platform
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
