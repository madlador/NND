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
    <footer className="bg-[#0d1821] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block group mb-5">
              <p className="font-serif text-xl font-bold text-white tracking-tight">
                Nepremičnine
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary mt-0.5">
                na dlani
              </p>
            </Link>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Baza znanja, aktualne novice in preverjena ponudba
              nepremičnin v Sloveniji.
            </p>
          </div>

          {/* Portal */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/40 mb-5">
              Portal
            </h4>
            <ul className="flex flex-col gap-3">
              {portalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/40 mb-5">
              Informacije
            </h4>
            <ul className="flex flex-col gap-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Nepremičnine na dlani. Vse pravice pridržane.
          </p>
          <p className="text-xs text-white/25">
            Ljubljana, Slovenija
          </p>
        </div>
      </div>
    </footer>
  )
}
