import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/40 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-text-secondary text-sm font-medium">
          © {new Date().getFullYear()} Prakarsh Singh. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-text-secondary/80 font-medium">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
