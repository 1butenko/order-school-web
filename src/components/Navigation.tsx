"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

const navLinks = [
  { href: "#knowledge", text: "Навички і знання" },
  { href: "#structure", text: "Структура курсу" },
  { href: "#timeline", text: "Навчальні модулі" },
  { href: "#audience", text: "Для кого" },
  { href: "#teachers", text: "Викладачі" },
  { href: "#interview", text: "Інтерв'ю" },
];

import logo from "@/assets/logo.svg"
import logo_mobile from "@/assets/logo-main.svg"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const isOnboarding = pathname === "/onboarding";

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOnboarding) return; // Don't observe sections on onboarding page

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
  }, [isOnboarding]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    if (isOnboarding) {
      // Navigate to home page with hash
      window.location.href = `/${href}`;
    } else {
      // Scroll to section on same page
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 144;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <header
        className={`w-full h-20 md:h-36 flex items-center justify-between gap-2 lg:gap-4 xl:gap-6 px-4 md:px-8 lg:px-12 xl:px-20 py-4 md:py-16 font-mono fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background text-foreground shadow-md border-border rounded-br-lg rounded-bl-lg"
          : "bg-transparent text-white"
          }`}
      >
        <a href="/">
          <Image src={scrolled ? logo_mobile : logo} alt="Logo" className="h-7 md:h-12 w-auto flex-shrink-0 cursor-pointer" />
        </a>

        <NavigationMenu className="hidden lg:block flex-1">
          <NavigationMenuList className="flex justify-center font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base uppercase space-x-1 lg:space-x-2 xl:space-x-3 2xl:space-x-4">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`bg-transparent px-1 xl:px-2 py-2 transition-colors duration-300 whitespace-nowrap inline-block cursor-pointer ${!isOnboarding && `#${activeSection}` === link.href
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

        <a href="/onboarding" className="hidden lg:block flex-shrink-0">
          <Button className="uppercase py-4 lg:py-3 xl:py-4 2xl:py-6 px-3 lg:px-4 xl:px-6 2xl:px-12 text-[10px] lg:text-xs xl:text-sm 2xl:text-base rounded-xm hover:bg-white hover:text-primary cursor-pointer whitespace-nowrap">
            Хочу на курс
          </Button>
        </a>

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

      <div
        className={`lg:hidden fixed inset-0 bg-primary z-[60] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col h-screen overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/30 flex-shrink-0">
            <a href="/">
              <Image src={logo} alt="Logo" className="h-8 w-auto" priority quality={100} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center flex-shrink-0"
              aria-label="Close menu"
            >
              <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col flex-shrink-0">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);

                    if (isOnboarding) {
                      window.location.href = `/${link.href}`;
                    } else {
                      setTimeout(() => {
                        const id = link.href.replace("#", "");
                        const element = document.getElementById(id);
                        if (element) {
                          const headerOffset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }, 300);
                    }
                  }}
                  className="text-white font-bold text-base uppercase px-6 py-4 hover:bg-white/5 transition-all"
                >
                  {link.text}
                </a>
                {index < navLinks.length - 1 && (
                  <div className="h-px bg-white/30 mx-3" />
                )}
              </React.Fragment>
            ))}
          </nav>

          <div className="mt-auto px-6 pb-6 pt-4 space-y-4 flex-shrink-0">
            <div className="flex justify-center px-6">
              <a href="/onboarding">
                <Button
                  variant="outline"
                  className="uppercase py-5 px-6 text-base font-bold bg-transparent border-1 border-white text-white hover:bg-white hover:text-primary rounded-[10px] transition-all"
                >
                  Хочу на курс
                </Button>
              </a>
            </div>

            <div className="pt-2">
              <h3 className="text-white text-center text-xl font-black mb-2 tracking-wide">
                Наші соціальні мережі
              </h3>
              <p className="text-white text-center text-sm font-normal mb-4 leading-snug px-4">
                Більше про гурток дізнавайся написавши нам у телеграм або на пошту
              </p>

              <div className="flex justify-center gap-4 pb-6">
                <a
                  href="mailto:polithurtok@kse.org.ua"
                  className="w-16 h-16 rounded-full border-1 border-white flex items-center justify-center hover:bg-white transition-all text-white flex-shrink-0 group"
                  aria-label="Email"
                >
                  <svg className="w-7 h-7 text-white group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/polithurtok_kse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full border-1 border-white flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white flex-shrink-0"
                  aria-label="Instagram"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://t.me/polithurtok_kse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full border-1 border-white flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white flex-shrink-0"
                  aria-label="Telegram"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0.38z" />
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