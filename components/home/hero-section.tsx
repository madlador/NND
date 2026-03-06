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
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d1821]/70" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-32">
        {/* Label */}
        <p
          className="text-[11px] uppercase tracking-[0.3em] font-semibold text-white/60 mb-5 animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          Vse o nepremičninah na enem mestu
        </p>

        {/* Heading */}
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5 max-w-3xl animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Vaš vodnik po<br />
          <span className="text-primary">nepremičninskem</span> trgu
        </h1>

        <p
          className="text-base text-white/60 max-w-md leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Baza znanja, aktualne novice in preverjena ponudba na enem mestu.
        </p>

        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="max-w-2xl animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="flex items-stretch bg-white rounded overflow-hidden shadow-lg">
            <div className="flex items-center flex-1 px-5 gap-3">
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Iščem stanovanje v Ljubljani..."
                className="flex-1 py-4 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 px-7 py-4 bg-primary text-white text-sm font-semibold hover:bg-blue-dark transition-colors shrink-0 cursor-pointer"
            >
              Iskanje <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick filters */}
          <div className="mt-4 flex flex-wrap gap-2">
            {quickFilters.map((f) => (
              <button
                key={f.label}
                onClick={() => router.push(`/oglasi?${f.param}`)}
                className="px-4 py-2 rounded text-[12px] font-semibold text-white/60 border border-white/20 hover:border-white/50 hover:text-white transition-all cursor-pointer"
              >
                {f.label}
              </button>
            ))}
          </div>
        </form>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
