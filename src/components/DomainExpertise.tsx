"use client";

import { useState } from "react";
import Image from "next/image";
import { domainExpertise } from "@/data/site-data";
import BrochureModal from "./BrochureModal";

export default function DomainExpertise() {
  const [selectedDomain, setSelectedDomain] = useState(domainExpertise[0].id);
  const [modalOpen, setModalOpen] = useState(false);

  const activeItem = domainExpertise.find((item) => item.id === selectedDomain) || domainExpertise[0];

  return (
    <section id="domains" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--primary-light)]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-white/10 rounded-full mb-3">
            Specialized Practice Areas
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Domain Expertise Tailored for Enterprise Impact
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Explore industry-leading upskilling verticals designed by practitioners to address complex technological and leadership challenges.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {domainExpertise.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all flex items-center gap-2 ${
                selectedDomain === domain.id
                  ? "bg-[var(--secondary)] text-white shadow-lg shadow-[var(--secondary)]/30 scale-105"
                  : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
              }`}
            >
              <span>{domain.icon}</span>
              {domain.title}
            </button>
          ))}
        </div>

        {/* Selected Domain Showcase Card */}
        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--secondary)]/20 text-2xl text-[var(--secondary)]">
                {activeItem.icon}
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {activeItem.category}
                </span>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {activeItem.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              {activeItem.tagline}
            </p>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Program Duration: {activeItem.duration}
              </span>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Enterprise Competencies Covered:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeItem.keySkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/10 border border-white/10 px-3 py-1 text-xs font-medium text-white"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-[var(--secondary)] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[var(--secondary-dark)] transition-colors"
              >
                Custom Cohort Inquiry
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Request Full Syllabus PDF
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-slate-800 shadow-2xl">
              <Image
                src="/executive-workshop.png"
                alt={activeItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 rounded-xl border border-white/10 backdrop-blur-md">
                <div className="text-xs font-bold text-white">Live Enterprise Sandbox Included</div>
                <div className="text-[11px] text-slate-400">Hands-on capstone project with company data</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
