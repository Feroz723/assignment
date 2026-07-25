import { catFrameworkSteps } from "@/data/site-data";

export default function CATFramework() {
  return (
    <section id="framework" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--accent)] bg-white/10 rounded-full mb-3">
            Implementation Methodology
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            The Accredian CAT Framework
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Our proven 3-phase methodology for diagnostic, custom-built, and transformational capability delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {catFrameworkSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-[var(--secondary)] hover:bg-white/10 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--secondary)] text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg shadow-[var(--secondary)]/30">
                    {step.step}
                  </span>
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                  {step.name}
                </h3>
                <p className="text-xs font-semibold text-[var(--accent)] mt-1">
                  {step.tagline}
                </p>

                <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Verified Deliverables:
                  </div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-200 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-semibold text-slate-400">
                <span>Phase {idx + 1} of 3</span>
                <span className="text-slate-300 font-bold">{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
