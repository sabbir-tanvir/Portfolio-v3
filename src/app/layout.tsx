import { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "./fonts.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sabbir Tanvir — Software Engineer ",
  description: "Discover a skilled Software Engineer, renowned for creating impactful software that achieves exceptional results.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sabbir Tanvir — Software Engineer ",
    description: "Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.",
    url: "https://sabbir-tanvir.netlify.app/",
    type: "website",
    images: [
      {
        url: "/dp3.jpg", // Path to image in public folder
        width: 1200,
        height: 630,
        alt: "Sabbir Tanvir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabbir Tanvir — Software Engineer",
    description: "Discover a skilled Software Engineer and UI/UX Designer, renowned for creating impactful software that achieves exceptional results.",
    images: ["/dp3.jpg"], // Already correctly referencing the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
