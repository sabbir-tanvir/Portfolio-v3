"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Twitter",
      href: "https://twitter.com/example",
      icon: <Twitter size={16} />
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/example",
      icon: <Linkedin size={16} />
    },
    {
      label: "GitHub",
      href: "https://github.com/example",
      icon: <Github size={16} />
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-white dark:bg-[#0B0B0D] border-t border-border py-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="text-xl font-bold text-foreground dark:text-foreground mb-3 inline-block">
              Sabbir
            </Link>
            <p className="text-muted-foreground dark:text-muted-foreground text-sm mb-6 mt-2">
              Design beautiful experiences that make an impact.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-medium text-foreground dark:text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Right Aligned */}
          <div className="md:text-right">
            <h3 className="text-base font-medium text-foreground dark:text-foreground mb-4">
              Contact
            </h3>
            <p className="text-muted-foreground dark:text-muted-foreground mb-2">
              hello@example.com
            </p>
            <p className="text-muted-foreground dark:text-muted-foreground">
              San Francisco, CA
            </p>
          </div>
        </div>
        
        {/* Copyright - Bottom */}
        <div className="mt-12 pt-4 border-t border-border text-center">
          <p className="text-muted-foreground dark:text-muted-foreground text-sm">
            &copy; {currentYear} Sabbir Tanvir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
