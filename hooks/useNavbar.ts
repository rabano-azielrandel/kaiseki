import { useState, useRef, useCallback } from "react";

export default function useNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  const toggleSearch = useCallback(() => setIsSearchOpen(prev => !prev), []);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);

  return {
    isSearchOpen,
    activeSection,
    isMenuOpen,
    setActiveSection,
    toggleSearch,
    openMenu,
    closeMenu,
    toggleMenu,

    navbarRef,
  };
}