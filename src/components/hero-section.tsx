"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40  bg-gray-50 dark:bg-[#0B0B0D]  md:pb-28">
      <div className="container-custom">
        <div className="space-y-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground text-lg">Hey! It&apos;s me Sabbir,</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Crafting{" "}
              <span className="text-[#90c797]">purpose driven experiences</span>{" "}
              that inspire & engage.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground  text-lg max-w-2xl">
              I work with brands globally to build pixel-perfect, engaging, and accessible
              digital experiences that drive results and achieve business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="https://www.linkedin.com/in/sabbir-tanvir/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">LinkedIn</Button>
            </Link>
            <Link href="https://github.com/sabbir-tanvir" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">GitHub</Button>
            </Link>
            <Link href="https://www.instagram.com/sabbir_x_tanvir/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">Instagram</Button>
            </Link>
            <Link href="mailto:sabbirmahmudtanvir@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">Gmail</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6"
          >
            <Link href="/about">
              <Button className="rounded-full bg-white text-black hover:bg-gray-200 px-6">
                Know me better
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
