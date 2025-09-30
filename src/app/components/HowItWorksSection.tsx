"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, TrendingUp } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Set Up Your Team",
      description:
        "Create user accounts with role-based permissions. Assign admins, salespeople, and accountants with appropriate access levels for security and efficiency.",
    },
    {
      icon: Settings,
      step: "02",
      title: "Configure Your Business",
      description:
        "Import customers, suppliers, and products. Set up VAT categories, pricing, and inventory levels. Configure routes and territories for your sales team.",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "Start Managing Everything",
      description:
        "Create sales orders, generate invoices automatically, track payments, manage inventory, and monitor field activities - all from one unified dashboard.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Business Online in
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              3 Easy Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with our comprehensive CRM
            platform. No technical expertise required - we guide you through
            every step.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full text-2xl font-bold mb-6 relative z-10 shadow-lg">
                  {step.step}
                </div>

                {/* Icon */}
                <motion.div
                  className="w-20 h-20 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <step.icon className="w-10 h-10 text-blue-600" />
                </motion.div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
