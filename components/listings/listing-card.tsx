import Link from "next/link"
import { Building2, MapPin, ArrowRight, Maximize2, BedDouble, Calendar } from "lucide-react"
import { type Listing } from "@/lib/data/listings"

export function ListingCard({
  listing,
  showNew = false,
  large = false,
}: {
  listing: Listing
  showNew?: boolean
  large?: boolean
}) {
  const formattedPrice =
    listing.status === "oddaja"
      ? `${listing.price.toLocaleString("sl-SI")} €/mesec`
      : `${listing.price.toLocaleString("sl-SI")} €`

  const isRent = listing.status === "oddaja"

  if (large) {
    return (
      <Link href={`/oglasi/${listing.id}`} className="group block h-full">
        <article className="bg-card rounded-lg shadow-[0_0_2px_0_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,101,203,0.12)] border border-border overflow-hidden h-full flex flex-col transition-all duration-300">
          {/* Image placeholder */}
          <div className="relative h-64 bg-secondary flex items-center justify-center overflow-hidden">
            <Building2 className="w-14 h-14 text-muted-foreground/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              {showNew && (
                <span className="px-3 py-1 rounded bg-primary text-white text-[11px] font-semibold uppercase tracking-wide">
                  Novo
                </span>
              )}
              <span className={`px-3 py-1 rounded text-[11px] font-semibold uppercase tracking-wide ${isRent ? "bg-sage text-white" : "bg-[#0d1821] text-white"}`}>
                {isRent ? "Oddaja" : "Prodaja"}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <p className="font-serif text-2xl font-bold text-primary">{formattedPrice}</p>
            <h3 className="text-base font-semibold text-foreground mt-1.5 group-hover:text-primary transition-colors">
              {listing.title}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-2">
              <MapPin className="w-4 h-4 shrink-0" /> {listing.region}
            </p>
            <div className="flex items-center gap-5 mt-5 pt-5 border-t border-border">
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4" /> {listing.area} m²
              </span>
              {listing.rooms > 0 && (
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4" /> {listing.rooms} sob
                </span>
              )}
              {listing.yearBuilt > 0 && (
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {listing.yearBuilt}
                </span>
              )}
              <span className="ml-auto flex items-center gap-1.5 text-[13px] font-semibold text-primary opacity-0 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
                Oglej si <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/oglasi/${listing.id}`} className="group block h-full">
      <article className="bg-card rounded-lg shadow-[0_0_2px_0_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,101,203,0.12)] border border-border overflow-hidden h-full flex flex-col transition-all duration-300">
        {/* Image placeholder */}
        <div className="relative h-48 bg-secondary flex items-center justify-center overflow-hidden">
          <Building2 className="w-10 h-10 text-muted-foreground/15" />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {showNew && (
              <span className="px-2.5 py-1 rounded bg-primary text-white text-[10px] font-semibold uppercase tracking-wide">
                Novo
              </span>
            )}
            <span className={`px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wide ${isRent ? "bg-sage text-white" : "bg-[#0d1821] text-white"}`}>
              {isRent ? "Oddaja" : "Prodaja"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <p className="font-serif text-lg font-bold text-primary">{formattedPrice}</p>
          <h3 className="text-[15px] font-semibold text-foreground mt-1.5 line-clamp-1 group-hover:text-primary transition-colors">
            {listing.title}
          </h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
            <MapPin className="w-3.5 h-3.5 shrink-0" /> {listing.region}
          </p>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5" /> {listing.area} m²
            </span>
            {listing.rooms > 0 && (
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5" /> {listing.rooms}
              </span>
            )}
            <span className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Oglej si <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
