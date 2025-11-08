import React from 'react';
import { CheckCircle2, CircleDashed } from 'lucide-react';

const phases = [
  {
    title: 'Design Partner MVP',
    status: 'current',
    items: [
      'True multi-tenant data model',
      'Inventory + POS basics',
      'User roles for owner, manager, cashier',
      'Single storefront with live stock sync'
    ]
  },
  {
    title: 'Early Access (10 Stores)',
    status: 'next',
    items: [
      'Branch transfers & analytics',
      'CRM + loyalty points',
      'WhatsApp campaigns',
      'Themeable storefront templates'
    ]
  },
  {
    title: 'Scale & Monetize',
    status: 'later',
    items: [
      'Super Admin & billing',
      'Custom domains',
      'MRR dashboards',
      'App marketplace'
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            MVP-first roadmap
          </h2>
          <p className="mt-4 text-slate-600">
            Start with one design partner, stabilize with ten stores, then scale with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {phases.map((phase) => (
            <div key={phase.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                {phase.status === 'current' ? (
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                ) : (
                  <CircleDashed className="h-6 w-6 text-slate-400" />
                )}
                <h3 className="text-lg font-semibold text-slate-900">{phase.title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
