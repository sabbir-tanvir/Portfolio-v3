"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth",
    content: "Working with this team transformed our digital presence. The attention to detail and creative approach exceeded our expectations.",
    avatar: "https://web-assets.same.dev/789654123/profile1.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    content: "From concept to execution, they delivered excellence. Our web application not only looks stunning but performs flawlessly.",
    avatar: "https://web-assets.same.dev/123456789/profile2.jpg",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Product Manager",
    company: "DesignSphere",
    content: "The team's ability to translate complex requirements into intuitive designs made all the difference in our product launch.",
    avatar: "https://web-assets.same.dev/456789123/profile3.jpg",
  },
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white dark:bg-[#0B0B0D] border-t border-border">
      <div className="container-custom">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-5 h-5 rounded-full bg-white dark:bg-[#0B0B0D] flex items-center justify-center">
                <span className="text-xs font-bold text-white">★</span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground dark:text-muted-foreground uppercase tracking-wide text-sm font-medium"
            >
              Testimonials
            </motion.h2>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-heading text-foreground dark:text-foreground"
          >
            What Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1  bg-white dark:bg-[#0B0B0D] lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[400px] bg-white dark:bg-[#0B0B0D] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white dark:bg-[#151414] "></div>
            <Image 
              src="https://web-assets.same.dev/951753852/testimonial-bg.jpg"
              alt="Client testimonials"
              fill
              className="object-cover"
            />
          </motion.div>

          <div  className=" bg-white dark:bg-[#0B0B0D]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: index === activeIndex ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(index)}
                className={`mb-6 p-6 border rounded-xl cursor-pointer transition-all ${
                  index === activeIndex 
                    ? "border-foreground dark:border-foreground bg-white dark:bg-[#0B0B0D]" 
                    : "border-border dark:border-border"
                }`}
              >
                <div className="flex items-center  gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden  relative">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground dark:text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-foreground dark:text-foreground leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
