// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#00102e]/50  text-white sticky top-0 z-50 px-4">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <Image className="mt-5" src="/MUSEE (2).png" alt="Swimingly" width={100} height={200} />
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
          } md:flex space-x-6 absolute md:static  bg-black md:bg-transparent top-full left-0 w-full md:w-auto p-4 md:p-0 px-10`}
        >
          <Link className="hover:text-[#084f70]" href="/">Home</Link>
          <Link className="hover:text-[#084f70]"href="/classes">Classes</Link>
          <Link className="hover:text-[#084f70]" href="/packages">Packages</Link>
          <Link className="hover:text-[#084f70]"
            href="https://wa.link/9ha1kh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a class
          </Link>
          <Link className="hover:text-[#084f70]" href="#social-links">Contact Us</Link>
        </nav>

        {/* Register button */}
        <Link
          href="https://forms.gle/asC2oMcouaSeQavMA"
          target="_blank"
          className="hidden md:inline-block bg-[#084f70] hover:bg-[#04344b]  transition duration-500 px-4 py-2 rounded-lg"
        >
          Register
        </Link>
      </div>
    </header>
  );
}
