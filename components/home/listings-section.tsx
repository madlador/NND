import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { listings } from "@/lib/data/listings"
import { ListingCard } from "@/components/listings/listing-card"

export function ListingsSection() {
  const displayListings = listings.slice(0, 6)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-3">
              Nepremičnine
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Izpostavljeni oglasi
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Izbor najnovejših in najbolj priljubljenih nepremičnin
            </p>
          </div>
          <Link href="/oglasi" className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
            Vsi oglasi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} showNew={listing.isNew} />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/oglasi" className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary uppercase tracking-wider">
            Vsi oglasi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
