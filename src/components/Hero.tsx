"use client";

import { useState } from "react";
import Image from "next/image";
import { heroContent } from "@/data/site-data";
import BrochureModal from "./BrochureModal";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"matrix" | "growth" | "roi">("matrix");

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[var(--primary-dark)] to-[var(--primary)] text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Ambient Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--secondary)]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-7 z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="text-xs font-semibold text-white tracking-wide">
                {heroContent.badge}
              </span>
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl leading-[1.12]">
              {heroContent.title}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {heroContent.subtitle}
            </p>

            {/* Feature tags */}
            <div className="mt-8 flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {heroContent.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md border border-white/10"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
                  {feature}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--secondary)] px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-xl shadow-[var(--secondary)]/30 transition-all hover:bg-[var(--secondary-dark)] hover:shadow-2xl hover:-translate-y-0.5"
              >
                {heroContent.primaryCta}
              </a>
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
              >
                <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                {heroContent.secondaryCta}
              </a>
            </div>

            {/* Live Metrics */}
            <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-white/15 max-w-lg mx-auto lg:mx-0">
              {heroContent.metrics.map((metric) => (
                <div key={metric.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-300 font-medium mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Enterprise Showcase Card */}
          <div className="lg:col-span-5 z-10">
            <div className="rounded-3xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 backdrop-blur-2xl shadow-2xl space-y-5">
              {/* Tab Selector Header */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Live Enterprise Analytics
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase text-[var(--accent)] bg-white/10 px-2.5 py-1 rounded-md">
                  SOC2 Certified
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
                <button
                  onClick={() => setActiveTab("matrix")}
                  className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                    activeTab === "matrix" ? "bg-[var(--secondary)] text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  AI Matrix
                </button>
                <button
                  onClick={() => setActiveTab("growth")}
                  className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                    activeTab === "growth" ? "bg-[var(--secondary)] text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Skill Growth
                </button>
                <button
                  onClick={() => setActiveTab("roi")}
                  className={`py-2 text-[11px] font-bold rounded-lg transition-all ${
                    activeTab === "roi" ? "bg-[var(--secondary)] text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Team ROI
                </button>
              </div>

              {/* Card Body */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-slate-950 p-5 flex flex-col justify-between">
                <Image
                  src="/hero-dashboard.png"
                  alt="Enterprise Dashboard Analytics"
                  fill
                  className="object-cover opacity-40 mix-blend-overlay"
                />

                <div className="relative z-10 space-y-3">
                  {activeTab === "matrix" && (
                    <>
                      <div className="text-xs font-bold uppercase text-slate-300">Competency Heatmap</div>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-[11px] font-medium text-slate-200 mb-1">
                            <span>Gen-AI & Prompt Ops</span>
                            <span>94%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[94%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[11px] font-medium text-slate-200 mb-1">
                            <span>Product Architecture</span>
                            <span>88%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 w-[88%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[11px] font-medium text-slate-200 mb-1">
                            <span>Cloud DevOps Security</span>
                            <span>91%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 w-[91%]" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "growth" && (
                    <>
                      <div className="text-xs font-bold uppercase text-slate-300">90-Day Velocity Velocity</div>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-center">
                          <div className="text-2xl font-black text-emerald-400">4.2x</div>
                          <div className="text-[10px] text-slate-300">Baseline Multiplier</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-center">
                          <div className="text-2xl font-black text-cyan-400">98.6%</div>
                          <div className="text-[10px] text-slate-300">Capstone Score</div>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === "roi" && (
                    <>
                      <div className="text-xs font-bold uppercase text-slate-300">Audited Enterprise Savings</div>
                      <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-center space-y-1">
                        <div className="text-3xl font-black text-amber-400">$3.4 Million</div>
                        <div className="text-[11px] text-slate-200">Average Annual Value Created Per 100 Engineers</div>
                      </div>
                    </>
                  )}
                </div>

                <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>● Active Cohort: Q3 Enterprise</span>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="text-[var(--accent)] font-bold hover:underline"
                  >
                    View Sample Report &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
