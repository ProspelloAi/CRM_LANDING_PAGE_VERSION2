"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: "Salesforce", domain: "salesforce.com" },
    { name: "HubSpot", domain: "hubspot.com" },
    { name: "Mailchimp", domain: "mailchimp.com" },
    { name: "Slack", domain: "slack.com" },
    { name: "Zapier", domain: "zapier.com" },
    { name: "Google", domain: "google.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Zoom", domain: "zoom.us" },
  ];

  useEffect(() => {
    if (!listRef.current || !containerRef.current) return;

    const list = listRef.current;
    const items = list.children as HTMLCollectionOf<HTMLElement>;
    const itemCount = items.length / 2;
    const itemWidth = items[0].offsetWidth;
    const gap = 32;
    const totalWidth = itemCount * (itemWidth + gap) - gap;

    Array.from(items).forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      list.appendChild(clone);
    });

    gsap.to(list, {
      x: -totalWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    return () => {
      gsap.killTweensOf(list);
    };
  }, []);

  const getLogoUrl = (domain: string) => {
    return `https://logo.dev/v1/logos/${domain}`;
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-8">
            Trusted by companies all over the world
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="perspective-1000 overflow-hidden relative"
          style={{ perspective: "1000px" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>

          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

          <div ref={listRef} className="flex items-center whitespace-nowrap">
            {[...Array(2)].map((_, row) =>
              partners.map((partner) => (
                <motion.div
                  key={`${partner.name}-${row}`}
                  className="flex items-center justify-center flex-shrink-0 mx-2"
                  whileHover={{
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-blue-50 relative">
                    <Image
                      src={getLogoUrl(partner.domain)}
                      alt={`${partner.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain rounded"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement!;
                        parent.innerHTML = partner.name.charAt(0);
                        parent.classList.add(
                          "text-gray-600",
                          "font-bold",
                          "hover:text-blue-600"
                        );
                      }}
                    />
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
