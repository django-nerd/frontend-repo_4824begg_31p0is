import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-900 py-16">
      <div className="absolute inset-0 -z-0 opacity-30" aria-hidden="true">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-400/20 via-cyan-400/10 to-indigo-500/20" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Be our design partner</h3>
            <p className="mt-2 max-w-2xl text-white/80">
              Join as an early store and get a full year free. Help shape the future of vertical retail SaaS.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow hover:bg-slate-100"
            >
              Get started
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+910000000000"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20"
            >
              <Phone className="h-5 w-5" />
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
