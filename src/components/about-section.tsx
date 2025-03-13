"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="about" className="py-20 bg-white dark:bg-background">
      <div className="container-custom">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">👋</span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground uppercase tracking-wide text-sm font-medium"
            >
              About Me
            </motion.h2>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-heading text-foreground dark:text-foreground"
          >
            My Journey & Experience
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/public/dp.jpg"
                alt="Devraj Chatribin"
                width={600}
                height={600}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-muted dark:bg-muted rounded-lg z-[-1]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground">Software Engineer & UI/UX Designer</h3>
            
            <p className="text-muted-foreground dark:text-muted-foreground mb-6">
              With over 5 years of experience in software engineering and design, I'm passionate
              about creating intuitive and engaging digital experiences. My expertise spans
              frontend and backend development, with a special focus on user interface design.
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-foreground dark:text-foreground">My expertise includes:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground dark:text-muted-foreground">
                  <span className="mr-2">→</span> 
                  Frontend development with React, Next.js, and TypeScript
                </li>
                <li className="flex items-center text-muted-foreground dark:text-muted-foreground">
                  <span className="mr-2">→</span> 
                  UI/UX design using Figma and Adobe Creative Suite
                </li>
                <li className="flex items-center text-muted-foreground dark:text-muted-foreground">
                  <span className="mr-2">→</span> 
                  Backend development with Node.js and Java
                </li>
                <li className="flex items-center text-muted-foreground dark:text-muted-foreground">
                  <span className="mr-2">→</span> 
                  Responsive and accessible web development
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button>Download CV</Button>
              <Button variant="outline">View LinkedIn</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
