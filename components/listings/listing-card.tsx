import Link from "next/link"
import { Building2, MapPin, ArrowRight, Maximize2, BedDouble, Calendar } from "lucide-react"
import { type Listing } from "@/lib/data/listings"

export function ListingCard({ listing, showNew = false }: { listing: Listing; showNew?: boolean }) {
  const formattedPrice = listing.status === "oddaja"
    ? `${listing.price.toLocaleString("sl-SI")} €/mesec`
    : `${listing.price.toLocaleString("sl-SI")} €`

  return (
    <Link href={`/oglasi/${listing.id}`} className="group block">
      <div className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        {/* Image placeholder */}
        <div className="relative h-56 bg-secondary flex items-center justify-center overflow-hidden">
          <Building2 className="w-10 h-10 text-muted-foreground/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {showNew && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-[11px] font-semibold uppercase tracking-wider rounded-md">
              Novo
            </span>
          )}
          <span
            className={`absolute top-4 right-4 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md ${
              listing.status === "prodaja"
                ? "bg-accent text-accent-foreground"
                : "bg-emerald-800 text-white"
            }`}
          >
            {listing.status === "prodaja" ? "Prodaja" : "Oddaja"}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-lg font-bold text-primary font-serif">{formattedPrice}</p>
          </div>
          <h3 className="text-[15px] font-semibold text-foreground mt-1.5 line-clamp-1 group-hover:text-primary transition-colors">
            {listing.title}
          </h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
            <MapPin className="w-3.5 h-3.5" /> {listing.region}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" /> {listing.area} m&sup2;
            </span>
            {listing.rooms > 0 && (
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5" /> {listing.rooms} sob
              </span>
            )}
            {listing.yearBuilt > 0 && (
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {listing.yearBuilt}
              </span>
            )}
          </div>

          <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            Oglej si <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </Link>
  )
}
