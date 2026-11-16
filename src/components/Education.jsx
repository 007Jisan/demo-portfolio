import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educational <span className="gradient-text">Qualification</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Structured formal education in Software Engineering and foundational Science background.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:via-cyan-500 before:to-slate-800">
          {education.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-center md:justify-between flex-col md:flex-row ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-teal-400 flex items-center justify-center z-10 shadow-lg shadow-teal-500/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                </div>

                {/* Content Box */}
                <div className="ml-12 md:ml-0 md:w-[45%] w-[calc(100%-3rem)]">
                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-teal-500/40 transition-all">
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded-md border border-teal-500/20">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                          Final Year
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {item.degree}
                    </h3>

                    <div className="text-sm font-medium text-teal-300 mb-2">
                      {item.institution}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-4">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </div>

                    {/* Highlights bullet points */}
                    <div className="space-y-2 pt-3 border-t border-slate-800/80">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
