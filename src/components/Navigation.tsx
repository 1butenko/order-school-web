"use client"

import React from "react"
import Image from "next/image"
import logo from "@/assets/logo.png"
import logo_dark from "@/assets/logo_dark.png"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full h-36 flex items-center justify-between px-24 py-16 font-mono fixed top-0 left-0 z-50 transition-all duration-300
        ${scrolled ? "bg-background text-foreground shadow-md border-border rounded-br-lg rounded-bl-lg" : "bg-transparent text-white"}
      `}
    >
      <Image src={scrolled ? logo_dark : logo} alt="Logo" height={36} />
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="font-medium text-lg uppercase">
          <NavigationMenuItem>
            <NavigationMenuLink href="#knowledge">
              Навички і знання
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#structure">
              Структура курсу
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#timeline">
              Таймлайн модулів
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#audience">
              Для кого
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#teachers">
              Викладачі
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#interview">
              Інтерв'ю
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="uppercase">Хочу на курс</Button>
    </header>
  )
}