import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type Article, categoryLabels, categoryColors } from "@/lib/data/articles"

export function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  const colors = categoryColors[article.category] || { bg: "bg-secondary", text: "text-foreground" }

  return (
    <Link href={`/znanje/${article.slug}`} className="group block">
      <article className="bg-card rounded-lg border border-border p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md ${colors.bg} ${colors.text}`}>
            {categoryLabels[article.category]}
          </span>
          <span className="text-xs text-muted-foreground">
            {article.readingTime} min
          </span>
        </div>
        <h3 className={`font-serif font-bold text-foreground leading-snug group-hover:text-primary transition-colors text-balance ${large ? "text-xl" : "text-[17px]"}`}>
          {article.title}
        </h3>
        <p className={`text-sm text-muted-foreground mt-3 leading-relaxed flex-1 ${large ? "" : "line-clamp-2"}`}>
          {article.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-[13px] font-semibold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          Preberi več <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </article>
    </Link>
  )
}
