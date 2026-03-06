"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/znanje", label: "Vse o nepremičninah" },
  { href: "/novice", label: "Novice" },
  { href: "/oglasi", label: "Oglasi" },
]

export function Navbar({ onOpenChat }: { onOpenChat: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showSolid = !isHome || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        showSolid
          ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className={`font-serif text-[18px] font-bold tracking-tight ${showSolid ? "text-foreground" : "text-white"}`}>
            Nepremičnine
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary mt-0.5">
            na dlani
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-wide transition-colors rounded ${
                pathname === link.href
                  ? "text-primary"
                  : showSolid
                    ? "text-foreground/70 hover:text-primary"
                    : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded text-[13px] font-semibold bg-primary text-white hover:bg-blue-dark transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Pomočnik
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden flex items-center justify-center w-9 h-9 rounded transition-colors cursor-pointer ${
              showSolid ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
            }`}
            aria-label="Meni"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded text-sm font-semibold uppercase tracking-wide transition-colors ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onOpenChat() }}
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 rounded bg-primary text-white text-sm font-semibold cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              AI Pomočnik
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
