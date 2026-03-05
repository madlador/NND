"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, Sparkles, Menu, X } from "lucide-react"

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
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showSolid = !isHome || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? "bg-card/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9">
            <div className="absolute inset-0 rounded-md bg-primary/10 group-hover:bg-primary/15 transition-colors" />
            <span className="font-serif text-lg font-bold text-primary relative">N</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-[15px] font-bold tracking-tight leading-none ${showSolid ? "text-foreground" : "text-white"}`}>
              Nepremičnine
            </span>
            <span className={`text-[11px] uppercase tracking-[0.2em] font-medium leading-none mt-0.5 ${showSolid ? "text-primary" : "text-primary"}`}>
              na dlani
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-wider transition-colors ${
                pathname === link.href
                  ? showSolid ? "text-primary" : "text-primary"
                  : showSolid
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/oglasi"
            className={`hidden sm:flex items-center justify-center w-10 h-10 rounded-md transition-colors ${
              showSolid
                ? "hover:bg-secondary text-foreground/60"
                : "hover:bg-white/10 text-white/70"
            }`}
            aria-label="Iskanje"
          >
            <Search className="w-[18px] h-[18px]" />
          </Link>
          <button
            onClick={onOpenChat}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-wider rounded-md hover:bg-gold-hover transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI Pomočnik
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-md transition-colors cursor-pointer ${
              showSolid
                ? "hover:bg-secondary text-foreground"
                : "hover:bg-white/10 text-white"
            }`}
            aria-label="Meni"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-gold-light text-primary"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false)
                onOpenChat()
              }}
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-md cursor-pointer"
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
