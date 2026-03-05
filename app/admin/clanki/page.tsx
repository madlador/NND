"use client"

import { useState } from "react"
import Link from "next/link"
import { articles, categoryLabels, type Article } from "@/lib/data/articles"
import { Search, Plus, Pencil, Trash2 } from "lucide-react"
import { useToast } from "@/components/admin/admin-toast"

export default function AdminClanki() {
  const [search, setSearch] = useState("")
  const [items, setItems] = useState<Article[]>(articles)
  const [deleteModal, setDeleteModal] = useState<string | null>(null)
  const { showToast } = useToast()

  const filtered = items.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((a) => a.id !== id))
    setDeleteModal(null)
    showToast("Članek je bil uspešno izbrisan.")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Članki</h1>
          <p className="text-sm text-muted-foreground mt-1">Upravljajte z bazo znanja</p>
        </div>
        <Link
          href="/admin/clanki/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-amber text-primary-foreground text-sm font-semibold rounded-lg hover:bg-amber/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Dodaj članek
        </Link>
      </div>

      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Iskanje po naslovu ali kategoriji..."
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
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Naslov</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Kategorija</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Datum</th>
                <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Akcije</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((article) => (
                <tr key={article.id} className="border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors">
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-foreground">{article.title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{article.excerpt}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-muted-foreground">{categoryLabels[article.category]}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.date).toLocaleDateString("sl-SI")}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      <Link
                        href={`/admin/clanki/${article.id}/edit`}
                        className="w-8 h-8 rounded-lg hover:bg-secondary flex items-center justify-center transition-colors"
                        aria-label="Uredi"
                      >
                        <Pencil className="w-4 h-4 text-muted-foreground" />
                      </Link>
                      <button
                        onClick={() => setDeleteModal(article.id)}
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
                  <td colSpan={4} className="text-center py-12 text-sm text-muted-foreground">
                    Ni najdenih člankov.
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
              Ali ste prepričani, da želite izbrisati ta članek? Dejanja ni mogoče razveljaviti.
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
