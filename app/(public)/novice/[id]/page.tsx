import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Calendar, ArrowLeft } from "lucide-react"
import { news, newsCategoryLabels } from "@/lib/data/news"

export function generateStaticParams() {
  return news.map((n) => ({ id: n.id }))
}

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = news.find((n) => n.id === id)
  if (!item) notFound()

  const formattedDate = new Date(item.date).toLocaleDateString("sl-SI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const related = news.filter((n) => n.id !== item.id).slice(0, 3)

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Domov</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/novice" className="hover:text-primary transition-colors">Novice</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground truncate max-w-[200px]">{item.title}</span>
        </nav>

        <article>
          <div className="flex items-center gap-4 mb-5">
            <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-gold-light text-primary">
              {newsCategoryLabels[item.category]}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> {formattedDate}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground leading-tight text-balance">
            {item.title}
          </h1>

          <div className="mt-10">
            <p className="text-foreground leading-[1.75] mb-5 text-[15.5px]">{item.excerpt}</p>
            <p className="text-foreground leading-[1.75] mb-5 text-[15.5px]">{item.content}</p>
            <p className="text-foreground leading-[1.75] mb-5 text-[15.5px]">
              Za več informacij o tej temi vas vabimo, da raziščete našo bazo znanja ali kontaktirate našega AI pomočnika, ki vam bo z veseljem pomagal z dodatnimi informacijami in nasveti.
            </p>
          </div>
        </article>

        <div className="mt-14 pt-10 border-t border-border">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-4">
            Druge novice
          </p>
          <div className="flex flex-col gap-3">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/novice/${r.id}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Link href="/novice" className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary uppercase tracking-wider hover:gap-3 transition-all">
            <ArrowLeft className="w-3.5 h-3.5" /> Nazaj na novice
          </Link>
        </div>
      </div>
    </div>
  )
}
