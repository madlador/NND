"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { articles, categoryLabels } from "@/lib/data/articles"
import { ArticleCard } from "@/components/knowledge/article-card"

const allCategories = ["vse", "nakup", "prodaja", "najem", "kredit", "davki", "postopki", "pravni"] as const

export default function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState<string>("vse")
  const [searchQuery, setSearchQuery] = useState("")

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { vse: articles.length }
    for (const a of articles) {
      counts[a.category] = (counts[a.category] || 0) + 1
    }
    return counts
  }, [])

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = activeCategory === "vse" || a.category === activeCategory
      const matchesSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-3">
          Baza znanja
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground">Vse o nepremičninah</h1>
        <p className="text-muted-foreground mt-3 max-w-lg">
          Baza znanja o nakupu, prodaji, najemu in vseh postopkih
        </p>

        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-56 shrink-0">
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-4 hidden lg:block">
              Kategorije
            </p>
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-gold-light text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <span>{cat === "vse" ? "Vse" : categoryLabels[cat] || cat}</span>
                  <span className={`ml-2 text-xs ${activeCategory === cat ? "text-primary/70" : "text-muted-foreground/60"}`}>
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            <div className="mb-8">
              <div className="flex items-center bg-card rounded-lg border border-border px-5 gap-3">
                <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Išči v bazi znanja..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 py-3.5 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Ni najdenih člankov za izbrane kriterije.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map((article) => (
                  <ArticleCard key={article.id} article={article} large />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
