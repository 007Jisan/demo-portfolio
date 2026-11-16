import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Layers, 
  AlertTriangle, 
  Rocket, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = portfolioData.projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-20 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-slate-400 mb-6">The project you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-400 text-slate-950 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 relative">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-300 transition-colors py-2 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header Banner */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {project.badge && (
              <span className="px-3 py-1 rounded-full bg-teal-950/70 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium">
                {project.badge}
              </span>
            )}
            <span className="text-xs font-mono text-slate-400">
              MERN & SQA Project
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Action Links Bar: Live Project Link & GitHub Repository Link (Client) */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {/* Live project link */}
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-teal-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project Demo</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-400 bg-slate-900 border border-slate-800 text-sm">
                <span>Live Demo (Local / Capstone Environment)</span>
              </div>
            )}

            {/* GitHub repository link (Client) */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-850 border border-slate-700 hover:border-teal-500/50 shadow-md transition-all duration-200"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub Client Repository</span>
            </a>
          </div>
        </div>

        {/* Featured Project Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 mb-12 shadow-2xl relative bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 sm:h-96 object-cover object-center"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80";
            }}
          />
        </div>

        {/* Grid layout for Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area (2 cols): Challenges & Potential Improvements */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Challenges Faced While Developing */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Challenges Faced While Developing
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    Complex engineering roadblocks encountered and overcome
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-amber-950/60 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Potential Improvements and Future Plans */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    Potential Improvements & Future Plans
                  </h2>
                  <p className="text-xs text-slate-400 font-mono">
                    Roadmap, upcoming architectural upgrades, and feature additions
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {project.futurePlans.map((plan, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-lg bg-teal-950/60 border border-teal-500/40 text-teal-400 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {plan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features Section if available */}
            {project.keyFeatures && (
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Core Functional Highlights
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">
                      Implemented architecture and verified functionalities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Area (1 col): Main Technology Stack */}
          <div className="space-y-6">
            
            {/* Main Technology Stack Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 sticky top-28">
              <div className="flex items-center gap-2.5 mb-4">
                <Layers className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-bold text-white">Main Tech Stack Used</h3>
              </div>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Technologies and tools utilized to construct this application from design to production.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.mainTech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-teal-500/30 text-teal-300 text-xs font-mono font-medium flex items-center gap-1.5 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {tech}
                  </span>
                ))}
              </div>

              {/* Developer Info Box */}
              <div className="pt-5 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Developer:</span>
                  <span className="text-slate-200 font-medium">{portfolioData.personal.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Role:</span>
                  <span className="text-slate-200 font-medium">Full Stack & SQA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Quality Status:</span>
                  <span className="text-emerald-400 font-mono">Tested & Verified</span>
                </div>
              </div>

              {/* Return to Portfolio button */}
              <div className="mt-6 pt-4 border-t border-slate-800">
                <Link
                  to="/#projects"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Portfolio</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
