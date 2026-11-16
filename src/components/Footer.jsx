import React from 'react';
import { ArrowUp, Github, Linkedin, MessageCircle, Mail, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, contact, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'MessageCircle':
        return <MessageCircle className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950/90 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400 font-bold text-xs">
                AR
              </div>
              <span className="font-bold text-white text-base">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Full Stack Developer & Software Quality Assurance Engineer based in Dhaka, Bangladesh.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-teal-300 transition">About</a>
            <span>•</span>
            <a href="#skills" className="hover:text-teal-300 transition">Skills</a>
            <span>•</span>
            <a href="#education" className="hover:text-teal-300 transition">Education</a>
            <span>•</span>
            <a href="#experience" className="hover:text-teal-300 transition">Experience</a>
            <span>•</span>
            <a href="#projects" className="hover:text-teal-300 transition">Projects</a>
            <span>•</span>
            <a href="#contact" className="hover:text-teal-300 transition">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-teal-500/40 transition"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-teal-950/60 border border-teal-500/30 text-teal-400 hover:bg-teal-900/60 transition"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Engineered with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
