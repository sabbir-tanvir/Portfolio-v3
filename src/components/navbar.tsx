"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // For handling hydration issues with theme
  useEffect(() => setMounted(true), []);

  // Handle scroll event for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-custom mx-auto h-16 flex items-center justify-center">
        <div 
          className={`transition-all duration-1000 ease-in-out w-full ${
            isScrolled 
              ? "max-w-[86%] lg:max-w-[50%] bg-background/80 backdrop-blur-lg border border-border rounded-full px-5 py-2" 
              : "max-w-full border border-transparent bg-transparent px-0 py-2"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-foreground">
              SABBIR
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-1 text-sm group transition-colors duration-500 ${
                    pathname === item.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {pathname === item.href ? (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400"></span>
                  ) : (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Theme toggle button */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full w-8 h-8 p-0 ml-2"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun size={16} className="text-yellow-400" />
                  ) : (
                    <Moon size={16} />
                  )}
                </Button>
              )}

              {/* Mobile menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="p-0">
                      <Menu size={20} />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="border-l border-gray-800">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-end mb-8">
                        <SheetTrigger asChild>
                          <Button variant="ghost" size="icon" className="p-0">
                            {/* <X size={20} /> */}
                          </Button>
                        </SheetTrigger>
                      </div>
                      <nav className="flex flex-col gap-6 text-lg">
                        {navItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`${
                              pathname === item.href
                                ? "text-foreground font-medium"
                                : "text-muted-foreground"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
