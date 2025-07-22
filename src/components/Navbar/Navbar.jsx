import React, { useEffect } from 'react'
import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // check scroll and change navbar background
  useEffect(() => {
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

      // find the section closest to top (within view)
      const currentSection = sectionOffsets.find(
        section => section.offsetTop >= 0 && section.offsetTop < window.innerHeight / 2
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // smooth scroll function
  // const handleMenuItemClick = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  //   setActiveSection(sectionId);
  //   setIsOpen(false);
  // };

  const menuItems = [
    { path: "/", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    // { path: "/testimonials", label: "Testimonials" },
    { path: "/education", label: "Education" },
    { path: "/contact", label: "Contact" 
  
    },
    {
      path: "/problems", label: "LeetCode"
    }
  ];
  return (
    <nav className="fixed top-0 w-full z-50 transition-duration-300 px-[7vw] md:px-[7vw] lg:px-[7vw] bg-white md:bg-transparent">
      <div className=' py-5 flex justify-between items-center'>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 text-[#374151]-400 font-semibold">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu icons */}

        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[black] cursor-pointer'
                onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl text-[black] cursor-pointer'
                onClick={() => setIsOpen(true)} />
            )
          }

        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full bg-[gray] bg-opacity-30 backdrop-filter backdrop-blur-md z-50 shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-[black]">
            {menuItems.map((item) => (
              <li
                key={item.path}
                className="cursor-pointer hover:text-[black] hover:font-semibold"
                onClick={() => setIsOpen(false)} // closes the menu after click
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}