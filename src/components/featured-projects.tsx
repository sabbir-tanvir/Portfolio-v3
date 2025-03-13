"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "aora",
    title: "Aora",
    category: "Development",
    year: "2024",
    image: "https://web-assets.same.dev/1549414337/849522504.jpeg",
    href: "/projects/aora",
  },
  {
    id: "code-screenshot",
    title: "Code Screenshot",
    category: "Development & Design",
    year: "2024",
    image: "https://web-assets.same.dev/652882074/849522504.jpeg",
    href: "/projects/code-screenshot",
  },
  {
    id: "iphone-15-pro",
    title: "iPhone 15 Pro",
    category: "Development & Design",
    year: "2024",
    image: "https://web-assets.same.dev/2037933060/849522504.jpeg",
    href: "/projects/iphone",
  },
  {
    id: "ochi-design",
    title: "Ochi Design",
    category: "Development & Design",
    year: "2024",
    image: "https://web-assets.same.dev/55958492/849522504.jpeg",
    href: "/projects/ochi-design",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturedProjects() {
  return (
    <section className="section-wrapper bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            </div>
            <span className="uppercase tracking-wider">My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Projects</h2>
        </motion.div>

        <p className="text-muted-foreground mb-12 max-w-2xl">
          Here&apos;s a curated selection showcasing my expertise and the achieved results.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link href={project.href} className="group block overflow-hidden rounded-xl">
                <div className="relative overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-muted-foreground text-sm">{project.category}</p>
                    <p className="text-muted-foreground text-sm">{project.year}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button variant="outline" className="px-8">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
