"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the role-based access control work?",
      answer:
        "Our system has three main roles: Admin (full access to all modules), Salesperson (customer management, sales orders, route tracking), and Accountant (financial modules, invoices, VAT reports). Each role sees only relevant data with full audit trails for security.",
    },
    {
      question: "Can the system handle inventory and VAT automatically?",
      answer:
        "Absolutely! Stock levels update automatically with every sale and purchase order. VAT is calculated per product line based on configurable categories (Standard, Reduced, Zero rate). All invoices show transparent VAT breakdowns.",
    },
    {
      question: "How does the route planning feature work?",
      answer:
        "Managers can create optimized routes for salespeople with customer visits. Field staff can check-in at locations, log visit notes, and update status in real-time. All activity feeds back into the CRM for complete visibility.",
    },
    {
      question: "Can I generate invoices directly from sales orders?",
      answer:
        "Yes! Our automated invoice generation creates invoices directly from sales orders with all customer details, products, pricing, and VAT calculations pre-populated. This eliminates manual entry and reduces errors significantly.",
    },
    {
      question: "What reporting and analytics are available?",
      answer:
        "Each role gets tailored dashboards: Accountants see outstanding invoices and VAT collected, Salespeople track targets and routes, Managers view team performance and sales totals. All with real-time data visualization.",
    },
    {
      question: "How many users can I have on each plan?",
      answer:
        "Starter plan includes up to 3 users, Professional supports up to 7 users, and Enterprise offers unlimited users. All plans include the same core features with role-based access control and security.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Common Questions
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              About Our Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about how our comprehensive business management platform
            can transform your operations. Need specific details? Our team is
            here to help.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-xl transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <Plus className="w-6 h-6 text-blue-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
