import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { articles } from "@/lib/data/articles"
import { ArticleCard } from "@/components/knowledge/article-card"

export function KnowledgeSection() {
  const [featured, ...rest] = articles.slice(0, 6)

  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-16 border-b border-border pb-8">
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-primary inline-block" />
              002 — Baza znanja
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Vodniki in nasveti
            </h2>
          </div>
          <Link
            href="/znanje"
            className="hidden md:flex items-center gap-2 text-[11px] font-semibold text-primary uppercase tracking-[0.15em] hover:gap-3.5 transition-all"
          >
            Vsi članki <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial grid: 1 large + 2 small on first row, 3 on second row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Featured — col-span-8 */}
          <div className="lg:col-span-8">
            <ArticleCard article={featured} large />
          </div>
          {/* Side stack — col-span-4 */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {rest.slice(0, 2).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Bottom row — 3 equal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.slice(2).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link href="/znanje" className="inline-flex items-center gap-2 text-[11px] font-semibold text-primary uppercase tracking-[0.15em]">
            Vsi članki <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
