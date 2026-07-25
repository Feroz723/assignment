"use client";

import { useState } from "react";

export default function CapabilityCalculator() {
  const [teamSize, setTeamSize] = useState(25);
  const [domain, setDomain] = useState("genai");
  const [modalOpen, setModalOpen] = useState(false);

  // Dynamic ROI calculation logic
  const domainMultipliers: Record<string, { label: string; hoursPerEmployee: number; productivityUplift: number; valueMultiplier: number }> = {
    genai: { label: "Gen-AI & Autonomous Agents", hoursPerEmployee: 18, productivityUplift: 38, valueMultiplier: 120 },
    product: { label: "Strategic Product & Growth", hoursPerEmployee: 14, productivityUplift: 28, valueMultiplier: 110 },
    leadership: { label: "Executive Leadership Elevation", hoursPerEmployee: 12, productivityUplift: 25, valueMultiplier: 140 },
    data: { label: "Enterprise Data & ML Engineering", hoursPerEmployee: 16, productivityUplift: 32, valueMultiplier: 125 },
    cloud: { label: "Cloud Native & DevOps Security", hoursPerEmployee: 15, productivityUplift: 30, valueMultiplier: 115 },
  };

  const selected = domainMultipliers[domain] || domainMultipliers.genai;
  const totalMonthlyHoursSaved = teamSize * selected.hoursPerEmployee;
  const annualEstimatedROI = Math.round((teamSize * selected.hoursPerEmployee * selected.valueMultiplier * 12) / 1000);

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary-light)]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-white/10 rounded-full mb-3 border border-white/10">
            Interactive Enterprise Impact Tool
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Calculate Your Organization&apos;s Training ROI
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Adjust your team size and domain focus to see estimated productivity gains, hours saved, and projected value creation.
          </p>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                1. Select Upskilling Practice Area
              </label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="w-full rounded-xl border border-white/20 bg-slate-800/90 px-4 py-3.5 text-sm text-white focus:border-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]/40 transition-all"
              >
                <option value="genai">Gen-AI & Autonomous Agents (38% Uplift)</option>
                <option value="product">Strategic Product & Growth (28% Uplift)</option>
                <option value="leadership">Executive Leadership Elevation (25% Uplift)</option>
                <option value="data">Enterprise Data & ML Engineering (32% Uplift)</option>
                <option value="cloud">Cloud Native & DevOps Security (30% Uplift)</option>
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Select Team / Cohort Size
                </label>
                <span className="text-lg font-extrabold text-[var(--accent)]">
                  {teamSize} Employees
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[var(--secondary)]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>5 employees</span>
                <span>100 employees</span>
                <span>250+ employees</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Based on audited post-training cohort metrics across 200+ enterprises.
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> Includes pre/post diagnostic evaluation & capstone project verification.
              </div>
            </div>
          </div>

          {/* Results Display Box */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-8 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-[var(--secondary)] via-[var(--accent)] to-cyan-400" />

              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Projected Annual Impact for {teamSize} Engineers
              </span>

              <div className="mt-4 text-4xl sm:text-5xl font-black text-white tracking-tight">
                ${annualEstimatedROI}K<span className="text-lg text-[var(--accent)] font-bold">/yr</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">Estimated Value Creation</p>

              <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <div className="text-2xl font-bold text-emerald-400">
                    +{selected.productivityUplift}%
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                    Productivity Uplift
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400">
                    {totalMonthlyHoursSaved.toLocaleString()} hrs
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">
                    Saved Monthly
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 w-full inline-block rounded-xl bg-[var(--secondary)] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[var(--secondary-dark)] transition-all hover:scale-105"
              >
                Get Tailored Enterprise Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
