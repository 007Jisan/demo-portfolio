import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="gradient-text">Readiness</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Practical project execution, capstone engineering leadership, and ready for industry impact.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-teal-500/30 transition-all relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-500" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{exp.role}</span>
                  </h3>
                  <div className="text-sm font-medium text-teal-400 mt-1">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-teal-400" />
                    {exp.period}
                  </span>
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950/50 px-2.5 py-1 rounded-md border border-cyan-500/30">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2.5 mt-5 pt-4 border-t border-slate-800/80">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Call-to-action bar */}
          <div className="glass-panel rounded-2xl p-6 border border-teal-500/30 bg-gradient-to-r from-teal-950/40 via-slate-900 to-cyan-950/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">
                  Looking for a Full Stack Developer or SQA Engineer?
                </h4>
                <p className="text-xs text-slate-400">
                  I am available immediately for full-time on-site, hybrid, or remote positions.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shrink-0 shadow-md shadow-teal-500/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
