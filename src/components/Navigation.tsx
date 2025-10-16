"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Image from "next/image";

import { Button } from "./ui/button";

const navLinks = [
  { href: "#knowledge", text: "Навички і знання" },
  { href: "#structure", text: "Структура курсу" },
  { href: "#timeline", text: "Таймлайн модулів" },
  { href: "#audience", text: "Для кого" },
  { href: "#teachers", text: "Викладачі" },
  { href: "#interview", text: "Інтерв'ю" },
];

import logo from "@/assets/logo.png"
import logoBlack from "@/assets/logo_black.png"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`w-full h-36 flex items-center justify-between px-24 py-16 font-mono fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background text-foreground shadow-md border-border rounded-br-lg rounded-bl-lg"
          : "bg-transparent text-white"
      }`}
    >
      
      {/* This is the changed line */}
      <Image src={scrolled ? logoBlack : logo} alt="Logo" />

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="font-medium text-lg uppercase space-x-4">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                href={link.href}
                className={`bg-transparent p-2 transition-colors duration-300 ${
                  `#${activeSection}` === link.href
                    ? "text-primary font-bold"
                    : "hover:text-primary/80"
                }`}
              >
                {link.text}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <a href="https://forms.gle/Cqax94UHrydS7tEq6">
        <Button className="uppercase py-6 px-12 rounded-xl hover:bg-white hover:text-primary cursor-pointer">Хочу на курс</Button>
      </a>
    </header>
  );
}