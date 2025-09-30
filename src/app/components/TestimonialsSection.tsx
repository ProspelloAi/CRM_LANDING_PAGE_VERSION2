"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus Thompson",
      position: "Operations Manager",
      company: "Thompson Distributors",
      avatar: "SC",
      rating: 5,
      text: "The route planning feature revolutionized our field sales. Our team now covers 40% more customers daily, and the automated invoice generation from sales orders eliminated billing errors completely.",
    },
    {
      name: "Elena Rodriguez",
      position: "Finance Director",
      company: "Rodriguez Manufacturing",
      avatar: "MR",
      rating: 5,
      text: "Having real-time inventory tracking integrated with our accounting has been a game-changer. We reduced stock-outs by 80% and the VAT reporting saves us hours during tax season.",
    },
    {
      name: "David Kim",
      position: "Sales Director",
      company: "Kim Electronics",
      avatar: "EJ",
      rating: 5,
      text: "The role-based access control gives us perfect security - salespeople see their customers, accountants handle finances, and I get the complete overview. It's exactly what we needed.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Business Owners
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Everywhere
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses like yours are streamlining operations and
            growing faster with our comprehensive business management platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-blue-600 mb-4" />
                <p className="text-gray-700 leading-relaxed text-lg">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2 fill-current" />
              <span className="text-2xl font-bold text-gray-900 mr-2">
                4.9/5
              </span>
              <span>on G2</span>
            </div>
            <div className="flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2 fill-current" />
              <span className="text-2xl font-bold text-gray-900 mr-2">
                4.8/5
              </span>
              <span>on Capterra</span>
            </div>
            <div className="text-lg">
              <span className="text-2xl font-bold text-gray-900">50,000+</span>
              <span className="ml-2">Happy Customers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
