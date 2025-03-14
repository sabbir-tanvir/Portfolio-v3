"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowUp, ArrowUp01, ArrowUpFromDot, ArrowUpRightFromSquareIcon, Facebook, Github, Home, HomeIcon, icons, Linkedin, MailIcon, Twitter } from "lucide-react";

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
      href: "https://x.com/sabbir__tanvir",
      icon: <Twitter size={20} />
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/sabbir-tanvir",
      icon: <Linkedin size={20} />
    },
    {
      label: "GitHub",
      href: "https://github.com/sabbir-tanvir",
      icon: <Github size={20} />
    },
    {
      label: "Facebook",
      href: "https://github.com/sabbir-tanvir",
      icon: <Facebook size={20} />
    },
    {
      label: "GMail",
      href: "https://github.com/sabbir-tanvir",
      icon: <MailIcon size={20} />
    },
  ];

  const quickLinks = [
    { name: "Home",
      icon: <ArrowUpFromDot size={16} />,
       href: "/" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-[#0B0B0D] pb-10">
      <div className="container-custom">
        
        {/* Copyright - Bottom */}
        <div className="mt-10 flex justify-between pt-4 border-t border-border relative">
          <div>
          <p className="text-black dark:text-muted-foreground text-sm">
            &copy; {currentYear} Sabbir Tanvir. All rights reserved.
          </p>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer  ">
          {quickLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    href={link.href}
                  >
                    {link.icon}
                  </Link>
                </div>
              ))}

          </div>

          <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-muted-foreground hover:text-foreground dark:hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
