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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1220]/70 via-[#0C1220]/50 to-[#0C1220]/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center py-32">
        {/* Tagline */}
        <p className="text-[11px] uppercase tracking-[0.3em] font-semibold text-primary mb-6">
          Vaš vodnik po nepremičninskem trgu
        </p>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] text-balance">
          Vse, kar morate vedeti
          <br />
          <span className="text-primary">o nepremičninah</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/60 max-w-lg mx-auto leading-relaxed">
          Baza znanja, aktualne novice in preverjena ponudba na enem mestu.
        </p>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="mt-10 mx-auto max-w-xl">
          <div className="flex items-center bg-white/10 backdrop-blur-md rounded-lg border border-white/[0.12] p-1.5 focus-within:border-primary/40 transition-colors">
            <div className="flex items-center flex-1 px-4 gap-3">
              <Search className="w-5 h-5 text-white/40 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Iščem stanovanje v Ljubljani..."
                className="flex-1 py-3 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-gold-hover transition-colors shrink-0 cursor-pointer"
            >
              Iskanje
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Quick filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {quickFilters.map((f) => (
            <button
              key={f.label}
              onClick={() => router.push(`/oglasi?${f.param}`)}
              className="px-4 py-2 rounded-md text-[13px] font-medium text-white/50 border border-white/10 hover:border-primary/40 hover:text-primary transition-all cursor-pointer"
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
