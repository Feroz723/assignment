"use client";

import { useState, useEffect } from "react";
import { navLinks, announcementBar } from "@/data/site-data";
import BrochureModal from "./BrochureModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Ribbon */}
      <div className="bg-slate-950 text-white text-xs py-2 px-4 text-center font-medium border-b border-white/10 flex items-center justify-center gap-2">
        <span>{announcementBar.text}</span>
        <button
          onClick={() => setModalOpen(true)}
          className="text-[var(--accent)] font-bold hover:underline cursor-pointer"
        >
          {announcementBar.linkText}
        </button>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md py-3"
            : "bg-white/85 border-b border-slate-100 py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--secondary)] font-extrabold text-white shadow-md shadow-[var(--primary)]/20 transition-transform group-hover:scale-105">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[var(--primary-dark)]">
                Accredian
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--secondary)] -mt-1">
                Enterprise Platform
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-slate-600 transition-colors hover:text-[var(--primary)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:border-slate-300"
            >
              2026 Report
            </button>
            <a
              href="#contact"
              className="rounded-xl bg-[var(--secondary)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[var(--secondary)]/25 transition-all hover:bg-[var(--secondary-dark)] hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Briefing
            </a>
          </div>

          {/* Mobile drawer button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu drawer */}
        {isOpen && (
          <div className="border-b border-slate-200 bg-white/95 backdrop-blur-lg lg:hidden animate-fadeIn">
            <div className="flex flex-col gap-2 px-6 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors hover:bg-slate-100 hover:text-[var(--primary)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setModalOpen(true);
                  }}
                  className="rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-700"
                >
                  2026 Report
                </button>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-[var(--secondary)] py-3 text-center text-xs font-bold uppercase text-white shadow-md"
                >
                  Book Briefing
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Brochure Request Modal */}
      <BrochureModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
