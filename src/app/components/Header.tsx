// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-grey text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/MUSEE.png" alt="Swimingly" width={80} height={80} />
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } md:flex space-x-6 absolute md:static bg-black md:bg-transparent top-full left-0 w-full md:w-auto p-4 md:p-0`}
        >
          <Link href="/">Home</Link>
          <Link href="/classes">Classes</Link>
          <Link href="/packages">Packages</Link>
          <Link
            href="https://wa.link/9ha1kh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a class
          </Link>
          <Link href="#social-links">Contact Us</Link>
        </nav>

        {/* Register button */}
        <Link
          href="https://forms.gle/asC2oMcouaSeQavMA"
          target="_blank"
          className="hidden md:inline-block bg-blue-500 px-4 py-2 rounded-lg"
        >
          Register
        </Link>
      </div>
    </header>
  );
}
