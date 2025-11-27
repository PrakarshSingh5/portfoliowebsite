import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-10 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm font-light">
          © {new Date().getFullYear()} Prakarsh Singh. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm text-slate-500 font-medium">
          <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
