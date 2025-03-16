"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = ["All", "Development", "Design"];

const projects = [
  {
    id: 1,
    title: "Annonymous Chat App",
    category: "Development & Design",
    year: "2024",
    image: "/p1.png",
    href: "/projects/aora",
  },
  {
    id: 2,
    title: "Online Banking App",
    category: "Development & Design",
    year: "2024",
    image: "/p2.png",
    href: "/projects/code-screenshot",
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Development & Design",
    year: "2022",
    image: "/p4.png",
    href: "/projects/code-screenshot",
  },
  {
    id: 4,
    title: "Sage Ai",
    category: "Development & Design",
    year: "2024",
    image: "/p33.png",
    href: "/projects/code-screenshot",
  },


];

export function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project =>
        project.category.includes(activeCategory)
      );

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0B0B0D]">
      <div className="container-custom">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-xs font-bold">✓</span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground uppercase tracking-wide text-sm font-medium"
            >
              My Work
            </motion.h2>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-heading text-black dark:text-white"
          >
            Creating next level digital products
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-2 mt-8 "
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full ${
                  activeCategory === category
                    ? "bg-white text-black hover:bg-gray-200 "
                    : "text-black dark:text-white border-gray-700 hover:bg-black/30 shadow-md"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Link href={project.href} className="block group">
                <div className="overflow-hidden rounded-2xl bg-white dark:bg-[#0B0B0D] p-4">
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full rounded-3xl h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-4 pb-2">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm text-muted-foreground">
                        {project.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button variant="outline" className="rounded-full border-gray-700 hover:bg-black/30">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
