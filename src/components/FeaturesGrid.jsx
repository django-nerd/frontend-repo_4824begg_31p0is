import React from 'react';
import { Warehouse, Store, CreditCard, Users, BarChart3, Megaphone } from 'lucide-react';

const features = [
  {
    icon: Warehouse,
    title: 'Centralized Inventory',
    desc: 'Track stock in real-time across branches with low-stock alerts and variants.'
  },
  {
    icon: Store,
    title: 'Multi-Store & Branches',
    desc: 'Manage multiple locations, transfer stock, and view per-branch performance.'
  },
  {
    icon: CreditCard,
    title: 'Smart POS',
    desc: 'Fast in-store checkout with discounts, holds, returns, and barcode support.'
  },
  {
    icon: Users,
    title: 'CRM & Loyalty',
    desc: 'Customer profiles, purchase history, segments, and points-based rewards.'
  },
  {
    icon: Megaphone,
    title: 'Marketing Suite',
    desc: 'WhatsApp campaigns, coupons, and hyperlocal audience tools built-in.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Sales reports, top-sellers, and MRR insights with export-ready visuals.'
  }
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for modern retail operations
          </h2>
          <p className="mt-4 text-slate-600">
            Everything fancy-item and gifting stores need—from back office to storefront—in one secure multi-tenant platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
