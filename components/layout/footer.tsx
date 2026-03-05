import Link from "next/link"

const portalLinks = [
  { href: "/", label: "Domov" },
  { href: "/znanje", label: "Baza znanja" },
  { href: "/novice", label: "Novice" },
  { href: "/oglasi", label: "Oglasi" },
]

const infoLinks = [
  { href: "/znanje/kako-pridobiti-stanovanjski-kredit", label: "Stanovanjski kredit" },
  { href: "/znanje/koraki-do-nakupa-stanovanja", label: "Postopek nakupa" },
  { href: "/znanje/najemna-pogodba-kaj-mora-vsebovati", label: "Najemna pogodba" },
]

export function Footer() {
  return (
    <footer className="bg-[#0C1220] text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Gold accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Wordmark row */}
        <div className="py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block group">
              <p className="font-serif text-3xl font-bold text-white tracking-tight leading-none">
                Nepremičnine
              </p>
              <p className="text-[10px] uppercase tracking-[0.4em] font-semibold text-primary mt-1.5">
                na dlani
              </p>
            </Link>
            <div className="w-12 h-px bg-primary/40 my-6" />
            <p className="text-sm text-white/35 max-w-xs leading-loose font-light">
              Baza znanja, aktualne novice in preverjena ponudba
              nepremičnin v Sloveniji.
            </p>
          </div>

          {/* Portal */}
          <div className="lg:col-span-3">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-semibold text-white/30 mb-6">
              Portal
            </h4>
            <ul className="flex flex-col gap-4">
              {portalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-primary transition-colors font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="lg:col-span-4">
            <h4 className="text-[9px] uppercase tracking-[0.4em] font-semibold text-white/30 mb-6">
              Informacije
            </h4>
            <ul className="flex flex-col gap-4">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-primary transition-colors font-light tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25 font-light tracking-wide">
            &copy; {new Date().getFullYear()} Nepremičnine na dlani. Vse pravice pridržane.
          </p>
          <p className="text-[11px] text-white/20 font-light tracking-wide">
            Ljubljana, Slovenija
          </p>
        </div>
      </div>
    </footer>
  )
}
