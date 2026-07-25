"use client";

import { footerLinks, socialLinks, officesLocation } from "@/data/site-data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm">
      {/* Global Offices Strip */}
      <div className="border-b border-white/10 py-10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center sm:text-left">
            🌍 Accredian Enterprise Global Locations
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {officesLocation.map((office) => (
              <div key={office.city} className="space-y-1">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>📍</span> {office.city}, {office.country}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {office.address}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--secondary)] font-extrabold text-white shadow-md">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white">
                  Accredian
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--secondary)] -mt-1">
                  Enterprise Platform
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Accredian Enterprise is the premier capability building platform empowering global organizations to upskill workforce talent in Generative AI, Strategic Product, and Data Science.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300 pt-2">
              <span className="rounded bg-white/10 px-2 py-1">🔒 SOC 2 Type II</span>
              <span className="rounded bg-white/10 px-2 py-1">ISO 27001</span>
              <span className="rounded bg-white/10 px-2 py-1">GDPR Compliant</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <span className="text-xs font-bold">{link.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Enterprise Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Enterprise Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.solutions.map((item) => (
                <li key={item}>
                  <a href="#domains" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CAT Methodology */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Methodology
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.methodology.map((item) => (
                <li key={item}>
                  <a href="#framework" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Resources & Security
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerLinks.resources.map((item) => (
                <li key={item}>
                  <a href="#faq" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white font-bold hover:text-[var(--secondary)] transition-colors"
            >
              Back to top &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
