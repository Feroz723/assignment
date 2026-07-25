"use client";

import { useState } from "react";
import { testimonials } from "@/data/site-data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeItem = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--primary-light)] bg-blue-50 rounded-full mb-3">
            Client Success Stories
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Trusted By Enterprise Leaders
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Hear how Accredian Enterprise solutions transformed workforce capabilities across top organizations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {/* Quote icon background */}
            <div className="absolute top-6 right-8 text-8xl font-serif font-black text-slate-100 select-none">
              &ldquo;
            </div>

            <div className="relative z-10 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(activeItem.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
                &ldquo;{activeItem.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-xl font-bold text-white shadow-md">
                    {activeItem.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{activeItem.author}</h3>
                    <p className="text-xs text-slate-500">{activeItem.role} &bull; <strong className="text-slate-700">{activeItem.company}</strong></p>
                  </div>
                </div>

                <span className="rounded-full bg-orange-50 border border-orange-200 px-3.5 py-1 text-xs font-bold text-[var(--secondary)]">
                  {activeItem.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8 px-4">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-[var(--secondary)]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Previous testimonial"
              >
                &larr;
              </button>
              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Next testimonial"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
