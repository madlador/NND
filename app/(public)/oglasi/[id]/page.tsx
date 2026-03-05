"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { use } from "react"
import { ChevronRight, MapPin, Maximize2, BedDouble, Calendar, Building2, Zap, Wrench, Share2, Heart } from "lucide-react"
import { listings } from "@/lib/data/listings"
import { useState } from "react"

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const listing = listings.find((l) => l.id === id)
  if (!listing) notFound()

  const formattedPrice = listing.status === "oddaja"
    ? `${listing.price.toLocaleString("sl-SI")} €/mesec`
    : `${listing.price.toLocaleString("sl-SI")} €`

  const typeLabels: Record<string, string> = {
    stanovanje: "Stanovanje",
    hisa: "Hiša",
    zemljisce: "Zemljišče",
    poslovni: "Poslovni prostor",
  }

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-amber transition-colors">Domov</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/oglasi" className="hover:text-amber transition-colors">Oglasi</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground truncate max-w-[200px]">{listing.title}</span>
        </nav>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8">
          <div className="md:col-span-3 h-64 md:h-96 bg-secondary rounded-xl flex items-center justify-center">
            <Building2 className="w-16 h-16 text-muted-foreground/20" />
          </div>
          <div className="hidden md:flex flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-1 bg-secondary rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-muted-foreground/20" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg ${listing.status === "prodaja" ? "bg-accent text-accent-foreground" : "bg-teal text-primary-foreground"}`}>
                {listing.status === "prodaja" ? "Prodaja" : "Oddaja"}
              </span>
              <span className="text-xs text-muted-foreground">{typeLabels[listing.type]}</span>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{listing.title}</h1>
            <p className="text-muted-foreground flex items-center gap-1 mt-2">
              <MapPin className="w-4 h-4" /> {listing.address}, {listing.region} {listing.postalCode}
            </p>

            {/* Stats grid */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatBox label="Cena" value={formattedPrice} icon={<span className="text-amber font-bold text-lg">€</span>} />
              <StatBox label="Kvadratura" value={`${listing.area} m²`} icon={<Maximize2 className="w-5 h-5 text-amber" />} />
              {listing.rooms > 0 && (
                <StatBox label="Sobe" value={String(listing.rooms)} icon={<BedDouble className="w-5 h-5 text-amber" />} />
              )}
              {listing.yearBuilt > 0 && (
                <StatBox label="Leto izgradnje" value={String(listing.yearBuilt)} icon={<Calendar className="w-5 h-5 text-amber" />} />
              )}
              <StatBox label="Stanje" value={listing.condition} icon={<Wrench className="w-5 h-5 text-amber" />} />
              <StatBox label="Energijski razred" value={listing.energyClass} icon={<Zap className="w-5 h-5 text-amber" />} />
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4">Opis</h2>
              {listing.fullDescription.split("\n\n").map((p, i) => (
                <p key={i} className="text-foreground leading-relaxed mb-4 text-[15px]">{p}</p>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <h2 className="font-serif text-xl font-bold text-foreground mb-4">Lokacija</h2>
              <div className="h-64 bg-secondary rounded-xl flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Lokacija na zemljevidu</p>
                  <p className="text-xs text-muted-foreground mt-1">{listing.address}, {listing.region}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-24">
              <ContactForm listingTitle={listing.title} />
              <div className="mt-4 flex items-center gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer">
                  <Share2 className="w-4 h-4" /> Deli
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors cursor-pointer">
                  <Heart className="w-4 h-4" /> Shrani
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatBox({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-amber-light flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  )
}

function ContactForm({ listingTitle }: { listingTitle: string }) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="bg-card rounded-xl border border-border p-6 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-semibold text-foreground">Sporočilo poslano!</p>
        <p className="text-sm text-muted-foreground mt-1">Odgovorili vam bomo v najkrajšem možnem času.</p>
      </div>
    )
  }

  return (
    <div className="bg-card rounded-xl border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
      <h3 className="font-semibold text-foreground mb-4">Zanima me ta oglas</h3>
      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
        className="flex flex-col gap-3"
      >
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Ime *</label>
          <input
            type="text"
            required
            placeholder="Vaše ime"
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-amber/40"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Email *</label>
          <input
            type="email"
            required
            placeholder="email@primer.si"
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-amber/40"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Telefon</label>
          <input
            type="tel"
            placeholder="+386 ..."
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-amber/40"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Sporočilo *</label>
          <textarea
            required
            rows={3}
            defaultValue={`Pozdravljeni, zanima me oglas: ${listingTitle}`}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 bg-amber text-primary-foreground text-sm font-semibold rounded-lg hover:bg-amber/90 transition-colors cursor-pointer mt-1"
        >
          Pošlji povpraševanje
        </button>
      </form>
    </div>
  )
}
