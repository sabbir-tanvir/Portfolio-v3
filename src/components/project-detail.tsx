"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectNavigation } from "@/components/project-navigation";
import { Project, ProjectFeature } from "@/data/projects"; // Import types from data source

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
  return (
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
          <Link href="/contact">{project.year}</Link>
        </Button>
      </div>

      {/* Hero section */}
      <div className="w-full relative rounded-lg overflow-hidden mb-12 bg-gradient-to-r from-pink-600/40 to-purple-900/10 dark:bg-gradient-to-r dark:from-gray-600/10 dark:to-purple-900/10 border border-border">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${project.previewImages[0]}')` }}
        ></div>
        <div className="p-12 md:p-16 relative z-10 flex flex-col items-center justify-center min-h-[300px]">
          <span className="px-3 py-1 bg-primary/10 backdrop-blur-md text-primary text-xs rounded-full mb-4">
            Web Application
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{project.title}</h1>
          <p className="text-xl text-center max-w-2xl text-foreground/80 mb-8">{project.subtitle}</p>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.previewImages.map((image: string, index: number) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden border border-border group transition-all duration-300 hover:shadow-xl"
            >
              <Image
                src={image}
                alt={`${project.title} Preview ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-6 text-lg font-medium">Screenshot {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
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
