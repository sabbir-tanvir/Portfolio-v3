"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectNavigation } from "@/components/project-navigation";
import { Project, ProjectFeature } from "@/data/projects"; // Import types from data source
import { useEffect, useRef, useState } from "react";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { EnhancedGallery } from "@/components/ui/enhanced-gallery";

// Badge component for tech stack
const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mr-2 mb-2">
      {children}
    </span>
  );
};

// Updated interface with proper types
interface ProjectDetailProps {
  project: Project; 
  currentProject: Project; 
  projects: Project[]; 
}

export function ProjectDetail({ project, currentProject, projects }: ProjectDetailProps) {
  // Lazy loaded video implementation
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // Background video reference
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [isBgVideoLoaded, setIsBgVideoLoaded] = useState(false);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Set up intersection observer for lazy loading
  useEffect(() => {
    if (!project.demoUrl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVideoVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // Load video when it's 100px from viewport
        threshold: 0.1,
      }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [project.demoUrl]);

  // Ensure background video plays when component mounts
  useEffect(() => {
    const bgVideoElement = bgVideoRef.current;
    if (bgVideoElement) {
      // Try to play the background video
      const playPromise = bgVideoElement.play();
      
      // Handle promise to catch any autoplay restrictions
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
          })
          .catch(error => {
            // Autoplay was prevented, handle as needed
            console.log("Background video autoplay prevented:", error);
          });
      }
    }
  }, []);

  // Handle video loading event
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  // Handle background video loaded event
  const handleBgVideoLoaded = () => {
    setIsBgVideoLoaded(true);
  };

  // Handle play on hover or click
  const handlePlayVideo = () => {
    if (videoRef.current && isVideoVisible && !isVideoLoaded) {
      videoRef.current.load();
      setIsVideoLoaded(true);
    }
  };

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-28 pb-16">
      {/* Image Lightbox */}
      <ImageLightbox 
        images={project.previewImages}
        initialIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

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
          <Link href="/contact">{project.year}</Link>
        </Button>
      </div>

      {/* Hero section with background video */}
      <div className="w-full relative rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-gray-600/90 to-purple-900/90 dark:bg-gradient-to-r dark:from-gray-600/90 dark:to-purple-900/90 border border-border">
        {/* Background video */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Video element - displays project-specific background video */}
          <video
            ref={bgVideoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleBgVideoLoaded}
            className="object-cover w-full h-full opacity-30"
          >
            <source src={project.backgroundVideo || "/grocery/test.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100/20 to-gray-50/40 dark:from-[#0B0B0D]/70 dark:to-[#0B0B0D]/40 z-10"></div>
        </div>

        <div className="p-12 md:p-16 relative z-20 flex flex-col items-center justify-center min-h-[300px]">
          <span className="px-3 py-1 bg-primary/10 backdrop-blur-md text-white text-primary text-xs rounded-full mb-4">
            Web Application
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">{project.title}</h1>
          <p className="text-xl text-center text-white max-w-2xl text-foreground/80 mb-8">{project.subtitle}</p>

          {/* Action buttons */}
          <div className="flex gap-4 mt-2">
            <Button size="lg" className="group" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Live Demo</span>
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
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M7 7h10v10M7 17L17 7" />
                </svg>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <span>Source Code</span>
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
                >
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
            {project.description}
          </p>

          {/* Overview section */}
          <h3 className="text-xl font-semibold mb-4 mt-8">Overview</h3>
          <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
            {project.overview}
          </p>

        </div>

        <div className="col-span-1">
          <Card className="p-6 border-border bg-card/50 backdrop-blur-sm sticky top-24">
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-medium text-foreground/70 mb-2 uppercase tracking-wider">Role:</h3>
                <p className="text-foreground font-medium">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground/70 mb-2 uppercase tracking-wider">Client:</h3>
                <p className="text-foreground font-medium">{project.client}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground/70 mb-2 uppercase tracking-wider">Year:</h3>
                <p className="text-foreground font-medium">{project.year}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground/70 mb-2 uppercase tracking-wider">Tech Stack:</h3>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech: string, index: number) => (
                    <Badge key={index}>{tech}</Badge>
                  ))}
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

        {/* Enhanced Gallery Component */}
        <EnhancedGallery 
          images={project.previewImages}
          title={project.title}
        />

        {/* Project videos */}
        {project.demoUrl && (
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="h-5 w-1 bg-primary rounded-full"></span>
              Project Demo
            </h2>
            <div 
              ref={videoContainerRef} 
              className="rounded-xl overflow-hidden border border-border relative group"
              onClick={handlePlayVideo}
              onMouseEnter={handlePlayVideo}
            >
              {/* Placeholder thumbnail before video loads */}
              {!isVideoLoaded && (
                <div className="aspect-video w-full relative bg-black/10 flex items-center justify-center cursor-pointer">
                  {project.previewImages && project.previewImages[0] && (
                    <Image
                      src={project.previewImages[0]}
                      alt={`${project.title} demo thumbnail`}
                      fill
                      className="object-cover opacity-80"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                        stroke="currentColor"
                        className="text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  <p className="absolute bottom-4 left-4 text-white text-lg font-medium">Click to play demo</p>
                </div>
              )}
              
              {/* Video element (loads when visible) */}
              <video 
                ref={videoRef}
                controls 
                className={`w-full transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0 h-0'}`}
                preload="none"
                poster={project.previewImages[0]}
                onLoadedData={handleVideoLoaded}
              >
                {isVideoVisible && <source src={project.demoUrl} type="video/mp4" />}
                Your browser does not support the video tag.
              </video>
              
              <div className="p-4 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-medium">Project Demonstration</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Watch a walkthrough of the {project.title} project showing the key features in action.
                </p>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* How it's built section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="h-5 w-1 bg-primary rounded-full"></span>
          How It's Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.implementation.frontend && (
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-foreground/70">
                {project.implementation.frontend.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.implementation.backend && (
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-foreground/70">
                {project.implementation.backend.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.implementation.deployment && (
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Deployment</h3>
              <ul className="space-y-2 text-foreground/70">
                {project.implementation.deployment.map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="h-5 w-1 bg-primary rounded-full"></span>
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.features.map((feature: ProjectFeature, index: number) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectNavigation currentProject={currentProject} projects={projects} />
    </div>
  );
}