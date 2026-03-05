import Link from "next/link"
import { MapPin, ArrowRight, Maximize2, BedDouble, Calendar } from "lucide-react"
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
      ? `${listing.price.toLocaleString("sl-SI")} €/mes.`
      : `${listing.price.toLocaleString("sl-SI")} €`

  const isRent = listing.status === "oddaja"

  if (large) {
    return (
      <Link href={`/oglasi/${listing.id}`} className="group block h-full">
        <article className="bg-card border border-border h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.1)] hover:border-primary/20">
          {/* Large image placeholder — architectural pattern */}
          <div className="relative h-72 bg-[#0C1220] flex items-end overflow-hidden">
            {/* Geometric grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(#B8860B 1px, transparent 1px), linear-gradient(90deg, #B8860B 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            {/* Price as large background element */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[5rem] font-bold text-white/[0.04] select-none whitespace-nowrap">
              {formattedPrice}
            </span>
            {/* Badges */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
              {showNew && (
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.15em]">
                  Novo
                </span>
              )}
              <span
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${
                  isRent ? "bg-emerald-700 text-white" : "bg-white/10 text-white/80"
                }`}
              >
                {isRent ? "Oddaja" : "Prodaja"}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-7 flex flex-col flex-1">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <p className="font-serif text-2xl font-bold text-primary">{formattedPrice}</p>
            </div>
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
              {listing.title}
            </h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2 font-light">
              <MapPin className="w-3.5 h-3.5 shrink-0" /> {listing.region}
            </p>
            <div className="flex items-center gap-5 mt-5 pt-5 border-t border-border">
              <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-light">
                <Maximize2 className="w-3.5 h-3.5" /> {listing.area} m²
              </span>
              {listing.rooms > 0 && (
                <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-light">
                  <BedDouble className="w-3.5 h-3.5" /> {listing.rooms} sob
                </span>
              )}
              {listing.yearBuilt > 0 && (
                <span className="text-xs text-muted-foreground flex items-center gap-1.5 font-light">
                  <Calendar className="w-3.5 h-3.5" /> {listing.yearBuilt}
                </span>
              )}
              <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
                Oglej si <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/oglasi/${listing.id}`} className="group block h-full">
      <article className="bg-card border border-border h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-primary/20">
        {/* Image placeholder */}
        <div className="relative h-44 bg-[#0C1220] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#B8860B 1px, transparent 1px), linear-gradient(90deg, #B8860B 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <span className="font-serif text-[2.5rem] font-bold text-white/[0.05] select-none">
            NND
          </span>
          <div className="absolute top-4 left-4 flex items-center gap-2">
            {showNew && (
              <span className="px-2.5 py-1 bg-primary text-white text-[9px] font-bold uppercase tracking-[0.15em]">
                Novo
              </span>
            )}
            <span
              className={`px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] ${
                isRent ? "bg-emerald-700 text-white" : "bg-white/10 text-white/70"
              }`}
            >
              {isRent ? "Oddaja" : "Prodaja"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <p className="font-serif text-lg font-bold text-primary">{formattedPrice}</p>
          <h3 className="text-sm font-semibold text-foreground mt-1.5 line-clamp-1 group-hover:text-primary transition-colors">
            {listing.title}
          </h3>
          <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2 font-light">
            <MapPin className="w-3.5 h-3.5 shrink-0" /> {listing.region}
          </p>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground flex items-center gap-1 font-light">
              <Maximize2 className="w-3 h-3" /> {listing.area} m²
            </span>
            {listing.rooms > 0 && (
              <span className="text-xs text-muted-foreground flex items-center gap-1 font-light">
                <BedDouble className="w-3 h-3" /> {listing.rooms}
              </span>
            )}
            <span className="ml-auto flex items-center gap-1.5 text-[9px] font-bold text-primary uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity">
              Oglej si <ArrowRight className="w-2.5 h-2.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
