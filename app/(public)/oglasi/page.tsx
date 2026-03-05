"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { Search, LayoutGrid, List, ChevronLeft, ChevronRight, Building2, MapPin, Maximize2, BedDouble, Calendar, ArrowRight } from "lucide-react"
import { listings } from "@/lib/data/listings"
import { ListingCard } from "@/components/listings/listing-card"
import Link from "next/link"

const regions = ["Vse", "Ljubljana", "Maribor", "Koper", "Celje", "Kranj", "Novo Mesto"]
const types = [
  { value: "vse", label: "Vse" },
  { value: "stanovanje", label: "Stanovanje" },
  { value: "hisa", label: "Hiša" },
  { value: "zemljisce", label: "Zemljišče" },
  { value: "poslovni", label: "Poslovni prostor" },
]
const statuses = [
  { value: "vse", label: "Vse" },
  { value: "prodaja", label: "Prodaja" },
  { value: "oddaja", label: "Oddaja" },
]

const ITEMS_PER_PAGE = 9

export default function ListingsPage() {
  const searchParams = useSearchParams()

  const [statusFilter, setStatusFilter] = useState(searchParams.get("status") || "vse")
  const [typeFilter, setTypeFilter] = useState(searchParams.get("type") || "vse")
  const [regionFilter, setRegionFilter] = useState("Vse")
  const [priceMin, setPriceMin] = useState("")
  const [priceMax, setPriceMax] = useState("")
  const [areaMin, setAreaMin] = useState("")
  const [areaMax, setAreaMax] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (statusFilter !== "vse" && l.status !== statusFilter) return false
      if (typeFilter !== "vse" && l.type !== typeFilter) return false
      if (regionFilter !== "Vse" && l.region !== regionFilter) return false
      if (priceMin && l.price < Number(priceMin)) return false
      if (priceMax && l.price > Number(priceMax)) return false
      if (areaMin && l.area < Number(areaMin)) return false
      if (areaMax && l.area > Number(areaMax)) return false
      return true
    })
  }, [statusFilter, typeFilter, regionFilter, priceMin, priceMax, areaMin, areaMax])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[9px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 flex items-center gap-3">
          <span className="w-6 h-px bg-primary inline-block" />
          Nepremičnine
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">Oglasi</h1>
        <p className="text-muted-foreground mt-3 max-w-lg font-light">
          Poiščite svojo idealno nepremičnino
        </p>

        {/* Filter bar */}
        <div className="mt-10 bg-card rounded-lg border border-border p-5 lg:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <FilterSelect label="Status" value={statusFilter} onChange={(v) => { setStatusFilter(v); setPage(1) }} options={statuses} />
            <FilterSelect label="Tip" value={typeFilter} onChange={(v) => { setTypeFilter(v); setPage(1) }} options={types} />
            <FilterSelect label="Regija" value={regionFilter} onChange={(v) => { setRegionFilter(v); setPage(1) }} options={regions.map(r => ({ value: r, label: r }))} />
            <div>
              <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Cena (&euro;)</label>
              <div className="flex items-center gap-1.5">
                <input type="number" placeholder="od" value={priceMin} onChange={(e) => { setPriceMin(e.target.value); setPage(1) }} className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                <span className="text-muted-foreground text-xs">-</span>
                <input type="number" placeholder="do" value={priceMax} onChange={(e) => { setPriceMax(e.target.value); setPage(1) }} className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
            <div>
              <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">{"Kvadratura (m²)"}</label>
              <div className="flex items-center gap-1.5">
                <input type="number" placeholder="od" value={areaMin} onChange={(e) => { setAreaMin(e.target.value); setPage(1) }} className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
                <span className="text-muted-foreground text-xs">-</span>
                <input type="number" placeholder="do" value={areaMax} onChange={(e) => { setAreaMax(e.target.value); setPage(1) }} className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setStatusFilter("vse"); setTypeFilter("vse"); setRegionFilter("Vse")
                  setPriceMin(""); setPriceMax(""); setAreaMin(""); setAreaMax("")
                  setPage(1)
                }}
                className="w-full px-4 py-2.5 bg-accent text-accent-foreground text-[13px] font-semibold uppercase tracking-wider rounded-md hover:bg-navy-light transition-colors cursor-pointer"
              >
                Ponastavi
              </button>
            </div>
          </div>
        </div>

        {/* Results header */}
        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Najdenih <span className="font-semibold text-foreground">{filtered.length}</span> oglasov
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-md transition-colors cursor-pointer ${viewMode === "grid" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-secondary"}`}
              aria-label="Mrežni prikaz"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2.5 rounded-md transition-colors cursor-pointer ${viewMode === "list" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-secondary"}`}
              aria-label="Seznamski prikaz"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results */}
        {paged.length === 0 ? (
          <div className="text-center py-20">
            <Building2 className="w-12 h-12 text-muted-foreground/20 mx-auto mb-3" />
            <p className="text-muted-foreground">Ni najdenih oglasov za izbrane kriterije.</p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paged.map((listing) => (
              <ListingCard key={listing.id} listing={listing} showNew={listing.isNew} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col gap-4">
            {paged.map((listing) => (
              <Link key={listing.id} href={`/oglasi/${listing.id}`} className="group block">
                <div className="flex flex-col sm:flex-row bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <div className="w-full sm:w-48 h-40 sm:h-auto bg-secondary flex items-center justify-center shrink-0">
                    <Building2 className="w-8 h-8 text-muted-foreground/20" />
                  </div>
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-bold text-primary font-serif">
                          {listing.status === "oddaja"
                            ? `${listing.price.toLocaleString("sl-SI")} €/mesec`
                            : `${listing.price.toLocaleString("sl-SI")} €`}
                        </p>
                        <h3 className="text-sm font-semibold text-foreground mt-0.5 group-hover:text-primary transition-colors">
                          {listing.title}
                        </h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-1.5">
                          <MapPin className="w-3.5 h-3.5" /> {listing.region} &middot; {listing.address}
                        </p>
                      </div>
                      <span className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md shrink-0 ${listing.status === "prodaja" ? "bg-accent text-accent-foreground" : "bg-emerald-800 text-white"}`}>
                        {listing.status === "prodaja" ? "Prodaja" : "Oddaja"}
                      </span>
                    </div>
                    <div className="flex items-center gap-5 mt-3">
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
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-1">{listing.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="p-2.5 rounded-md text-muted-foreground hover:bg-secondary disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
              aria-label="Prejšnja stran"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-10 h-10 rounded-md text-sm font-medium transition-colors cursor-pointer ${p === page ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-secondary"}`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="p-2.5 rounded-md text-muted-foreground hover:bg-secondary disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
              aria-label="Naslednja stran"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function FilterSelect({ label, value, onChange, options }: {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div>
      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2.5 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}
