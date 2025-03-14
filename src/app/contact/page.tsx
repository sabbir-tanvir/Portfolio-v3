"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Linkedin, Github, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    question: "What is your current role?",
    answer: "Im currently Building few project Hoping that might help the user and solve some real life problem ."
  },
  {
    question: "How much does it cost for a high performing website?",
    answer: "The cost varies depending on the project scope, complexity, and specific requirements. I offer tailored solutions that range from simple landing pages to complex web applications. Let's discuss your project needs to provide an accurate estimate."
  },
  {
    question: "How long will the work take from start to finish?",
    answer: "Project timelines depend on scope and complexity. Typically, smaller projects can be completed in 2-4 weeks, while larger projects may take 1-3 months. I provide detailed timelines during the initial consultation based on your specific requirements."
  },
  {
    question: "Are you available to join as full time?",
    answer: "I am currently focused on my role as a Software Engineer and running Design & Code. However, I'm always open to discussing exciting opportunities. Feel free to reach out with details about your company and position."
  }
];

const socialLinks = [
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/sabbir-tanvir/",
    label: "LinkedIn",
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/sabbir-tanvir",
    label: "GitHub",
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: "https://www.instagram.com/sabbir_x_tanvir/",
    label: "Instagram",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:sabbirmahmudtanvir@gmail.com",
    label: "Email",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https:/x.com/sabbir__tanvie",
    label: "Twitter",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send this data to your backend
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0B0D]">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-20 ">
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
                  Connect with me
                </motion.h2>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="section-heading"
              >
                Let&apos;s start a project together
              </motion.h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="dark:bg-[#0B0B0D] bg-white border-gray-800 h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="dark:bg-[#0B0B0D] bg-white border-gray-800 h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="dark:bg-[#0B0B0D] bg-white border-gray-800 min-h-[150px]"
                      required
                    />
                  </div>
                  <div>
                    <Button type="submit" className="rounded-full bg-white text-black hover:bg-gray-200 px-8">
                      Submit
                    </Button>
                  </div>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="dark:bg-[#17171b7a] bg-white p-6 h-[85%] mt-3  rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">Available for work</span>
                </div>

                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto">
                  <Image
                    src="/dp.jpg"
                    alt="Sabbir Tanvir"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-muted-foreground text-center mb-6">
                  My inbox is always open, Whether you have a project or just want to say Hi.
                  I would love to hear from you. Feel free to contact me and I&apos;ll get back to you.
                </p>

                <div className="flex justify-center gap-4 mb-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 dark:bg-[#0B0B0D] bg-gray-50">
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
                  FAQs
                </motion.h2>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="section-heading"
              >
                Have Questions?
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto "
            >
              <Accordion type="single" collapsible className="space-y-4 ">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-800 bg-white dark:bg-[#0B0B0D] rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline ">
                      <span className="text-base font-medium">
                        0{index + 1}. {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
