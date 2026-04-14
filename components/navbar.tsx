"use client";

import Image from "next/image";
import useNavbar from "@/hooks/useNavbar";
import { Input } from "./ui/input";
import { SearchIcon } from "./ui/search-icon";
import { MenuIcon } from "./ui/menu-icon";
import { ThemeSwitcher } from "@/components/theme-switcher";

const tabs = ["MENU", "FOOD", "SERVICES", "ABOUT"];

export default function Navbar() {
  const hook = useNavbar();
  return (
    <div className="flex h-16">
      {/* Logo */}
      <div className="hidden lg:block w-[45%] px-4">
        <div className="w-[80%] h-16 flex px-8 py-2 bg-[#B74F46]">
          <p className="text-5xl font-japanese font-semibold leading-tight tracking-widest">
            KAISEKI
          </p>
        </div>
      </div>

      {/* Navs */}
      <div className="w-full lg:w-[55%] relative flex lg:block justify-end px-4">
        {/* Desktop */}
        <ul className="h-full hidden lg:flex justify-between items-center gap-6 px-4">
          {!hook.isSearchOpen &&
            tabs.map((element, index) => (
              <li
                key={index}
                onClick={() =>
                  hook.setActiveSection((prev) =>
                    prev === element ? null : element,
                  )
                }
                className={
                  hook.activeSection === element ? "font-medium" : "font-light"
                }
              >
                <a href={`#${element}`}>
                  <p className="font-jakarta-sans text-primary">{element}</p>
                </a>
              </li>
            ))}

          {hook.isSearchOpen && <Input />}

          <li className="flex-center gap-10 cursor-pointer">
            <SearchIcon
              onClick={hook.toggleSearch}
              className="w-7 h-7 dark:text-foreground transition-transform duration-200 hover:scale-125"
            />
            <ThemeSwitcher />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden ml-auto flex items-center">
          <button onClick={hook.toggleMenu}>
            <MenuIcon
              onClick={hook.toggleSearch}
              className="w-7 h-7 dark:text-foreground transition-transform duration-200 hover:scale-125"
            />
          </button>
        </div>

        {/* Backdrop of mobile*/}
        {hook.isMenuOpen && (
          <div
            onClick={hook.toggleMenu}
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`
            lg:hidden fixed top-0 right-0 h-screen w-64 z-50
            bg-orange-200/90 backdrop-blur-md shadow-2xl
            transform transition-transform duration-300 ease-in-out
            ${hook.isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Sticky header inside menu */}
          <div className="sticky top-0 p-4 border-b border-black/10 bg-orange-200/80 backdrop-blur-md">
            <p className="font-japanese text-xl tracking-widest">KAISEKI</p>
          </div>

          {/* Menu items */}
          <ul className="flex flex-col items-start gap-6 p-6">
            {tabs.map((element, index) => (
              <li
                key={index}
                onClick={() => {
                  hook.setActiveSection(element);
                  hook.toggleMenu();
                }}
                className={`transition-all ${
                  hook.activeSection === element
                    ? "font-medium translate-x-1"
                    : "font-light opacity-80"
                }`}
              >
                <a href={`#${element}`}>
                  <p className="text-lg font-jakarta-sans">{element}</p>
                </a>
              </li>
            ))}

            {/* Search */}
            <li
              onClick={hook.toggleSearch}
              className="flex items-center gap-2 cursor-pointer pt-4 border-t border-black/10 w-full"
            >
              <Image
                src="/icons/search.svg"
                alt="search"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="text-sm">Search</span>

              {hook.isSearchOpen && <Input />}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
