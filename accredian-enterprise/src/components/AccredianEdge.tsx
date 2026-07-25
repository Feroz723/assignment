import { edgeComparison } from "@/data/site-data";

export default function AccredianEdge() {
  return (
    <section id="edge" className="py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[var(--secondary)] bg-orange-50 rounded-full mb-3 border border-orange-200">
            The Accredian Advantage
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {edgeComparison.title}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {edgeComparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider w-1/3">
                    Capability Vector
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider w-1/3 text-slate-400">
                    Traditional E-Learning / LMS
                  </th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider w-1/3 bg-[var(--primary)] text-white">
                    ✨ Accredian Enterprise Platform
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {edgeComparison.columns.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="py-5 px-6 font-bold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 text-slate-500 font-medium bg-red-50/20">
                      <span className="text-red-500 font-bold mr-2">✕</span>
                      {row.traditional}
                    </td>
                    <td className="py-5 px-6 text-slate-900 font-semibold bg-emerald-50/40 border-l-2 border-[var(--primary)]">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      {row.accredian}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
