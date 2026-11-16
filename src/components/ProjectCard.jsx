import React from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-teal-500/40 transition-all flex flex-col group">
      {/* Project Image Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80";
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Category / Badge */}
        {project.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-teal-500/30 text-[11px] font-mono font-medium text-teal-300">
            {project.badge}
          </div>
        )}

        {/* Floating Quick Live Link */}
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-slate-300 hover:text-white hover:border-teal-400 transition"
            title="Open Live Preview"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Project Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Name */}
          <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-2">
            {project.title}
          </h3>

          {/* Brief Description */}
          <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Tech Stack Tags Preview */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.mainTech.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.mainTech.length > 4 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900/60 text-slate-400">
                +{project.mainTech.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons: View More / Details (Mandatory Requirement) + Links */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          {/* View More / Details Button */}
          <Link
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all duration-200 shadow-md shadow-teal-500/20 group/btn"
          >
            <span>View More / Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Link>

          {/* GitHub Client Link */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
            title="GitHub Client Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
