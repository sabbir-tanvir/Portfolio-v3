import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectNavigationProps {
  currentProject: Project;
  projects: Project[];
}

export const ProjectNavigation = ({ currentProject, projects }: ProjectNavigationProps) => {
  // Find the indices of the current project
  const currentIndex = projects.findIndex(p => p.id === currentProject.id);
  
  // Determine previous and next projects
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
      {/* Previous project navigation */}
      {previousProject ? (
        <Link
          href={`/projects/${previousProject.slug}`}
          className="group flex items-center text-sm font-medium hover:text-primary transition-colors"
        >
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </div>
          <span className="ml-2">Previous Project: {previousProject.title}</span>
        </Link>
      ) : (
        <div></div> // Empty div for layout when no previous project
      )}

      {/* Next project navigation */}
      {nextProject ? (
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group flex items-center text-sm font-medium hover:text-primary transition-colors ml-auto"
        >
          <span className="mr-2">Next Project: {nextProject.title}</span>
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
      ) : (
        <div></div> // Empty div for layout when no next project
      )}
    </div>
  );
};
