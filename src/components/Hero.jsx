import React from 'react';
import { 
  FileDown, 
  ArrowRight, 
  Github, 
  Linkedin, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, contact, socials } = portfolioData;

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Designation, Intro, Bio, CTA Buttons & Social Links */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-teal-500/10">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>{personal.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Professional Designation */}
            <div className="mt-3 text-lg sm:text-2xl font-semibold text-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-teal-400">Full Stack Developer</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400">MERN Specialist</span>
              <span className="text-slate-500">•</span>
              <span className="text-indigo-400">SQA Engineer</span>
            </div>

            {/* Short Catchy Tagline */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Quick Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Layers className="w-4 h-4 text-teal-400" />
                <span>MERN Architecture</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Automated & Manual QA</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{contact.location}</span>
              </div>
            </div>

            {/* Action Buttons: Resume Download (Single Click) & Projects CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* PRIMARY: Single-Click Resume View / Download Button */}
              <a
                href={personal.resumeUrl}
                download={personal.resumeFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-400 via-teal-500 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base group"
              >
                <FileDown className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              {/* SECONDARY: Explore Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200 text-base"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </a>

              {/* TERTIARY: Quick WhatsApp Connect */}
              <a
                href={contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-emerald-400 bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-800/40 transition-all duration-200 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Media Profile Links (Requirement #4) */}
            <div className="mt-9 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Connect with me:
              </span>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-200 shadow-sm"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Photo with Cyber Aesthetic Aura */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Glowing Aura Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-500 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-700 group-hover:duration-300" />
              
              {/* Outer Container Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-1 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = personal.fallbackAvatar;
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Floating verification badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-semibold text-slate-200">Open to Work</span>
                    </div>
                    <span className="text-[11px] font-mono text-teal-400 font-medium">SWE '26</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge top-right */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-teal-500/40 shadow-lg backdrop-blur-md hidden sm:flex items-center gap-1.5 animate-float">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span className="text-xs font-mono font-medium text-teal-300">Clean Code & SQA</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
