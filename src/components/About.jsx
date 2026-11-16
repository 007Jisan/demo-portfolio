import React from 'react';
import { 
  User, 
  Code, 
  CheckCircle, 
  Smartphone, 
  Cpu, 
  Gamepad2, 
  Sparkles, 
  Terminal, 
  Bug, 
  Layers,
  Heart
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-teal-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-indigo-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A software engineer with a dual passion for building impactful web applications and rigorously validating their reliability.
          </p>
        </div>

        {/* Top Split: Programming Journey & Work I Enjoy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: My Programming Journey */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>My Programming Journey</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {about.journey}
            </p>
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-teal-400">
              <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">#SoftwareEngineering</span>
              <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">#MERNStack</span>
              <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">#DIU_Graduate</span>
            </div>
          </div>

          {/* Card 2: The Work I Enjoy */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <Bug className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>The Work I Enjoy</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {about.workEnjoyed}
            </p>
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-cyan-400">
              <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">#RobustArchitecture</span>
              <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">#ZeroDefectPolicy</span>
              <span className="bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">#UserCentric</span>
            </div>
          </div>

        </div>

        {/* Personality Highlights Banner */}
        <div className="mb-12 glass-panel rounded-2xl p-6 border border-slate-800">
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-4 text-center sm:text-left">
            Core Professional Attributes
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.personalityTraits.map((trait, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-800/80 hover:border-teal-500/40 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-teal-400" />
                <span className="text-sm font-medium text-slate-200">{trait}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Hobbies & Personal Interests (Requirement #5) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-400" />
                <span>Hobbies & Outside Interests</span>
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Beyond writing code and executing test suites, here is what sparks my curiosity and fuels my creativity:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.hobbies.map((hobby, idx) => (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-teal-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getHobbyIcon(hobby.icon)}
                </div>
                <h4 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-teal-300 transition-colors">
                  {hobby.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {hobby.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
