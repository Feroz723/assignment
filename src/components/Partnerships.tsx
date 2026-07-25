"use client";

import { useState } from "react";
import { partnerCategories, partnersList } from "@/data/site-data";

export default function Partnerships() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPartners =
    activeCategory === "all"
      ? partnersList
      : partnersList.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary-light)]">
            Enterprise Client Network
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl mt-1">
            Trusted By Global Enterprise Leaders
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Collaborating with Fortune 500 enterprises to drive workforce transformation at scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {partnerCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-[var(--primary)] text-white shadow"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-3">
                <div className={`h-4 w-4 rounded-full bg-gradient-to-tr ${partner.color} shadow-sm`} />
                <span className="text-base font-extrabold text-slate-800 group-hover:text-[var(--primary)] transition-colors">
                  {partner.name}
                </span>
              </div>

              <p className="mt-3 text-xs text-slate-500 leading-relaxed font-medium">
                {partner.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
