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
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top border accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-9 h-9">
                <div className="absolute inset-0 rounded-md bg-primary/20" />
                <span className="font-serif text-lg font-bold text-primary relative">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[15px] font-bold tracking-tight leading-none text-accent-foreground">
                  Nepremičnine
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium leading-none mt-0.5 text-primary">
                  na dlani
                </span>
              </div>
            </Link>
            <p className="text-sm text-stone-400 max-w-xs leading-relaxed mt-5">
              Baza znanja, aktualne novice in preverjena ponudba
              nepremičnin v Sloveniji.
            </p>
          </div>

          {/* Portal */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-500 mb-5">
              Portal
            </h4>
            <ul className="flex flex-col gap-3">
              {portalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-500 mb-5">
              Informacije
            </h4>
            <ul className="flex flex-col gap-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Nepremičnine na dlani. Vse pravice pridržane.
          </p>
          <p className="text-xs text-stone-600">
            Ljubljana, Slovenija
          </p>
        </div>
      </div>
    </footer>
  )
}
