import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "./ui/button";

import logo from "@/assets/logo.png";

export function Navigation() {
  return (
    <header className="w-full h-36 shadow-md flex items-center justify-between px-24 py-16 font-gotham">
      <Image src={logo} alt="Logo" height={36} />
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="font-medium text-lg uppercase text-white">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#knowledge"
            >
              Навички і знання
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#structure"
            >
              Структура курсу
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#audience"
            >
              Структура курсу
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#teachers"
            >
              Викладачі
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#interview"
            >
              Інтерв'ю
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button className="uppercase">Хочу на курс</Button>
    </header>
  );
}
