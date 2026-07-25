"use client";

import { useState } from "react";
import BrochureModal from "./BrochureModal";

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)] text-white py-20">
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--secondary)]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-white/10 rounded-full mb-4 border border-white/10">
          Ready to Transform Your Workforce?
        </span>

        <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight leading-tight">
          Partner With Accredian Enterprise Today
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
          Schedule a custom capability gap audit with our enterprise specialists and receive a tailored upskilling roadmap for your team.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[var(--secondary)] px-8 py-4 text-base font-bold uppercase tracking-wider text-white shadow-2xl hover:bg-[var(--secondary-dark)] transition-all hover:scale-105"
          >
            Request Enterprise Consultation
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all"
          >
            Download Curriculum Guide
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6 text-xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Fast 24-Hour Response
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Tailored ROI Diagnostic
          </span>
        </div>
      </div>

      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
