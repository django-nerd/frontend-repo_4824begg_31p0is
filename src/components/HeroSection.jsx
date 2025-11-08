import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6O7jF2C1QkU6sYFf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Vertical SaaS for Fancy & Gifting Stores
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Launch and run multi-store retail in days, not months
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              A true multi-tenant platform with centralized inventory, POS, CRM, hyperlocal marketing, and a beautiful storefront for every tenant—managed from one secure dashboard.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-slate-900 shadow hover:bg-slate-100"
              >
                <Rocket className="h-5 w-5" />
                Build the MVP Plan
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-800/60 px-5 py-3 font-medium text-white backdrop-blur hover:bg-slate-800"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
