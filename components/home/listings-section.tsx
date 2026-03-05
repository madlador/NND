import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { listings } from "@/lib/data/listings"
import { ListingCard } from "@/components/listings/listing-card"

export function ListingsSection() {
  const [hero, second, ...rest] = listings.slice(0, 6)

  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-8">
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-primary inline-block" />
              004 — Nepremičnine
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Izpostavljeni oglasi
            </h2>
          </div>
          <Link
            href="/oglasi"
            className="hidden md:flex items-center gap-2 text-[11px] font-semibold text-primary uppercase tracking-[0.15em] hover:gap-3.5 transition-all"
          >
            Vsi oglasi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Top row: 2/3 + 1/3 split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-8">
            <ListingCard listing={hero} showNew={hero.isNew} large />
          </div>
          <div className="lg:col-span-4">
            <ListingCard listing={second} showNew={second.isNew} />
          </div>
        </div>

        {/* Bottom row: 4 equal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((listing) => (
            <ListingCard key={listing.id} listing={listing} showNew={listing.isNew} />
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link href="/oglasi" className="inline-flex items-center gap-2 text-[11px] font-semibold text-primary uppercase tracking-[0.15em]">
            Vsi oglasi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
