import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { listings } from "@/lib/data/listings"
import { ListingCard } from "@/components/listings/listing-card"

export function ListingsSection() {
  const [hero, second, ...rest] = listings.slice(0, 6)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-3">
              Nepremičnine
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Izpostavljeni oglasi
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Izbor najnovejših in najbolj priljubljenih nepremičnin
            </p>
          </div>
          <Link
            href="/oglasi"
            className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-blue-dark hover:gap-3 transition-all"
          >
            Vsi oglasi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Top row: 2/3 + 1/3 */}
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

        <div className="mt-8 md:hidden text-center">
          <Link href="/oglasi" className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary">
            Vsi oglasi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
