"use client";

import { useState } from "react";
import { personaRoadmaps } from "@/data/site-data";

export default function WhoShouldJoin() {
  const [selectedPersona, setSelectedPersona] = useState(personaRoadmaps[0].id);

  const activePersona =
    personaRoadmaps.find((p) => p.id === selectedPersona) || personaRoadmaps[0];

  return (
    <section id="audience" className="py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--primary-light)] bg-blue-50 rounded-full mb-3 border border-blue-200">
            Targeted Role Pathways
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Custom Upskilling Roadmaps by Role
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Select a corporate persona to explore tailored 90-day learning milestones and target skill outcomes.
          </p>
        </div>

        {/* Role Selector Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {personaRoadmaps.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setSelectedPersona(persona.id)}
              className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                selectedPersona === persona.id
                  ? "border-[var(--primary)] bg-slate-900 text-white shadow-xl scale-105"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:border-slate-300"
              }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-2xl">
                {persona.icon}
              </span>
              <div>
                <div className="text-sm font-bold">{persona.roleTitle}</div>
                <div className={`text-[11px] font-medium ${selectedPersona === persona.id ? "text-slate-300" : "text-slate-500"}`}>
                  Click to preview path &rarr;
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Roadmap Details Box */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--secondary)]/15 text-2xl text-[var(--secondary)] font-bold">
                {activePersona.icon}
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">
                  Tailored Pathway
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {activePersona.roleTitle}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {activePersona.subtitle}
            </p>

            <div className="pt-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Core Competencies Unlocked:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activePersona.skillsUnlocked.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3-Month Stepper */}
          <div className="lg:col-span-7 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              90-Day Execution Milestone Roadmap
            </h4>

            <div className="space-y-3">
              {activePersona.roadmapSteps.map((step, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-4 rounded-xl bg-white p-4 border border-slate-200 shadow-sm"
                >
                  <span className="flex h-10 w-20 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)] text-xs font-bold uppercase text-white">
                    {step.phase}
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    {step.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
