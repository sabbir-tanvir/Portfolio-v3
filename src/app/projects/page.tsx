"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/contact-cta";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { title } from "process";

const categories = ["All", "Development", "Design"];

const projects = [
  {
    title: "Annonymous Chat App",
    category: "Development & Design",
    year: "2024",
    image: "/p1.png",
    href: "/projects/sendme",
  },
  {
    title: "Portfolio Website",
    category:"Development & Design",
    year: "2022",
    image: "/p4.png",
    href:"prooject/portfolio"
  },
  {
    title: "Online Banking App",
    category: "Development & Design",
    year: "2024",
    image: "/p2.png",
    href: "/projects/aora",
  },
  {
    title: "Sage AI Assistant",
    category: "Development & Design",
    year: "2024",
    image: "/p3.png",
    href: "/projects/aora",
  },
  {
    title: "Sage AI Assistant",
    category: "Development & Design",
    year: "2024",
    image: "/p33.png",
    href: "/projects/aora",
  },
  {
    title: "E-commerce Platform",
    category: "Development & Design",
    year: "2024",
    image: "/p1.png",
    href: "/projects/aora",
  },
  {
    title: "Task Management Tool",
    category: "Development & Design",
    year: "2024",
    image: "/p2.png",
    href: "/projects/aora",
  },
  {
    title: "Social Media Dashboard",
    category: "Development & Design",
    year: "2024",
    image: "/p3.png",
    href: "/projects/aora",
  },
  {
    title: "Health Monitoring App",
    category: "Development & Design",
    year: "2024",
    image: "/p33.png",
    href: "/projects/aora",
  },
  {
    title: "Portfolio Generator",
    category: "Development & Design",
    year: "2024",
    image: "/p2.png",
    href: "/projects/aora",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project =>
        project.category.includes(activeCategory)
      );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0B0D]">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 bg-gray-50 dark:bg-[#0B0B0D]">
          <div className="container-custom">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-muted-foreground uppercase tracking-wide text-sm font-medium"
                >
                  My Work
                </motion.h2>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="section-heading text-foreground"
              >
                Creating next level digital products
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-2 mt-8"
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full ${
                      activeCategory === category
                        ? ""
                        : "border-border"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
                >
                  <Link href={project.href} className="block group">
                    <div className="overflow-hidden rounded-2xl bg-card p-4 h-full border border-border">
                      <div className="overflow-hidden rounded-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="pt-4 pb-2">
                        <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
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
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
