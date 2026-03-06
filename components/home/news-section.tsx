import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { news } from "@/lib/data/news"
import { NewsCard } from "@/components/news/news-card"

export function NewsSection() {
  const [featured, ...rest] = news.slice(0, 3)

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-3">
              Novice
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              S trga nepremičnin
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md">
              Aktualno dogajanje na slovenskem nepremičninskem trgu
            </p>
          </div>
          <Link
            href="/novice"
            className="hidden md:flex items-center gap-2 text-[13px] font-semibold text-primary hover:text-blue-dark hover:gap-3 transition-all"
          >
            Vse novice <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <NewsCard item={featured} featured />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rest.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link href="/novice" className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary">
            Vse novice <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
