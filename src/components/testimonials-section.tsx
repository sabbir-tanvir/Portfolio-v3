"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Vritika Naik",
    position: "Regional Head @GirlScript",
    content:
      "I am amazed at Devraj's ability to create intriguing designs. At GirlScript, Devraj not only worked with graphic designing but also designed the UI and contributed to the front end of the website. His work ethics are immaculate. His deliveries were always very well executed before time.",
    image: "https://web-assets.same.dev/3794213157/849522504.jpeg",
  },
  {
    id: 2,
    name: "Amrit Raj",
    position: "Senior Developer @Ignite Solutions",
    content:
      "I had the pleasure of collaborating with Devraj on a project where his exceptional UI/UX skills truly shone. Devraj's design proficiency is remarkable, consistently delivering top-notch work that elevates user experiences. His creativity and keen eye for detail make him an admirable asset when it comes to design work.",
    image: "https://web-assets.same.dev/624887732/849522504.jpeg",
  },
  {
    id: 3,
    name: "Divya Walia",
    position: "Senior Java Developer @Nagarro",
    content:
      "I am writing to highly recommend Devraj for any Java fullstack role. I have had the pleasure of working with Devraj for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Devraj played a pivotal role in building the application.",
    image: "/testimonials/divya.jpg",
  },
  {
    id: 4,
    name: "Elavarasan Muthuvalavan",
    position: "Technical Lead @Ignite Solutions",
    content:
      "I had the pleasure of working alongside Devraj, who is an exceptional professional with an impressive command of Angular Templates, and CSS3. Beyond his technical prowess, what truly sets Devraj apart is his keen observational skills and ability to ask relevant questions that elevate the entire team.",
    image: "/testimonials/elavarasan.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 dark:bg-[#0B0B0D]">
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
              Testimonials
            </motion.h2>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            What others say
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#0f0f0f] border-gray-800 p-8 mb-6">
            <div className="flex gap-8 flex-col md:flex-row">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700">
                  {testimonials[currentIndex].image && (
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-gray-300">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-xl font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-between items-center">
            <div className="text-muted-foreground">
              {currentIndex + 1} / {testimonials.length}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full border-gray-800 hover:bg-gray-900"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full border-gray-800 hover:bg-gray-900"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
