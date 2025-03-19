"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge as LucideBadge } from "lucide-react";
import { ContactCTA } from "@/components/contact-cta";

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
   
      <main className="flex-1">
        <section className="pt-10 bg-gray-50 dark:bg-[#0B0B0D]">
          <div className="container-custom">
            <div className="pt-28 pb-16">
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

              {/* Hero section with improved layout */}
              <div className="w-full relative rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-border">
                <div className="absolute inset-0 bg-[url('/p1.png')] bg-cover bg-center opacity-20"></div>
                <div className="p-12 md:p-16 relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">Web Application</span>
                  <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Anonymous Messenger</h1>
                  <p className="text-xl text-center max-w-2xl text-foreground/80 mb-8">Private Messaging Platform</p>
                  
                  {/* Added checkout button in hero section similar to reference */}
                  <div className="flex gap-4 mt-2">
                    <Button size="lg" className="group" asChild>
                      <a href="https://anonymous-messenger-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>Live Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                          <path d="M7 7h10v10M7 17L17 7" />
                        </svg>
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="group" asChild>
                      <a href="https://github.com/DevrajDC/aora-react-native" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>Source Code</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                <div className="col-span-2">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="h-5 w-1 bg-primary rounded-full"></span>
                    About the Project
                  </h2>
                  <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                    This anonymous messaging application allows users to send and receive messages without revealing their identity. 
                    Built with privacy in mind, it enables candid communication in a secure environment while maintaining user anonymity throughout the experience.
                  </p>
                  
                  {/* Overview section */}
                  <h3 className="text-xl font-semibold mb-4 mt-8">Overview</h3>
                  <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                    Built using React and TypeScript on the frontend with MongoDB as the database, this application provides a seamless anonymous messaging experience. 
                    The RESTful API built with Node.js handles message encryption and user authentication while maintaining privacy. 
                    Axios is utilized for efficient API communication, ensuring fast message delivery without compromising user identity.
                  </p>
                </div>

                <div className="col-span-1">
                  <Card className="p-6 border-border bg-card/50 backdrop-blur-sm sticky top-24">
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

                      <div>
                        <h3 className="text-sm font-medium text-foreground/70 mb-2 uppercase tracking-wider">Tech Stack:</h3>
                        <div className="flex flex-wrap gap-1">
                          <Badge>React</Badge>
                          <Badge>TypeScript</Badge>
                          <Badge>MongoDB</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Design Screens Section */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="h-5 w-1 bg-primary rounded-full"></span>
                  Application Preview
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative rounded-xl overflow-hidden border border-border group transition-all duration-300 hover:shadow-xl">
                    <Image 
                      src="/p1.png"
                      alt="Login Screen"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"  
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-6 text-lg font-medium">Login Page</p>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden border border-border group transition-all duration-300 hover:shadow-xl">
                    <Image 
                      src="/p1.png"
                      alt="Dashboard View"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"  
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-6 text-lg font-medium">Message Dashboard</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How it's built section - New */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="h-5 w-1 bg-primary rounded-full"></span>
                  How It's Built
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        React for component-based UI
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        TypeScript for type safety
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Tailwind CSS for styling
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Axios for API requests
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-4">Backend</h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Node.js for server environment
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Express.js for API routing
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        MongoDB for data storage
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        JWT for authentication
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-semibold mb-4">Deployment</h3>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Vercel for frontend hosting
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        MongoDB Atlas for database
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Render for backend API
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        GitHub Actions for CI/CD
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Key Features Section - Restructured */}
              <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="h-5 w-1 bg-primary rounded-full"></span>
                  Key Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Feature items with improved design */}
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">Secure Authentication</h3>
                        <p className="text-foreground/70">
                          Identity protection with advanced security protocols while maintaining anonymity. Users can create accounts without revealing personal information.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">Real-time Messaging</h3>
                        <p className="text-foreground/70">
                          Instant message delivery with real-time notifications for new messages. Messages appear instantly without requiring page refreshes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">Message Encryption</h3>
                        <p className="text-foreground/70">
                          End-to-end encryption ensures messages remain private and secure. Even server administrators cannot access message contents.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-3">Self-Destructing Messages</h3>
                        <p className="text-foreground/70">
                          Set messages to automatically delete after being viewed or after a set time period, enhancing privacy and security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mobile-friendly call-to-action */}
              <div className="my-16 p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 rounded-xl border border-primary/20">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Ready to try Anonymous Messenger?</h3>
                  <p className="text-foreground/70 mb-8">Experience secure, anonymous messaging today. No personal information required to get started.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="group" asChild>
                      <a href="https://anonymous-messenger-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>Try Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                          <path d="M7 7h10v10M7 17L17 7" />
                        </svg>
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="group" asChild>
                      <a href="https://github.com/DevrajDC/aora-react-native" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>View Repository</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

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

          </div>
          <ContactCTA />
          <Footer />
        </section>
      </main>
    </div>
  );
}
