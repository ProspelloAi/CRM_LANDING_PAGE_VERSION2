"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ChartBar as BarChart,
  MapPin,
  Receipt,
  Database,
  UserCheck,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Database,
      title: "Complete Business Hub",
      description:
        "Centralize customers, suppliers, inventory, sales orders, invoices, and payments in one unified platform with real-time synchronization.",
    },
    {
      icon: UserCheck,
      title: "Role-Based Access Control",
      description:
        "Secure your data with granular permissions. Admins, salespeople, and accountants see only what they need with full audit trails.",
    },
    {
      icon: Zap,
      title: "Automated Invoice Generation",
      description:
        "Generate invoices directly from sales orders with automatic VAT calculations, reducing manual errors and processing time by 90%.",
    },
    {
      icon: MapPin,
      title: "Smart Route Planning",
      description:
        "Optimize field sales with intelligent route creation, customer visit tracking, and real-time location check-ins for maximum efficiency.",
    },
    {
      icon: BarChart,
      title: "Real-Time Inventory Tracking",
      description:
        "Track stock levels automatically with every sale and purchase. Never oversell or run out of stock with live inventory updates.",
    },
    {
      icon: Receipt,
      title: "Complete Financial Control",
      description:
        "Track payments, manage VAT categories, generate financial reports, and maintain full accounts receivable visibility in real-time.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything Your Business Needs
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              In One Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sales and inventory to accounting and field operations - manage
            every aspect of your business with enterprise-grade security and
            role-based access control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
