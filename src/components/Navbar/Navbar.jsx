import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
        ? 'top-4 left-0 right-0 px-4 md:px-0' 
        : 'top-0 left-0 right-0 px-6 py-6'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 ${
          scrolled 
          ? 'rounded-full px-6 py-3 border border-white/10 shadow-card backdrop-blur-xl' 
          : 'bg-transparent'
        }`}
        style={scrolled ? { background: 'rgba(14,14,20,0.85)' } : {}}
      >
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, '#hero')} 
          className="text-2xl font-bold tracking-tight text-text-primary group relative z-50"
        >
          Prakarsh<span className="text-primary group-hover:text-secondary transition-colors">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-white/5 group overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
            <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all active:scale-95"
                style={{ background: 'linear-gradient(135deg, #6366F1, #A78BFA)', boxShadow: '0 0 20px rgba(99,102,241,0.3)' }}
            >
                Contact Me
            </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-text-primary hover:bg-white/10 rounded-full transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 backdrop-blur-2xl z-40 md:hidden transition-all duration-500 ease-in-out flex flex-col justify-center items-center space-y-8 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-10'
        }`}
        style={{ background: 'rgba(9,9,11,0.97)' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-2xl font-medium text-text-secondary hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a 
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-8 py-4 rounded-full text-white text-lg font-semibold shadow-xl mt-4 hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #6366F1, #A78BFA)', boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}
        >
            Contact Me
        </a>
      </div>
    </nav>
  );
};