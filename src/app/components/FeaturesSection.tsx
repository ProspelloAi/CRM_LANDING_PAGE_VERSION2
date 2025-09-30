"use client";

import { useEffect, useRef, useState } from "react";
import {
  Users,
  TrendingUp,
  CheckCircle,
  Smartphone,
  Shield,
  Clock,
  FileText,
  Eye,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "Smart Sales Automation",
      description:
        "Automate your funnel, track leads, and forecast revenue with ease.",
      benefits: [
        "Lead intelligence",
        "Pipeline tracking",
        "Revenue projections",
      ],
      badge: "Boost Conversions",
      accent: "from-indigo-500 to-blue-500",
    },
    {
      icon: Users,
      title: "Unified Customer Profiles",
      description:
        "Get a 360° view of your customers with real-time updates and notes.",
      benefits: ["Segmentation", "Interaction logs", "Real-time updates"],
      badge: "Know Your Clients",
      accent: "from-pink-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "Mobile CRM Access",
      description: "Manage deals and reports on-the-go, even offline.",
      benefits: ["Offline support", "Responsive UI", "Push notifications"],
      badge: "Work Anywhere",
      accent: "from-green-400 to-teal-500",
    },
    {
      icon: FileText,
      title: "Custom Reports",
      description: "Export live dashboards and professional reports instantly.",
      benefits: ["Live metrics", "PDF/CSV export", "Team visibility"],
      badge: "Instant Insights",
      accent: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Enterprise-grade Security",
      description: "Protect data with encryption, RBAC, and full audit logs.",
      benefits: ["Bank-level encryption", "Role-based access", "Audit trails"],
      badge: "Fully Secure",
      accent: "from-purple-500 to-indigo-500",
    },
    {
      icon: Clock,
      title: "Smart Reminders",
      description:
        "Automatic notifications for follow-ups, renewals, and overdue tasks.",
      benefits: ["Custom triggers", "Timely nudges", "No missed tasks"],
      badge: "Stay On Track",
      accent: "from-teal-400 to-blue-400",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gray-50 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-16 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-24 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-600 font-semibold text-xl">
              CRM That Scales With You
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Everything You Need to
            <br />
            <span className="text-indigo-600">Streamline Your Growth</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Manage sales, clients, and workflows in an intuitive dashboard — no
            clutter, no complexity.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              <div
                className={`absolute -inset-1 bg-blue-500 ${feature.accent} opacity-10 blur-2xl rounded-3xl group-hover:opacity-20 transition-all duration-300`}
              />
              <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`p-3 bg-blue-500 ${feature.accent} text-white rounded-xl shadow-md`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-700 space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`inline-flex items-center space-x-2 px-4 py-2 bg-blue-500 ${feature.accent} text-white rounded-full text-xs font-medium shadow`}
                >
                  <Eye className="w-4 h-4" />
                  <span>{feature.badge}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
