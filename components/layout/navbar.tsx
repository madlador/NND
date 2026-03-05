"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/znanje", label: "Znanje" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? "bg-background/96 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3.5 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col leading-none">
            <span className={`font-serif text-[17px] font-bold tracking-tight ${showSolid ? "text-foreground" : "text-white"}`}>
              Nepremičnine
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] font-semibold text-primary mt-0.5">
              na dlani
            </span>
          </div>
          <div className={`w-px h-7 ${showSolid ? "bg-border" : "bg-white/20"} ml-1`} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                pathname === link.href
                  ? "text-primary"
                  : showSolid
                    ? "text-foreground/55 hover:text-foreground"
                    : "text-white/55 hover:text-white"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-5 right-5 h-px bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className={`hidden sm:flex items-center gap-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] border transition-colors cursor-pointer ${
              showSolid
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-white/30 text-white/80 hover:border-white hover:text-white"
            }`}
          >
            <Sparkles className="w-3 h-3" />
            AI Pomočnik
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden flex items-center justify-center w-9 h-9 transition-colors cursor-pointer ${
              showSolid ? "text-foreground" : "text-white"
            }`}
            aria-label="Meni"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-0 py-3 text-sm font-semibold uppercase tracking-[0.1em] border-b border-border transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onOpenChat() }}
              className="mt-4 flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary text-sm font-semibold uppercase tracking-[0.1em] cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI Pomočnik
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
