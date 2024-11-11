"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/public/Mehmillogo.png";

const Navbar = () => {
  return (
    <div className="w-full h-auto px-6 py-4 bg-black flex justify-between items-center">
      {/* Logo */}
      <div className="w-[130px] h-[100px]">
        <Image src={logo} alt="logo" />
      </div>

      {/* Navigation Menu */}
      <div className="w-full sm:w-auto h-auto flex justify-between items-center">
        <ul className="flex flex-row justify-between sm:gap-x-8 gap-x-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About_Me">About Me</Link>
          </li>
          <li>
            <Link href="/Projects">Projects</Link>
          </li>
          <li>
            <Link href="/Contact_Me">Contact Me</Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        /* Media Queries for Mobile and Tablet Responsiveness */
        @media screen and (max-width: 640px) {
          .w-[130px] {
            width: 100px; /* Smaller logo size */
            height: 80px;
          }

          .w-full {
            width: 100%;
          }

          .sm\:gap-x-8 {
            gap: 2rem;
          }

          .gap-x-4 {
            gap: 1rem; /* Reduced gap for mobile */
          }

          .sm\:w-auto {
            width: auto; /* Full width on small screens */
          }

          /* Adjust text size for mobile */
          ul li {
            font-size: 1rem;
          }
        }

        @media screen and (max-width: 768px) {
          .w-[130px] {
            width: 110px; /* Slightly bigger logo for tablets */
            height: 90px;
          }

          /* Adjust text size for tablets */
          ul li {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;

