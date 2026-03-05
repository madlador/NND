import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { type NewsItem, newsCategoryLabels } from "@/lib/data/news"

export function NewsCard({
  item,
  featured = false,
  dark = false,
}: {
  item: NewsItem
  featured?: boolean
  dark?: boolean
}) {
  const formattedDate = new Date(item.date).toLocaleDateString("sl-SI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const textBase = dark ? "text-white/80" : "text-foreground"
  const textMuted = dark ? "text-white/35" : "text-muted-foreground"
  const borderColor = dark ? "border-white/[0.08]" : "border-border"
  const cardBg = dark ? "bg-white/[0.04]" : "bg-card"
  const hoverBorder = dark ? "hover:border-primary/30" : "hover:border-primary/20"
  const hoverShadow = dark
    ? "hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
    : "hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"

  if (featured) {
    return (
      <Link href={`/novice/${item.id}`} className="group block h-full">
        <article
          className={`${cardBg} border ${borderColor} ${hoverBorder} ${hoverShadow} h-full flex flex-col p-8 lg:p-10 transition-all duration-300`}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] bg-primary/15 text-primary">
              {newsCategoryLabels[item.category]}
            </span>
            <span className={`text-xs ${textMuted} font-light tracking-wide`}>
              {formattedDate}
            </span>
          </div>
          <h2
            className={`font-serif text-2xl md:text-3xl font-bold ${textBase} group-hover:text-primary transition-colors text-balance leading-snug flex-1`}
          >
            {item.title}
          </h2>
          <p className={`text-sm ${textMuted} mt-5 leading-loose font-light`}>
            {item.excerpt}
          </p>
          <div
            className={`mt-8 pt-6 border-t ${borderColor} flex items-center gap-2 text-[11px] font-bold text-primary uppercase tracking-[0.15em] group-hover:gap-3 transition-all`}
          >
            Preberi več <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/novice/${item.id}`} className="group block">
      <article
        className={`${cardBg} border ${borderColor} ${hoverBorder} ${hoverShadow} p-6 flex flex-col transition-all duration-300`}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] bg-primary/15 text-primary">
            {newsCategoryLabels[item.category]}
          </span>
          <span className={`text-xs ${textMuted} font-light`}>{formattedDate}</span>
        </div>
        <h3
          className={`font-serif text-[16px] font-bold ${textBase} group-hover:text-primary transition-colors text-balance leading-snug flex-1`}
        >
          {item.title}
        </h3>
        <p className={`text-sm ${textMuted} mt-3 font-light leading-relaxed line-clamp-2`}>
          {item.excerpt}
        </p>
        <div
          className={`mt-5 pt-4 border-t ${borderColor} flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 group-hover:gap-2.5 transition-all`}
        >
          Preberi več <ArrowRight className="w-3 h-3" />
        </div>
      </article>
    </Link>
  )
}
