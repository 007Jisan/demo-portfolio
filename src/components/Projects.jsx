import React from 'react';
import { FolderGit2, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-slate-950/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A showcase of production-ready full-stack applications and automated QA frameworks engineered with modern web technologies.
          </p>
        </div>

        {/* Projects Grid: At least 3 projects displayed in card format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* GitHub Repository Explorer Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-card border border-slate-800">
            <span className="text-xs sm:text-sm text-slate-400">
              Want to see more code repositories and open-source contributions?
            </span>
            <a
              href="https://github.com/007Jisan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 group"
            >
              <span>Visit My GitHub Profile</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
