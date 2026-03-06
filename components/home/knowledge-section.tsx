import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { articles } from "@/lib/data/articles"
import { ArticleCard } from "@/components/knowledge/article-card"

export function KnowledgeSection() {
  const [featured, ...rest] = articles.slice(0, 6)

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-3">
              Baza znanja
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Vodniki in nasveti
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Vse, kar morate vedeti pred nakupom, prodajo ali najemom
            </p>
          </div>
          <Link
            href="/znanje"
            className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-blue-dark hover:gap-3 transition-all"
          >
            Vsi članki <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial grid: large featured + side stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-8">
            <ArticleCard article={featured} large />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            {rest.slice(0, 2).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.slice(2).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/znanje" className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary">
            Vsi članki <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
