import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { news } from "@/lib/data/news"
import { NewsCard } from "@/components/news/news-card"

export function NewsSection() {
  const [featured, ...rest] = news.slice(0, 3)

  return (
    <section className="py-24 lg:py-36 bg-[#0C1220]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-16 border-b border-white/[0.08] pb-8">
          <div>
            <p className="text-[9px] uppercase tracking-[0.45em] font-semibold text-primary mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-primary inline-block" />
              003 — Novice
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
              S trga nepremičnin
            </h2>
          </div>
          <Link
            href="/novice"
            className="hidden md:flex items-center gap-2 text-[11px] font-semibold text-primary uppercase tracking-[0.15em] hover:gap-3.5 transition-all"
          >
            Vse novice <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial split: large featured left, stack right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <NewsCard item={featured} featured dark />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            {rest.map((item) => (
              <NewsCard key={item.id} item={item} dark />
            ))}
          </div>
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link href="/novice" className="inline-flex items-center gap-2 text-[11px] font-semibold text-primary uppercase tracking-[0.15em]">
            Vse novice <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
