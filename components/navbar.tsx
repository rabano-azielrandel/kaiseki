"use client";

import Image from "next/image";
import useNavbar from "@/hooks/useNavbar";
import { Input } from "./ui/input";

const tabs = ["MENU", "FOOD", "SERVICES", "ABOUT"];

export default function Navbar() {
  const hook = useNavbar();
  return (
    <div className="flex h-16 bg-[hsl(var(--background))] ">
      {/* Logo */}
      <div className="hidden lg:block w-[45%] px-4">
        <div className="w-[80%] h-16 flex px-2 bg-[#B74F46]">
          <p className="text-5xl font-japanese font-semibold leading-tight tracking-widest">
            KAISEKI
          </p>
        </div>
      </div>

      {/* Navs */}
      <div className="w-full lg:w-[55%] relative flex justify-end px-4 lg:block">
        {/* Desktop */}
        <ul className="h-full hidden lg:flex justify-between items-center gap-4 px-4">
          {!hook.isSearchOpen &&
            tabs.map((element, index) => (
              <li
                key={index}
                onClick={() => hook.setActiveSection(element)}
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

          <li onClick={hook.toggleSearch} className="cursor-pointer">
            <Image
              src={"/icons/search1.png"}
              alt="search"
              width={100}
              height={100}
              className="w-6 h-6 object-center text-primary transition-transform duration-200 hover:scale-125"
            />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden ml-auto flex items-center">
          <button onClick={hook.toggleMenu}>
            <Image
              src="/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="w-6 h-6 bg-gray-700"
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {hook.isMenuOpen && (
          <div className="lg:hidden absolute top-full right-0 w-40 h-[calc(100vh-4rem)] bg-orange-200 shadow-md z-50">
            <ul className="flex flex-col items-center gap-6 py-6">
              {tabs.map((element, index) => (
                <li
                  key={index}
                  onClick={() => {
                    hook.setActiveSection(element);
                    hook.toggleMenu; // close menu on click
                  }}
                  className={
                    hook.activeSection === element
                      ? "font-medium"
                      : "font-light"
                  }
                >
                  <a href={`#${element}`}>
                    <p className="text-lg font-jakarta-sans">{element}</p>
                  </a>
                </li>
              ))}

              {/* Mobile search icon */}
              <li onClick={hook.toggleSearch} className="cursor-pointer">
                <Image
                  src="/icons/search.svg"
                  alt="search"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
