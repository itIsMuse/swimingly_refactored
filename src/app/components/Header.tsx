// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#00102e] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            className="mt-2"
            src="/MUSEE (2).png"
            alt="Swimingly"
            width={100}
            height={200}
          />
        </Link>

        {/* Desktop Nav (centered) */}
        <nav className="hidden md:flex flex-grow justify-center  space-x-6">
          <Link className="p-2 hover:text-[#40E0D0] hover:border-b-1 transition-all duration-300 ease-in-out" href="/">Home</Link>
          <Link className="p-2 hover:text-[#40E0D0] hover:border-b-1" href="/classes">Classes</Link>
          <Link className="p-2 hover:text-[#40E0D0] hover:border-b-1" href="/packages">Packages</Link>
          <Link
            className=" p-2 hover:text-[#40E0D0] hover:border-b-1"
            href="https://wa.link/9ha1kh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a class
          </Link>
          <Link className="p-2 hover:text-[#40E0D0] hover:border-b-1" href="#social-links">Contact Us</Link>
        </nav>

        {/* Register button (right side) */}
        <Link
          href="https://forms.gle/asC2oMcouaSeQavMA"
          target="_blank"
          className="hidden md:inline-block bg-[#084f70] hover:bg-[#04344b] transition duration-300 px-4 py-2 rounded-lg ml-4"
        >
          Register
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#00102e] transition-[max-height] duration-700 ease-in-out overflow-hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 px-6 py-4">
          <Link className="hover:text-[#40E0D0]" href="/">Home</Link>
          <Link className="hover:text-[#40E0D0]" href="/classes">Classes</Link>
          <Link className="hover:text-[#40E0D0]" href="/packages">Packages</Link>
          <Link
            className="hover:text-[#40E0D0]"
            href="https://wa.link/9ha1kh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a class
          </Link>
          <Link className="hover:text-[#40E0D0]" href="#social-links">Contact Us</Link>
          <Link
            href="https://forms.gle/asC2oMcouaSeQavMA"
            target="_blank"
            className="bg-[#084f70] hover:bg-[#04344b] transition duration-300 px-4 py-2 rounded-lg text-center"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
