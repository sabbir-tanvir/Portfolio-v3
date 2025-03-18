"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "./ui/glowing-effect";

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
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#0B0B0D]">
      <div className="container-custom">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-5 h-5 rounded-full bg-green-300 flex items-center justify-center">
                <span className="text-xs font-bold text-white">🧑‍💻
                </span>
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
            My Journey 
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center "
          >
            <div className="rounded-xl p-1 relative group">
            
                <Image
                  src="/dp.jpg"
                  alt="Profile Picture"
                  width={450}
                  height={450}
                  className="rounded-lg  object-center "
                />
                <GlowingEffect
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={1.01}
                  />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-foreground">Software Engineer & UI/UX Designer</h3>
            
            <p className="text-muted-foreground dark:text-muted-foreground mb-6">
              With over 3 years of experience in software engineering and design, I'm passionate
              about creating intuitive and engaging digital experiences. My expertise spans
              frontend and backend development, with a special focus on user interface design.
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-xl mb-3 text-foreground dark:text-foreground">My expertise includes:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground dark:text-muted-foreground">
                  <span className="mr-2">→</span> 
                  Frontend development with Html, CSS, Javascript, React and Next.js
                </li>
                <li className="flex items-center text-muted-foreground dark:text-muted-foreground">
                  <span className="mr-2">→</span> 
                  UI/UX design using Figma
                </li>
                <li className="flex items-center text-muted-foreground dark:text-muted-foreground">
                  <span className="mr-2">→</span> 
                  Backend development with Node.js, Express.js, Docker, Prisma, MongoDB, PostgreSQL
                </li>
                <li className="flex items-center text-muted-foreground dark:text-muted-foreground">
                  <span className="mr-2">→</span> 
                  Responsive and accessible web development
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button>Download CV</Button>
              <Button variant="outline"><a href="https://www.linkedin.com/in/sabbir-tanvir/">View LinkedIn</a></Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
