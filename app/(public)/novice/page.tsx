"use client"

import { useState, useMemo } from "react"
import { news, newsCategoryLabels } from "@/lib/data/news"
import { NewsCard } from "@/components/news/news-card"

const allCategories = ["vse", "trg", "zakonodaja", "nasveti", "investicije"] as const

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("vse")

  const filtered = useMemo(() => {
    if (activeCategory === "vse") return news
    return news.filter((n) => n.category === activeCategory)
  }, [activeCategory])

  const featured = filtered.find((n) => n.isFeatured)
  const rest = filtered.filter((n) => !n.isFeatured || !featured)

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-3">
          Novice
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground">S trga nepremičnin</h1>
        <p className="text-muted-foreground mt-3 max-w-lg">
          Aktualno dogajanje na slovenskem nepremičninskem trgu
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded text-[13px] font-semibold transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat === "vse" ? "Vse" : newsCategoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {featured && (
            <div className="mb-8">
              <NewsCard item={featured} featured />
            </div>
          )}

          {rest.length === 0 && !featured ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Ni najdenih novic za izbrano kategorijo.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featured ? rest.filter(n => n.id !== featured.id) : rest).map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
