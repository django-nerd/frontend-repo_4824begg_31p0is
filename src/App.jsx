import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturesGrid from './components/FeaturesGrid'
import Roadmap from './components/Roadmap'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesGrid />
      <Roadmap />
      <CallToAction />
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} FancyStore Cloud. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#features" className="hover:text-slate-900">Features</a>
              <a href="#roadmap" className="hover:text-slate-900">Roadmap</a>
              <a href="#" className="hover:text-slate-900">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
