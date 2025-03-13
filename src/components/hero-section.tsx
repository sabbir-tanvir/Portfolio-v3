"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, InstagramIcon, Linkedin, LinkedinIcon, MailIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40  bg-gray-50 dark:bg-[#0B0B0D]  md:pb-28">
      <div className="container-custom">
        <div className="space-y-9 max-w-3xl">
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

        </div>

        <div className="pt-20 mt-7 flex justify-between gap-4">

          <div className="w-3/5 ">
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-800"></hr>

          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground  text-sm max-w-2xl">
              I work with brands globally to build pixel-perfect, engaging, and accessible
              digital experiences that drive results and achieve business goals.
            </p>
          </motion.div>

        </div>

        <div className="">
          <motion.div

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex pt-8 gap-4 justify-between"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap   gap-4 pt-4"
            >
              <Link href="https://www.linkedin.com/in/sabbir-tanvir/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="shadow-md" ><LinkedinIcon></LinkedinIcon>LinkedIn</Button>
              </Link>
              <Link href="https://github.com/sabbir-tanvir" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="shadow-md" ><Github></Github>GitHub</Button>
              </Link>
              <Link href="https://www.instagram.com/sabbir_x_tanvir/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="shadow-md" ><InstagramIcon/>Instagram</Button>
              </Link>
              <Link href="mailto:sabbirmahmudtanvir@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="shadow-md" ><MailIcon>Gmail</MailIcon>Gmail</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <Link href="/about">
                <Button size="lg" className="rounded-full h-12 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-700 px-8 text-base">
                  Know me better
                </Button>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>


    </section>
  );
}
