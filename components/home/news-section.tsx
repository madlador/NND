import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { news } from "@/lib/data/news"
import { NewsCard } from "@/components/news/news-card"

export function NewsSection() {
  const displayNews = news.slice(0, 3)

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-3">
              Novice
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
              S trga nepremičnin
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Aktualno dogajanje na slovenskem nepremičninskem trgu
            </p>
          </div>
          <Link href="/novice" className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
            Vse novice <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/novice" className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary uppercase tracking-wider">
            Vse novice <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
