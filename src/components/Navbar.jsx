import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown, Code2, Sparkles, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll tracking for active indicator
      if (!isHomePage) return;
      const sections = ['about', 'skills', 'education', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (!isHomePage) {
      window.location.href = `/${href}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-500 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-teal-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-teal-400 group-hover:text-teal-300 text-lg">
                AR
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-teal-300 transition-colors">
                Abidur Rahman <span className="text-teal-400">Jisan</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400 -mt-1 hidden sm:block">
                Full Stack & SQA
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = isHomePage && activeSection === sectionId;

              return isHomePage ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-teal-400 bg-teal-950/40 border border-teal-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-teal-400 rounded-full" />
                  )}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={`/${item.href}`}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Resume Download Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Direct Resume Download Button in Navbar */}
            <a
              href={portfolioData.personal.resumeUrl}
              download={portfolioData.personal.resumeFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 shadow-md shadow-teal-500/20 hover:shadow-teal-500/35 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1.5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={isHomePage ? item.href : `/${item.href}`}
              onClick={() => handleNavClick(item.href)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 active:bg-teal-900/30 transition"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800">
            <a
              href={portfolioData.personal.resumeUrl}
              download={portfolioData.personal.resumeFilename}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-950 shadow-md transition active:scale-95"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
