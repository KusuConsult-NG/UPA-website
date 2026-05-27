"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About Us", path: "/about" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`site-header ${isShrunk ? "shrunk" : ""}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          UPA<span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`nav-link ${pathname === link.path ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA actions */}
        <div className="nav-actions">
          <Link href="/shop" className="btn btn-primary" style={{ padding: "8px 20px", fontSize: "14px" }}>
            Shop Now
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`mobile-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Slide-out Menu Overlay Drawer */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="mobile-nav-actions">
            <Link
              href="/shop"
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={closeMobileMenu}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
