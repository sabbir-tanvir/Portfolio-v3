"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ContactCTA } from "@/components/contact-cta";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const categories = ["All", "Development", "Design"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project =>
        project.category.includes(activeCategory)
      );

  // Handler for external links
  const handleExternalLinkClick = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0B0D]">
      <Navbar />
      
      <main className="flex-1">
        <section className="pt-10 bg-gray-50 dark:bg-[#0B0B0D]">
          <div className="container-custom">
            <div className="pt-28 pb-16">
              {/* Hero section */}
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
                    className={`rounded-full ${activeCategory === category
                      ? ""
                      : "border-border"
                      }`}
                  >
                    {category}
                  </Button>
                ))}
              </motion.div>
            </div>
              
              {/* Projects grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="block group relative">
                      <div className="overflow-hidden rounded-2xl min-h-[315px] border-b dark:bg-[#0B0B0D] p-4">
                          <GlowingEffect
                            spread={80}
                            glow={true}
                            disabled={false}
                            proximity={100}
                            inactiveZone={1.01}
                          />
                          <div 
                            className="overflow-hidden rounded-3xl cursor-pointer" 
                            onClick={() => window.location.href = `/projects/${project.slug}`}
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={600}
                              height={400}
                              className="w-full overflow-hidden rounded-lg h-auto object-cover border shadow-lg transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        
                        <div className="pt-4 pb-1">
                          <div className="flex justify-between items-center">
                            <h3 
                              className="text-xl font-medium cursor-pointer" 
                              onClick={() => window.location.href = `/projects/${project.slug}`}
                            >
                              {project.title}
                            </h3>
                            <div className="flex gap-2">
                              <button 
                                onClick={(e) => handleExternalLinkClick(e, project.githubUrl)}
                                className="p-2 rounded-full text-black bg-[#FFE3CD] shadow-md dark:bg-violet-400 hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors"
                                aria-label="View GitHub repository"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                              </button>
                              <button 
                                onClick={(e) => handleExternalLinkClick(e, project.liveUrl)}
                                className="p-2 rounded-full bg-blue-100 text-black shadow-md dark:bg-gray-200 hover:bg-gray-100 dark:hover:bg-blue-100 transition-colors flex items-center gap-1"
                                aria-label="View live project"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg>
                                <span className="text-xs font-medium">Live</span>
                              </button>
                            </div>
                          </div>
                          
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
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <ContactCTA />
          <Footer />
        </section>
      </main>
    </div>
  );
}
