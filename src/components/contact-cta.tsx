"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-white dark:bg-[#0B0B0D]">
      <div className="container-custom  ">
        <div className=" rounded-3xl relative bg-gray-100 dark:bg-[#151414] shadow-md">
          <div className="absolute inset-0">
            <div className="absolute inset-0 rounded-3xl  bg-gray-100  dark:bg-[#151414]"></div>
          </div>
          
          <div className="relative py-16 px-8 md:px-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl  font-bold mb-6 text-gray-900 dark:text-white"
            >
              Ready to Start Your
              <br />
               Next Project?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
