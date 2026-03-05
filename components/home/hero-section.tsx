"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search, ArrowRight } from "lucide-react"

const quickFilters = [
  { label: "Prodaja", param: "status=prodaja" },
  { label: "Oddaja", param: "status=oddaja" },
  { label: "Stanovanje", param: "type=stanovanje" },
  { label: "Hiša", param: "type=hisa" },
  { label: "Zemljišče", param: "type=zemljisce" },
]

export function HeroSection() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/oglasi?q=${encodeURIComponent(query)}`)
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Layered overlay — heavier on left, lighter on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C1220]/95 via-[#0C1220]/70 to-[#0C1220]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1220]/98 via-transparent to-[#0C1220]/40" />

      {/* Floating label — top right */}
      <div
        className="absolute top-28 right-10 hidden lg:flex flex-col items-end gap-1.5 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/25">Slovenija</span>
        <span className="text-[9px] uppercase tracking-[0.4em] text-primary/50">Nepremičninski Trg</span>
      </div>

      {/* Main content — bottom-left editorial layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-24 lg:pb-32">

        {/* Section label with rule */}
        <div
          className="flex items-center gap-4 mb-10 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="w-8 h-px bg-primary animate-reveal-line" />
          <span className="text-[9px] uppercase tracking-[0.45em] font-semibold text-primary/80">
            001 — Vaš vodnik po nepremičninskem trgu
          </span>
        </div>

        {/* Hero heading */}
        <h1
          className="font-serif text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-bold text-white leading-[0.9] tracking-tight mb-10 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Vse, kar<br />
          morate<br />
          <em className="text-primary not-italic">vedeti.</em>
        </h1>

        {/* Subline */}
        <p
          className="text-sm text-white/45 max-w-xs leading-loose mb-10 font-light tracking-wide animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Baza znanja, aktualne novice in preverjena ponudba na enem mestu.
        </p>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="max-w-xl animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="flex items-stretch border border-white/20 bg-white/[0.05] backdrop-blur-sm focus-within:border-primary/50 hover:border-white/30 transition-colors duration-300">
            <div className="flex items-center flex-1 px-5 gap-3">
              <Search className="w-4 h-4 text-white/30 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Iščem stanovanje v Ljubljani..."
                className="flex-1 py-4 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none font-light tracking-wide"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-4 bg-primary text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-gold-hover transition-colors shrink-0 cursor-pointer"
            >
              Išči <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            {quickFilters.map((f) => (
              <button
                key={f.label}
                onClick={() => router.push(`/oglasi?${f.param}`)}
                className="px-3 py-1.5 text-[10px] font-semibold text-white/35 border border-white/10 uppercase tracking-[0.15em] hover:border-primary/50 hover:text-primary/80 transition-all cursor-pointer"
              >
                {f.label}
              </button>
            ))}
          </div>
        </form>
      </div>

      {/* Bottom fade to background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
