import Image from "next/image";
import Link from "next/link";
import  Navbar  from "../navbar";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";


export default function AoraProject() {
  return (
    <main className="pb-20">
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="flex flex-col md:flex-row items-start gap-4 mb-4">
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

          <div className="flex-1" />

        </div>

        <div className="w-full relative rounded-lg overflow-hidden mb-8 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-border">
          <div className="p-6 md:p-8 flex flex-col lg:flex-row items-center">
            <div className="flex-1 mb-6 lg:mb-0 lg:pr-8">
              <div className="w-20 h-20 mb-4 relative">
                <Image
                  src="/assets/aora-logo.svg"
                  alt="Aora Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Aora</h1>
              <p className="text-sm md:text-base text-foreground/70 max-w-xl">
                A Video Sharing App
              </p>
            </div>
            <div className="w-full lg:w-[400px]">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-border">
                <Image
                  src="https://ext.same-assets.com/2027456025/3813622030.png"
                  alt="Aora App Mockup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4">Aora</h2>
            <p className="text-foreground/70 mb-8">
              The Video Sharing App is an engaging platform that empowers users to connect through
              video content. It allows users to seamlessly upload, view, and share videos with others in
              the app's community, fostering creativity and interaction.
            </p>

          </div>

          <div className="col-span-1">
            <Card className="p-6 border-border">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground/70">Roles:</h3>
                  <p className="text-foreground">App Developer</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-foreground/70">Client:</h3>
                  <p className="text-foreground">Personal Project</p>
                </div>

                <Button className="w-full" asChild>
                  <Link href="https://github.com/DevrajDC/aora-react-native" target="_blank">
                    Check it out
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
                      className="ml-1"
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

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-foreground/70 mb-8">
            Built using React Native, this app delivers a fast, responsive, and platform-agnostic experience, making it accessible across Android and iOS devices. By leveraging the power of modern video streaming technologies, the app ensures smooth playback and minimal buffering, even on low-bandwidth networks.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Design Screens</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-border overflow-hidden">
              <div className="aspect-[9/16] relative bg-black/40">
                <Image
                  src="https://ext.same-assets.com/630003648/849522504.png"
                  alt="Onboarding Screen"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Onboarding</h3>
              </div>
            </Card>

            <Card className="border-border overflow-hidden">
              <div className="aspect-[9/16] relative bg-black/40">
                <Image
                  src="https://ext.same-assets.com/3788114900/3296644274.png"
                  alt="Signup Screen"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Signup</h3>
              </div>
            </Card>

            <Card className="border-border overflow-hidden">
              <div className="aspect-[9/16] relative bg-black/40">
                <Image
                  src="https://ext.same-assets.com/2976939711/1855347220.png"
                  alt="Login Screen"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Login</h3>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-border overflow-hidden">
              <div className="aspect-[9/16] relative bg-black/40">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-end p-4">
                  <h3 className="text-white font-medium">Home</h3>
                </div>
              </div>
            </Card>

            <Card className="border-border overflow-hidden">
              <div className="aspect-[9/16] relative bg-black/40">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-end p-4">
                  <h3 className="text-white font-medium">Search</h3>
                </div>
              </div>
            </Card>

            <Card className="border-border overflow-hidden">
              <div className="aspect-[9/16] relative bg-black/40">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-end p-4">
                  <h3 className="text-white font-medium">Profile</h3>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <ul className="space-y-2 text-foreground/70 list-disc pl-5 mb-8">
            <li>React Native</li>
            <li>Expo</li>
            <li>Nativewind</li>
            <li>Animatable</li>
            <li>Appwrite</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Onboarding Screen</h3>
                  <p className="text-foreground/70 text-sm">
                    Engaging graphics and clear instructions welcome users to the app.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Robust Authentication & Authorization System</h3>
                  <p className="text-foreground/70 text-sm">
                    Secure email login safeguards user accounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Dynamic Home Screen with Animated Flat List</h3>
                  <p className="text-foreground/70 text-sm">
                    Smoothly animated flat list showcases the latest videos for seamless browsing.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Pull-to-Refresh Functionality</h3>
                  <p className="text-foreground/70 text-sm">
                    Users can refresh content with a simple pull gesture for up-to-date information.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Full-Text Search Capability</h3>
                  <p className="text-foreground/70 text-sm">
                    Efficiently search through videos with real-time suggestions and instant results.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Tab Navigation</h3>
                  <p className="text-foreground/70 text-sm">
                    Navigate between sections like Home, Search, and Profile with ease using tab navigation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Post Creation Screen for Uploading Media</h3>
                  <p className="text-foreground/70 text-sm">
                    Upload video and image posts directly from the app with integrated media selection.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Profile Screen with Detailed Insights</h3>
                  <p className="text-foreground/70 text-sm">
                    View account details and activity, including uploaded videos and follower count, for a personalized experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Responsiveness</h3>
                  <p className="text-foreground/70 text-sm">
                    Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-4 h-4 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">Animations</h3>
                  <p className="text-foreground/70 text-sm">
                    Dynamic animations using the Animatable library to enhance user interaction and engagement throughout the app's UI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-between items-center">
          <div></div>
          <Link
            href="/projects/code-screenshot"
            className="flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Next
            <div className="ml-1 w-5 h-5 bg-muted rounded flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
            <span className="ml-2">Code Screenshot</span>
          </Link>
        </div>
      </div>

    </main>
  );
}
