"use client"

import { useState } from "react"
import Link from "next/link"
import { listings, type Listing } from "@/lib/data/listings"
import { Search, Plus, Pencil, Trash2, Building2 } from "lucide-react"
import { useToast } from "@/components/admin/admin-toast"

const typeLabels: Record<string, string> = {
  stanovanje: "Stanovanje",
  hisa: "Hiša",
  zemljisce: "Zemljišče",
  poslovni: "Poslovni prostor",
}

export default function AdminOglasi() {
  const [search, setSearch] = useState("")
  const [items, setItems] = useState<Listing[]>(listings)
  const [deleteModal, setDeleteModal] = useState<string | null>(null)
  const { showToast } = useToast()

  const filtered = items.filter(
    (l) =>
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.region.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((l) => l.id !== id))
    setDeleteModal(null)
    showToast("Oglas je bil uspešno izbrisan.")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Oglasi</h1>
          <p className="text-sm text-muted-foreground mt-1">Upravljajte z nepremičninskimi oglasi</p>
        </div>
        <Link
          href="/admin/oglasi/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-amber text-primary-foreground text-sm font-semibold rounded-lg hover:bg-amber/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Dodaj oglas
        </Link>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Iskanje po naslovu ali regiji..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
          />
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Slika</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Naslov</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Tip</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Status</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Cena</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Datum</th>
                <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Akcije</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((listing) => (
                <tr key={listing.id} className="border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-muted-foreground/40" />
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-foreground">{listing.title}</p>
                    <p className="text-xs text-muted-foreground">{listing.region}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-muted-foreground">{typeLabels[listing.type]}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-lg ${
                        listing.status === "prodaja"
                          ? "bg-accent text-accent-foreground"
                          : "bg-teal text-primary-foreground"
                      }`}
                    >
                      {listing.status === "prodaja" ? "Prodaja" : "Oddaja"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-semibold text-amber">
                      {listing.status === "oddaja"
                        ? `${listing.price.toLocaleString("sl-SI")} €/m`
                        : `${listing.price.toLocaleString("sl-SI")} €`}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-muted-foreground">
                      {new Date(listing.date).toLocaleDateString("sl-SI")}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/admin/oglasi/${listing.id}/edit`}
                        className="w-8 h-8 rounded-lg hover:bg-secondary flex items-center justify-center transition-colors"
                        aria-label="Uredi"
                      >
                        <Pencil className="w-4 h-4 text-muted-foreground" />
                      </Link>
                      <button
                        onClick={() => setDeleteModal(listing.id)}
                        className="w-8 h-8 rounded-lg hover:bg-destructive/10 flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Izbriši"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-sm text-muted-foreground">
                    Ni najdenih oglasov.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {deleteModal && (
        <div className="fixed inset-0 bg-foreground/30 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl border border-border p-6 max-w-sm w-full" style={{ boxShadow: "var(--shadow-card-hover)" }}>
            <h3 className="text-base font-semibold text-foreground mb-2">Potrdite brisanje</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Ali ste prepričani, da želite izbrisati ta oglas? Dejanja ni mogoče razveljaviti.
            </p>
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setDeleteModal(null)}
                className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
              >
                Prekliči
              </button>
              <button
                onClick={() => handleDelete(deleteModal)}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors cursor-pointer"
              >
                Izbriši
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
