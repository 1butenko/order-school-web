import Image from "next/image";
import logo from "@/assets/logo.png";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <header className="w-full h-36 shadow-md flex items-center justify-between px-24 py-16 font-mono fixed top-0 left-0 z-50">
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
              Для кого
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
