import { programStructures } from "@/data/site-data";

export default function CourseSegmentation() {
  return (
    <section id="courses" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--primary-light)] bg-blue-50 rounded-full mb-3">
            Program Structure
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {programStructures.title}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {programStructures.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {programStructures.categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:border-slate-300 group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  {cat.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--primary)] transition-colors">
                  {cat.type}
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  {cat.description}
                </p>

                <div className="mt-6 space-y-2">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 border border-slate-100"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
                >
                  Configure program &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
