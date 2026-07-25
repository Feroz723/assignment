import { trackRecord } from "@/data/site-data";

export default function TrackRecord() {
  return (
    <section className="relative z-20 -mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">
            Impact in Numbers
          </span>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mt-1">
            {trackRecord.title}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {trackRecord.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trackRecord.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50/80 p-6 text-center transition-all hover:bg-white hover:shadow-lg hover:border-slate-200 group"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="text-3xl font-extrabold text-[var(--primary)] sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-bold text-slate-900">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-slate-500">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
