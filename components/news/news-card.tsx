import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { type NewsItem, newsCategoryLabels } from "@/lib/data/news"

export function NewsCard({ item, featured = false }: { item: NewsItem; featured?: boolean }) {
  const formattedDate = new Date(item.date).toLocaleDateString("sl-SI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  if (featured) {
    return (
      <Link href={`/novice/${item.id}`} className="group block">
        <article className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-gold-light text-primary">
                {newsCategoryLabels[item.category]}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {formattedDate}
              </span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors text-balance leading-snug">
              {item.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-2xl">
              {item.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-primary uppercase tracking-wider">
              Preberi več <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/novice/${item.id}`} className="group block">
      <article className="bg-card rounded-lg border border-border p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-gold-light text-primary">
            {newsCategoryLabels[item.category]}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> {formattedDate}
          </span>
        </div>
        <h3 className="font-serif text-[17px] font-bold text-foreground group-hover:text-primary transition-colors flex-1 text-balance leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-2">
          {item.excerpt}
        </p>
        <div className="mt-5 pt-4 border-t border-border flex items-center gap-2 text-[13px] font-semibold text-primary uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
          Preberi več <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </article>
    </Link>
  )
}
