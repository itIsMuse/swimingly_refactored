import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaCircleInfo,
  FaPersonSwimming,
  FaBox,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Social */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <Image
              src="/MUSEE.png"
              alt="Swimingly Logo"
              width={100}
              height={100}
            />
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </Link>
              <Link href="https://instagram.com/swim_swimingly" target="_blank">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <FaYoutube className="text-2xl hover:text-red-500" />
              </Link>
              <Link href="https://wa.link/9ha1kh" target="_blank">
                <FaWhatsapp className="text-2xl hover:text-green-500" />
              </Link>
              <Link href="tel:+2349076290325">
                <FaPhone className="text-2xl hover:text-gray-300" />
              </Link>
            </div>
          </div>

                    {/* Navigation */}
          <div className="flex flex-col items-center space-y-8">
            <h3 className="text-lg font-semibold text-center">Quick Links</h3>
            <div className="grid grid-cols-2 gap-6 place-items-center">
              <Link href="#about" className="flex items-center gap-2 hover:text-[#40E0D0]">
                <FaCircleInfo /> About
              </Link>
              <Link href="#classes" className="flex items-center gap-2 hover:text-[#40E0D0]">
                <FaPersonSwimming /> Classes
              </Link>
              <Link href="#packages" className="flex items-center gap-2 hover:text-[#40E0D0]">
                <FaBox /> Packages
              </Link>
              <Link href="#contact" className="flex items-center gap-2 hover:text-[#40E0D0]">
                <FaEnvelope /> Contact
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center md:justify-end">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Swimingly. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
