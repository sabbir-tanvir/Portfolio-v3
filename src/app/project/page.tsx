"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge as LucideBadge } from "lucide-react";

// Add a new Badge component for tech stack
const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mr-2 mb-2">
      {children}
    </span>
  );
};

export default function AoraProject() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0B0D]">
      <Navbar />
   
    <main  className="flex-1 ">
    <section className="pt-10 bg-gray-50 dark:bg-[#0B0B0D]">
      <div className=" container-custom">
      <div className=" pt-28 pb-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
          <Link
            href="/projects"
            className="flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Projects
          </Link>

          <Button variant={"ghost"} className="text-sm">
            <Link href="/contact">2024</Link>
          </Button>
        </div>

        {/* Improved hero section with proper background and overlay */}
        <div className="w-full relative rounded-lg overflow-hidden mb-8 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-border">
          <div className="absolute inset-0 bg-[url('/p1.png')] bg-cover bg-center opacity-20"></div>
          <div className="p-12 md:p-16 relative z-10 flex flex-col items-center justify-center min-h-[300px]">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">Web Application</span>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Anonymous Messenger</h1>
            <p className="text-xl text-center max-w-2xl text-foreground/80">Private Messaging Platform</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="h-5 w-1 bg-primary rounded-full"></span>
              About the Project
            </h2>
            <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
              This anonymous messaging application allows users to send and receive messages without revealing their identity. 
              Built with privacy in mind, it enables candid communication in a secure environment while maintaining user anonymity throughout the experience.
            </p>
          </div>

          <div className="col-span-1">
            <Card className="p-6 border-border bg-card/50 backdrop-blur-sm">
              <div className="space-y-5">
                <div>
                  <h3 className="text-sm font-medium text-foreground/70 mb-2 uppercase tracking-wider">Role:</h3>
                  <p className="text-foreground font-medium">Full-Stack Developer</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground/70 mb-2 uppercase tracking-wider">Client:</h3>
                  <p className="text-foreground font-medium">Personal Project</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground/70 mb-2 uppercase tracking-wider">Year:</h3>
                  <p className="text-foreground font-medium">2024</p>
                </div>

                <Button className="w-full mt-4 group" asChild>
                  <Link href="https://github.com/DevrajDC/aora-react-native" target="_blank" className="flex items-center justify-center">
                    <span>View Source Code</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="h-5 w-1 bg-primary rounded-full"></span>
            Overview
          </h2>
          <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
            Built using React and TypeScript on the frontend with MongoDB as the database, this application provides a seamless anonymous messaging experience. 
            The RESTful API built with Node.js handles message encryption and user authentication while maintaining privacy. 
            Axios is utilized for efficient API communication, ensuring fast message delivery without compromising user identity.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="h-5 w-1 bg-primary rounded-full"></span>
            Design Screens
          </h2>

          <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="relative rounded-xl overflow-hidden border border-border group transition-all duration-300 hover:shadow-xl">
              <Image 
                src="/p1.png"
                alt="Onboarding Screen"
                width={1200}
                height={720}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"  
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-6 text-lg font-medium">App Interface Showcase</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="h-5 w-1 bg-primary rounded-full"></span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap mb-8">
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge>MongoDB</Badge>
            <Badge>Node.js</Badge>
            <Badge>Express</Badge>
            <Badge>Axios</Badge>
            <Badge>Tailwind CSS</Badge>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="h-5 w-1 bg-primary rounded-full"></span>
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature items start */}
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">User-friendly Interface</h3>
                  <p className="text-foreground/70 text-sm">
                    Clean and intuitive design makes anonymous messaging simple for all users.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Secure Authentication</h3>
                  <p className="text-foreground/70 text-sm">
                    Identity protection with advanced security protocols while maintaining anonymity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Real-time Messaging</h3>
                  <p className="text-foreground/70 text-sm">
                    Instant message delivery with real-time notifications for new messages.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Message Encryption</h3>
                  <p className="text-foreground/70 text-sm">
                    End-to-end encryption ensures messages remain private and secure.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Self-Destructing Messages</h3>
                  <p className="text-foreground/70 text-sm">
                    Set messages to automatically delete after being viewed or after a set time period.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Customizable User Experience</h3>
                  <p className="text-foreground/70 text-sm">
                    Personalize your messaging experience with themes and notification preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
          <div></div>
          <Link
            href="/projects/code-screenshot"
            className="group flex items-center text-sm font-medium hover:text-primary transition-colors"
          >
            <span className="mr-2">Next Project: Code Screenshot</span>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
      </div>
      </section>
    </main>
    </div>
  );
}
