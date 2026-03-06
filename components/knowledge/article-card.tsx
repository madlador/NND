import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type Article, categoryLabels, categoryColors } from "@/lib/data/articles"

export function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  const colors = categoryColors[article.category] || { bg: "bg-secondary", text: "text-foreground" }

  if (large) {
    return (
      <Link href={`/znanje/${article.slug}`} className="group block h-full">
        <article className="bg-card rounded-lg shadow-[0_0_2px_0_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,101,203,0.12)] border border-border h-full flex flex-col p-7 lg:p-8 transition-all duration-300">
          <div className="flex items-center gap-4 mb-5">
            <span className={`inline-flex px-3 py-1 text-[11px] font-semibold uppercase tracking-wide rounded ${colors.bg} ${colors.text}`}>
              {categoryLabels[article.category]}
            </span>
            <span className="text-xs text-muted-foreground">
              {article.readingTime} min branja
            </span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors text-balance leading-snug flex-1">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-lg">
            {article.excerpt}
          </p>
          <div className="mt-7 pt-5 border-t border-border flex items-center gap-2 text-[13px] font-semibold text-primary group-hover:gap-3 transition-all">
            Preberi več <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/znanje/${article.slug}`} className="group block h-full">
      <article className="bg-card rounded-lg shadow-[0_0_2px_0_rgba(0,0,0,0.15)] hover:shadow-[0_4px_20px_rgba(0,101,203,0.12)] border border-border p-6 h-full flex flex-col transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide rounded ${colors.bg} ${colors.text}`}>
            {categoryLabels[article.category]}
          </span>
          <span className="text-xs text-muted-foreground">
            {article.readingTime} min
          </span>
        </div>
        <h3 className="font-serif text-[17px] font-bold text-foreground group-hover:text-primary transition-colors text-balance leading-snug flex-1">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-[13px] font-semibold text-primary opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all">
          Preberi več <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </article>
    </Link>
  )
}
