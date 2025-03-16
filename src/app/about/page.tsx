"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/contact-cta";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const techSkills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚂" },
  { name: "MySQL", icon: "🐬" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "JWT", icon: "🔐" },
  { name: "AWS", icon: "☁️" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "Figma", icon: "🖌️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "GIT", icon: "📂" },
  { name: "Prisma", icon: "📂" }
];

const workExperience = [
  {
    title: "Founder and CEO",
    company: "Medihub",
    period: "Aug 2024 - Present",
    logo: "https://web-assets.same.dev/1579400925/849522504.jpeg",
  },
  {
    title: "Founder",
    company: "Send Me",
    period: "Jan 2023 - Present",
    logo: "/send.jpg",
  },
];

const designSteps = [
  {
    id: 1,
    title: "Strategize",
    description: "To create something awesome, one must first talk about the details. Planning is essential."
  },
  {
    id: 2,
    title: "Wireframe",
    description: "After hashing out the details of the website, it's easy to throw the ideas onto pen & paper."
  },
  {
    id: 3,
    title: "Design",
    description: "The most fun part of all - adding pizzaz to the wireframes and bringing it to life."
  },
  {
    id: 4,
    title: "Development",
    description: "The design may be final but it needs to be functional and practical. Development is key."
  },
  {
    id: 5,
    title: "Quality Assurance",
    description: "Website load times, SEO, file optimization, etc., weigh in to the quality of the site."
  }
];

const awards = [
  { title: "Star Performer of the Year", date: "May 2024" },
  { title: "Best Beginner Hack", date: "Apr 2024" },
  { title: "Sketch Webpage Contest Winner", date: "Nov 2021" },
  { title: "Best Space App Winner", date: "Sep 2023" },
];

const services = [
  {
    title: "Mentoring",
    description: "Get connected with a mentor that will help you pave your career path."
  },
  {
    title: "Opportunities",
    description: "Get Internships and Job opportunities and gain experience while you learn."
  },
  {
    title: "Free Resources",
    description: "Get Free resources related to Designing and Development from the community."
  },
  {
    title: "Help & Reviews",
    description: "Get your portfolio and projects reviewed by Industry experts and mentors."
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0B0D]">
      <Navbar />
      <main className="flex-1 pt-10">
        {/* Hero Section */}
        <section className="pt-10 pb-16 md:pt-32 md:pb-24 bg-gray-50 dark:bg-[#0B0B0D]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <div className="relative hover:scale-105 transition-transform duration-300 shadow-2xl w-full max-w-[500px] mx-auto aspect-square overflow-hidden rounded-t-md md:rounded-lg">
                  <Image
                    src="/dp3.jpg"
                    alt="Sabbir Tanvir"
                    fill
                    className="object-cover rounded-md "
                  />
                </div>
              </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2 relative "
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                  A <span className="text-[#90c797]">creative developer</span> & digital designer
                </h1>
                <p className="text-muted-foreground text-lg mb-8">
                  I collaborate with brands globally to design impactful, mission-focused websites
                  that drive results and achieve business goals.
                </p>
                <Link href="/resume" target="_blank">
                  <Button className="rounded-full bg-black text-white  dark:bg-white dark:text-black hover:bg-gray-700">
                    My Resume
                  </Button>
                </Link>
              </motion.div>



            </div>
          </div>
        </section>

        {/* Skills Showcase */}
        <section className="py-3 bg-gray-50 dark:bg-[#0B0B0D] overflow-hidden">
          <div className="container-custom">
            <div className="relative">
              {/* Infinite Scrolling Animation - Right to Left */}
              <motion.div
                className="flex gap-4 flex-nowrap"
                initial={{ x: 0 }}
                animate={{ 
                  x: [10, -1920] 
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicated skills for seamless loop */}
                {[...techSkills, ...techSkills, ...techSkills].map((skill, index) => (
                  <div
                    key={`skill-${index}`}
                    className="px-5 py-3 bg-white shadow-md dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm flex items-center gap-2 flex-shrink-0 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-lg" aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-3 bg-gray-50 dark:bg-[#0B0B0D] overflow-hidden">
          <div className="container-custom">
            <div className="relative">
              {/* Infinite Scrolling Animation - Left to Right (opposite direction) */}
              <motion.div
                className="flex gap-4 flex-nowrap"
                initial={{ x: -1920 }}
                animate={{ 
                  x: [-1920, 0] 
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {/* Duplicated skills for seamless loop */}
                {[...techSkills, ...techSkills, ...techSkills].map((skill, index) => (
                  <div
                    key={`skill-reverse-${index}`}
                    className="px-5 py-3 bg-white shadow-md dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm flex items-center gap-2 flex-shrink-0 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-lg" aria-hidden="true">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work History */}
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
                  Work History
                </motion.h2>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-heading"
              >
                Experience
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-lg"
              >
                I have worked with some of the most innovative industry leaders to help build their top-notch products.
              </motion.p>
            </div>

            <div className="space-y-4">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="p-4 border border-gray-300 bg-white dark:bg-[#0B0B0D] rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 overflow-hidden relative flex-shrink-0">
                      <Image
                        src={job.logo}
                        alt={job.company}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">@{job.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{job.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="rounded-full border-gray-800 hover:bg-black/10">
                Show More
              </Button>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 bg-gray-50 dark:bg-[#0B0B0D]">
          <div className="container-custom">
            <div className="mb-16">
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
                  Steps I follow
                </motion.h2>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-heading"
              >
                My Development Process
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-lg"
              >
                I have worked with some of the most innovative industry leaders to help build their top-notch products.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designSteps.slice(0, 4).map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="p-6 bg-white dark:bg-[#151515] shadow-md rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-[#222222] flex items-center justify-center mb-4">
                    <span className="text-xl">{index === 0 ? "📊" : index === 1 ? "🖌️" : index === 2 ? "🎨" : "💻"}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-2">0{step.id}. {step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-gray-50 dark:bg-[#0B0B0D]">
          <div className="container-custom">
            <div className="mb-16">
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
                  Awards
                </motion.h2>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-heading"
              >
                Awards & Recognition
              </motion.h2>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="p-4 border-b border-gray-800 flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        {/* <section className="py-20 bg-[#0d0d0d]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
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
                    Community Work
                  </motion.h2>
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-6"
                >
                  Building a Tech Community
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground text-lg mb-8"
                >
                  I founded Design & Code which is a global community with a mission to connect designers and developers
                  to create a happy community eager to learn, innovate and grow together. We welcome all designers and
                  developers: beginners, intermediates, and experts willing to learn together. We encourage sharing
                  resources and learning experiences, organizing events, and providing feedback for our members to grow as they learn.
                </motion.p>

                <div className="flex flex-wrap gap-12 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold mb-1">5k+</div>
                    <div className="text-sm text-muted-foreground">Community Members</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold mb-1">25+</div>
                    <div className="text-sm text-muted-foreground">Events conducted</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold mb-1">4</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Link href="/community">
                    <Button className="rounded-full bg-white text-black hover:bg-gray-200">
                      Join Community
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="p-6 bg-[#151515] rounded-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#222222] flex items-center justify-center mb-4">
                      <span className="text-xl">
                        {index === 0 ? "👨‍🏫" : index === 1 ? "💼" : index === 2 ? "📚" : "🔍"}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
