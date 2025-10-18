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
import order from "@/assets/order.png"
import kse from "@/assets/KSE.png"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

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
    <>
      <header
        className={`w-full h-20 md:h-36 flex items-center justify-between px-6 md:px-24 py-4 md:py-16 font-mono fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background text-foreground shadow-md border-border rounded-br-lg rounded-bl-lg"
            : "bg-transparent text-white"
        }`}
      >
        
        {/* Logo */}
        <Image src={scrolled ? kse : logo} alt="Logo" className="h-12 md:h-auto w-auto" />

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block">
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

        {/* Desktop CTA Button */}
        <a href="https://forms.gle/Cqax94UHrydS7tEq6" className="hidden lg:block">
          <Button className="uppercase py-6 px-12 rounded-xl hover:bg-white hover:text-primary cursor-pointer">
            Хочу на курс
          </Button>
        </a>

        {/* Mobile Burger Menu */}
        {!mobileMenuOpen && (
          <button
            className="lg:hidden flex flex-col gap-[6px] w-8 h-6 z-50"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <span className={`w-full h-[3px] ${scrolled ? 'bg-foreground' : 'bg-white'} transition-colors`}></span>
            <span className={`w-full h-[3px] ${scrolled ? 'bg-foreground' : 'bg-white'} transition-colors`}></span>
            <span className={`w-full h-[3px] ${scrolled ? 'bg-foreground' : 'bg-white'} transition-colors`}></span>
          </button>
        )}
      </header>

      {/* Mobile Menu - Full Screen */}
      <div
        className={`lg:hidden fixed inset-0 bg-primary z-[60] transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between px-6 py-6 h-[100px] border-b border-white/30 flex-shrink-0">
            <Image src={order} alt="Order" className="h-14 w-auto" />
            <Image src={kse} alt="KSE" className="h-[60%] w-auto" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col flex-shrink-0">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white font-bold text-xl uppercase px-6 py-6 hover:bg-white/5 transition-all"
                >
                  {link.text}
                </a>
                {index < navLinks.length - 1 && (
                  <div className="h-px bg-white/30 mx-3" />
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto px-6 pb-12 pt-8 space-y-6 flex-shrink-0">
            {/* Start Date */}
            <p className="text-white text-center text-xl font-normal">
              Старт навчання 18 жовтня
            </p>

            {/* CTA Button */}
            <a href="https://forms.gle/Cqax94UHrydS7tEq6" className="block px-20">
              <Button 
                variant="outline"
                className="w-full uppercase py-3 px-8 text-lg font-bold bg-transparent border-[1px] border-white text-white hover:bg-white hover:text-primary rounded-[10px] transition-all"
              >
                Хочу на курс
              </Button>
            </a>

            {/* Social Media Section */}
            <div className="pt-8">
              <h3 className="text-white text-center text-3xl font-black mb-4 tracking-wide">
                Наші соціальні мережі
              </h3>
              <p className="text-white text-center text-xl font-normal mb-10 leading-relaxed">
                Більше про гурток дізнавайся написавши нам у телеграм або на пошту
              </p>
              
              {/* Social Icons */}
              <div className="flex justify-center gap-8 pb-44">
                <a
                  href="mailto:contact@example.com"
                  className="w-24 h-24 rounded-full border-[1px] border-white flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white"
                  aria-label="Email"
                >
                  <span className="text-6xl font-black leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>M</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-24 rounded-full border-[1px] border-white flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white"
                  aria-label="Instagram"
                >
                  <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/yourgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-24 rounded-full border-[1px] border-white flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white"
                  aria-label="Telegram"
                >
                  <svg className="w-11 h-11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}