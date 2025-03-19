import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ContactCTA } from "@/components/contact-cta";
import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectDetail } from "@/components/project-detail";

// Define TypeScript types for page props
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default async function Page({ params }: PageProps) {
  
  const { slug } = await params
  
  const project = getProjectBySlug(slug);
  const currentProject = projects.find((p) => p.slug === slug);

  if (!project || !currentProject) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0B0D]">
      <Navbar />
      <main className="flex-1">
        <section className="pt-10 bg-gray-50 dark:bg-[#0B0B0D]">
          <div className="container-custom">
            <ProjectDetail
              project={project}
              currentProject={currentProject}
              projects={projects}
            />
          </div>
          <ContactCTA />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}