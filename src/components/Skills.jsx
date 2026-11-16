import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  Server, 
  Bug, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Terminal,
  Database,
  Search,
  CheckSquare,
  Repeat,
  Users,
  GitBranch,
  Github,
  Cloud,
  Network,
  Palette,
  FileCode,
  Smartphone,
  Bot
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skillCategories, skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'Atom':
        return <Code2 className="w-5 h-5 text-teal-400" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'Layout':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-green-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-purple-400" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5 text-cyan-400" />;
      case 'Search':
        return <Search className="w-5 h-5 text-blue-400" />;
      case 'Repeat':
        return <Repeat className="w-5 h-5 text-purple-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-400" />;
      case 'Bug':
        return <Bug className="w-5 h-5 text-rose-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-orange-400" />;
      case 'Github':
        return <Github className="w-5 h-5 text-slate-200" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my full-stack web development and software quality assurance toolkit.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-semibold shadow-md shadow-teal-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Graphical Skills Grid (Visual Cards + Progress Bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card rounded-2xl p-5 border border-slate-800/80 hover:border-teal-500/40 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100 text-sm sm:text-base group-hover:text-teal-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 capitalize">
                      {skill.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-semibold text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded-md border border-teal-500/20">
                  {skill.level}%
                </span>
              </div>

              {/* Graphical Progress Bar */}
              <div className="w-full bg-slate-900 rounded-full h-2 p-0.5 border border-slate-800 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Proficiency</span>
                <span className="text-slate-300 font-medium">{skill.experience}</span>
              </div>
            </div>
          ))}
        </div>

        {/* SQA Verification Methodology Callout Box */}
        <div className="mt-12 glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-900/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Bug className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  Software Quality Assurance (SQA) Guarantee
                </h4>
                <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
                  I don't just develop software; I validate it against realistic edge cases. Proficient in authoring comprehensive test suites, boundary value analysis, regression sweeps, and ensuring seamless cross-browser responsiveness.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-teal-300">
                ✓ Black-Box Testing
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                ✓ White-Box Testing
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300">
                ✓ UAT Testing
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
