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
    siteName: "Sabbir Tanvir Portfolio",
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
