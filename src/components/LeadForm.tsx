"use client";

import { useState } from "react";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "10-50",
    programInterest: "Gen-AI Mastery",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          companyName: form.company,
          phone: form.phone,
          teamSize: form.teamSize,
          programInterest: form.programInterest,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit form.");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        teamSize: "10-50",
        programInterest: "Gen-AI Mastery",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--secondary)] bg-orange-50 rounded-full mb-3 border border-orange-200">
            Let&apos;s Build Your Custom Program
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Speak With an Enterprise Advisor
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-xl mx-auto">
            Fill out the form below and our corporate learning team will reach out within 24 hours to schedule a consultation.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Enquiry Submitted Successfully!</h3>
              <p className="mt-3 text-slate-600 text-sm max-w-md mx-auto">
                Thank you for reaching out to Accredian Enterprise. An Enterprise Learning Advisor has been assigned to your request and will contact you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--primary-light)] transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === "error" && (
                <div className="p-4 text-sm text-red-700 bg-red-50 rounded-xl border border-red-200 font-medium">
                  ⚠️ {errorMessage || "Something went wrong. Please try again."}
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Company / Organization *
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Enterprise Corp"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="teamSize" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Estimated Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={form.teamSize}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  >
                    <option value="1-10">1 - 10 employees</option>
                    <option value="10-50">10 - 50 employees</option>
                    <option value="50-200">50 - 200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="programInterest" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Primary Domain Interest
                  </label>
                  <select
                    id="programInterest"
                    name="programInterest"
                    value={form.programInterest}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  >
                    <option value="Gen-AI Mastery">Gen-AI & AI Mastery</option>
                    <option value="Product Innovation">Product & Innovation Hub</option>
                    <option value="Leadership Elevation">Leadership Elevation</option>
                    <option value="Tech Analytics">Tech & Data Analytics</option>
                    <option value="Operations Excellence">Operations Excellence</option>
                    <option value="Fintech Innovation">Fintech Innovation Lab</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Specific Learning Objectives / Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your team's current skill gaps, preferred timelines, or target outcomes..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-xl bg-[var(--secondary)] py-4 text-base font-bold uppercase tracking-wider text-white shadow-lg shadow-[var(--secondary)]/30 hover:bg-[var(--secondary-dark)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Submitting Enquiry...
                  </>
                ) : (
                  "Submit Enterprise Enquiry"
                )}
              </button>

              <p className="text-center text-xs text-slate-500">
                🔒 We respect your privacy. Your information will never be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
