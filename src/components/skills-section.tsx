"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

// Skills data with SVG icons
const skills = {
  development: [
    { name: "HTML", icon: "https://web-assets.same.dev/78217643/217591868.svg+xml" },
    { name: "CSS", icon: "https://web-assets.same.dev/1341828058/2995331368.svg+xml" },
    { name: "JavaScript", icon: "https://web-assets.same.dev/4113258512/1719669137.svg+xml" },
    { name: "TypeScript", icon: "https://web-assets.same.dev/2764379727/4041370601.svg+xml" },
    { name: "React.js", icon: "https://web-assets.same.dev/12748071/790123477.svg+xml" },
    { name: "Next.js", icon: "https://web-assets.same.dev/3340211647/3944063439.svg+xml" },
    { name: "Angular", icon: "https://web-assets.same.dev/2923393652/1152211515.svg+xml" },
    { name: "Redux", icon: "https://web-assets.same.dev/4063534375/815600820.svg+xml" },
    { name: "Node.js", icon: "https://web-assets.same.dev/644144140/1626279228.svg+xml" },
    { name: "Express.js", icon: "https://web-assets.same.dev/1333414844/707090698.svg+xml" },
    { name: "MySQL", icon: "https://web-assets.same.dev/2375712067/1926415108.svg+xml" },
    { name: "MongoDB", icon: "https://web-assets.same.dev/3751239121/1614075837.svg+xml" },
    { name: "PostgreSQL", icon: "https://web-assets.same.dev/454654023/1122111850.svg+xml" },
    { name: "Cypress", icon: "" },
    { name: "Docker", icon: "" },
    { name: "Firebase", icon: "" },
    { name: "AWS", icon: "" },
    { name: "GSAP", icon: "" },
    { name: "Framer Motion", icon: "" },
    { name: "Figma", icon: "" },
    { name: "Tailwind CSS", icon: "" },
    { name: "GIT", icon: "" }
  ],
  design: [
    { name: "UI Design", icon: "" },
    { name: "UX Design", icon: "" },
    { name: "Wireframing", icon: "" },
    { name: "Prototyping", icon: "" },
    { name: "Design Systems", icon: "" },
    { name: "User Research", icon: "" },
    { name: "Accessibility", icon: "" },
    { name: "Visual Design", icon: "" },
    { name: "Figma", icon: "" },
    { name: "Adobe XD", icon: "" },
    { name: "Adobe Photoshop", icon: "" },
    { name: "Adobe Illustrator", icon: "" }
  ],
  branding: [
    { name: "Brand Strategy", icon: "" },
    { name: "Logo Design", icon: "" },
    { name: "Brand Identity", icon: "" },
    { name: "Brand Guidelines", icon: "" },
    { name: "Visual Identity", icon: "" },
    { name: "Typography", icon: "" },
    { name: "Color Theory", icon: "" },
    { name: "Marketing Collateral", icon: "" }
  ]
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("development");

  const imageUrls = {
    development: "https://web-assets.same.dev/2620351162/849522504.jpeg",
    design: "https://web-assets.same.dev/3737091799/849522504.jpeg",
    branding: "https://web-assets.same.dev/2101514413/849522504.jpeg",
  };

  return (
    <section className="py-20 bg-white dark:bg-[#0B0B0D]   border-border">
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
                <span className="text-xs font-bold text-white">✓</span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground dark:text-muted-foreground uppercase tracking-wide text-sm font-medium"
            >
              Speciality
            </motion.h2>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-heading text-foreground dark:text-foreground"
          >
            Creating Next Level Digital Products
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Accordion
              type="single"
              collapsible
              defaultValue="development"
              onValueChange={(value) => {
                if (value) setActiveTab(value);
              }}
            >
              <AccordionItem value="development" className="border-none mb-4">
                <AccordionTrigger className={`w-full justify-start text-left p-4 border rounded-lg no-underline ${
                  activeTab === "development" ? "border-foreground dark:border-foreground" : "border-border dark:border-border"
                }`}>
                  <div className="flex items-center text-lg font-semibold gap-2 text-foreground dark:text-foreground">
                    <span className="text-xl">💻</span>
                    <span>Development</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 px-2">
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-8 mt-2">
                    {skills.development
                      .filter(skill => skill.icon) // Only show skills with icons
                      .map((skill, index) => (
                        <div key={skill.name} className="flex flex-col items-center gap-2">
                          <div className="w-10 h-10 flex items-center justify-center">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-xs text-center text-foreground dark:text-foreground">{skill.name}</span>
                        </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="design" className="border-none mb-4">
                <AccordionTrigger className={`w-full justify-start text-left p-4 border rounded-lg no-underline ${
                  activeTab === "design" ? "border-foreground dark:border-foreground" : "border-border dark:border-border"
                }`}>
                  <div className="flex items-center text-lg font-semibold gap-2 text-foreground dark:text-foreground">
                    <span className="text-xl">🎨</span>
                    <span>UI/UX Design</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 px-2">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.design.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 text-sm bg-muted dark:bg-muted text-foreground dark:text-foreground rounded-full"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="branding" className="border-none">
                <AccordionTrigger className={`w-full justify-start text-left p-4 border rounded-lg no-underline ${
                  activeTab === "branding" ? "border-foreground dark:border-foreground" : "border-border dark:border-border"
                }`}>
                  <div className="flex items-center text-lg font-semibold gap-2 text-foreground dark:text-foreground">
                    <span className="text-xl">🔍</span>
                    <span>Branding</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-6 px-2">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skills.branding.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 text-sm bg-muted dark:bg-muted text-foreground dark:text-foreground rounded-full"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-full rounded-2xl overflow-hidden"
          >
            <Image
              src={imageUrls[activeTab as keyof typeof imageUrls]}
              alt={`${activeTab} skills`}
              fill
              className="object-cover transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
