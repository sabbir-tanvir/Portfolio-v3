"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LampContainer } from "../components/ui/lamp";

export function ContactCTA() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-10 bg-gray-50 dark:bg-[#0B0B0D]">
      <div className="container-custom">
        <div className="rounded-3xl relative bg-transparent dark:bg-transparent shadow-md overflow-hidden">
          {/* Lamp container as background */}
          <LampContainer className="absolute inset-0 w-full h-full">
            <div className="h-full w-full">
              {/* Empty container to render lamp effect */}
            </div>
          </LampContainer>
          
          {/* Content div with transparent background */}
          <div className="relative z-10 py-16 px-8 md:px-16 text-center bg-transparent">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-200 dark:text-white "
            >
              Ready to Start Your
              <br />
              Next Project?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Link href="/contact">
                <Button className="rounded-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 px-8 py-6 text-lg">
                  Contact Me
                </Button>
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
