import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-[gray] border-t border-gray-300 py-4 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <p className="text-sm text-black mt-6">
          © 2025 Prakarsh Singh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
