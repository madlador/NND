import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type Article, categoryLabels, categoryColors } from "@/lib/data/articles"

export function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  const colors = categoryColors[article.category] || { bg: "bg-secondary", text: "text-foreground" }

  if (large) {
    return (
      <Link href={`/znanje/${article.slug}`} className="group block h-full">
        <article className="bg-card border border-border h-full flex flex-col p-8 lg:p-10 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:border-primary/20">
          <div className="flex items-center gap-4 mb-6">
            <span className={`inline-flex px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${colors.bg} ${colors.text}`}>
              {categoryLabels[article.category]}
            </span>
            <span className="text-xs text-muted-foreground font-light tracking-wide">
              {article.readingTime} min branja
            </span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors text-balance flex-1">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-5 leading-loose font-light max-w-lg">
            {article.excerpt}
          </p>
          <div className="mt-8 pt-6 border-t border-border flex items-center gap-2 text-[11px] font-bold text-primary uppercase tracking-[0.15em] group-hover:gap-3 transition-all">
            Preberi več <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/znanje/${article.slug}`} className="group block h-full">
      <article className="bg-card border border-border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:border-primary/20">
        <div className="flex items-center gap-3 mb-5">
          <span className={`inline-flex px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${colors.bg} ${colors.text}`}>
            {categoryLabels[article.category]}
          </span>
          <span className="text-xs text-muted-foreground font-light">
            {article.readingTime} min
          </span>
        </div>
        <h3 className="font-serif text-[16px] font-bold text-foreground leading-snug group-hover:text-primary transition-colors text-balance flex-1">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-light line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 group-hover:gap-3 transition-all">
          Preberi več <ArrowRight className="w-3 h-3" />
        </div>
      </article>
    </Link>
  )
}
