import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: 'products', label: 'Products' },
    { id: 'editor', label: 'Editor' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'changelog', label: 'Changelog' },
    { id: 'community', label: 'Community' },
  ];

  // Only for mobile: smooth scroll and active section logic
  useEffect(() => {
    if (window.innerWidth >= 768) return; // Only run on mobile
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sectionOffsets = menuItems.map(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return { id, offsetTop: rect.top };
        }
        return null;
      }).filter(Boolean);
      const currentSection = sectionOffsets.find(
        section => section.offsetTop >= 0 && section.offsetTop < window.innerHeight / 2
      );
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  // Only for mobile: smooth scroll
  const handleMenuItemClick = (sectionId) => {
    if (window.innerWidth >= 768) return;
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/vite.svg" alt="Logo" className="h-7 w-7 mr-2" />
          <span className="font-bold text-lg text-gray-900">hashnode</span>
        </div>
        {/* Menu - Desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.id} className="hover:text-black cursor-pointer">
              {item.label}
            </li>
          ))}
        </ul>
        {/* Sign In Button - Desktop */}
        <button className="hidden md:block ml-6 px-5 py-1.5 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition">
          Sign in
        </button>
        {/* Hamburger - Mobile */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-gray-900 cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-gray-900 cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>
      {/* Sidebar - Mobile */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[gray] bg-opacity-30 backdrop-filter backdrop-blur-md z-50 shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[black]">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[black] hover:font-semibold ${activeSection === item.id ? "text-[black] font-semibold" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/PrakarshSingh5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/prakarshsinghdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/_prakarsh._/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};
