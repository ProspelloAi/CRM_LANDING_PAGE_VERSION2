"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = React.useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 55,
      yearlyPrice: 44,
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 3 users",
        "Customer & supplier management",
        "Basic reporting",
        "Sales order creation",
        "Invoice generation",
        "Basic inventory tracking",
        "Email support",
        "Standard dashboard",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      monthlyPrice: 95,
      yearlyPrice: 76,
      period: "/month",
      description: "Most popular for growing teams",
      features: [
        "Up to 7 users",
        "All Starter features",
        "Route planning & tracking",
        "Advanced reporting & analytics",
        "VAT management & categories",
        "Real-time inventory updates",
        "Role-based access control",
        "Priority support",
        "Audit logs & compliance",
        "Custom dashboards per role",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: null,
      yearlyPrice: null,
      customPricing: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "All Professional features",
        "Custom integrations",
        "Advanced security features",
        "Multi-location support",
        "Custom workflows",
        "API access",
        "Dedicated account manager",
        "On-premise deployment option",
        "24/7 phone support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const getPrice = (plan) => {
    if (plan.customPricing) return plan.customPricing;
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    return `$${price}`;
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50"
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
            Simple, Transparent
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. No hidden fees, no
            surprises. Start with a 14-day free trial on any plan.
          </p>

          {/* Pricing Toggle */}
          <div className="inline-flex bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                !isYearly
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                isYearly
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                plan.popular
                  ? "border-blue-200 ring-2 ring-blue-500/20 scale-105"
                  : "border-white/20"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    {getPrice(plan)}
                  </span>
                  <span className="text-xl text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
                {isYearly && !plan.customPricing && (
                  <p className="text-sm text-green-600 mt-2">
                    Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-xl font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-gray-100 hover:bg-gray-700 text-gray-900 hover:text-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2 text-green-500" />
              99.9% Uptime SLA
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              24/7 Support
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
