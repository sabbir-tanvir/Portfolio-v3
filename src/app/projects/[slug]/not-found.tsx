import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#0B0B0D]">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container-custom py-28 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Project Not Found</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Sorry, the project you're looking for doesn't seem to exist. It might have been moved or removed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
