"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Angular", "Redux", "Node.js", "Express.js", "MySQL", "MongoDB",
  "PostgreSQL", "Cypress", "Docker", "Firebase", "AWS", "GSAP",
  "Framer Motion", "Figma", "Tailwind CSS", "GIT"
];

export default function ExpertiseSection() {
  return (
    <section className="section-wrapper bg-muted/20 dark:bg-[#0d0d0d]">
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
            <span className="uppercase tracking-wider">Speciality</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Areas of Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="py-4 hover:no-underline bg-muted/20 rounded-md px-4 hover:bg-muted/40 transition-colors">
                  <div className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 11L12 8L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="text-base font-medium">Development</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 px-4">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1 bg-muted/20 rounded-full text-sm hover:bg-muted/40 transition-colors text-foreground"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger className="py-4 hover:no-underline bg-muted/20 rounded-md px-4 hover:bg-muted/40 transition-colors">
                  <div className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 13.5C8 13.5 9.5 15.5 12 15.5C14.5 15.5 16 13.5 16 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.5 10C9.05228 10 9.5 9.55228 9.5 9C9.5 8.44772 9.05228 8 8.5 8C7.94772 8 7.5 8.44772 7.5 9C7.5 9.55228 7.94772 10 8.5 10Z" fill="currentColor" />
                      <path d="M15.5 10C16.0523 10 16.5 9.55228 16.5 9C16.5 8.44772 16.0523 8 15.5 8C14.9477 8 14.5 8.44772 14.5 9C14.5 9.55228 14.9477 10 15.5 10Z" fill="currentColor" />
                    </svg>
                    <span className="text-base font-medium">UI/UX Design</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 px-4">
                    <p className="text-muted-foreground">Specializing in user experience design, interface design, and creating intuitive, visually appealing digital products that meet user needs and business goals.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="py-4 hover:no-underline bg-muted/20 rounded-md px-4 hover:bg-muted/40 transition-colors">
                  <div className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M12.0001 7.88867L12.0001 8.01389" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12.0001 15.9997V11.0132" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-base font-medium">Branding</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 px-4">
                    <p className="text-muted-foreground">Developing comprehensive brand identities, visual languages, and design systems that establish a strong, consistent presence across all customer touchpoints.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="relative h-[300px] md:h-auto rounded-xl overflow-hidden">
            <Image
              src="https://web-assets.same.dev/652882074/849522504.jpeg"
              alt="UI/UX Design"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
