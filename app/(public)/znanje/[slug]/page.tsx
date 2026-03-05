import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Clock, Sparkles } from "lucide-react"
import { articles, categoryLabels, categoryColors } from "@/lib/data/articles"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default async function KnowledgeArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const colors = categoryColors[article.category] || { bg: "bg-secondary", text: "text-foreground" }
  const related = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3)
  if (related.length < 3) {
    const others = articles.filter((a) => a.id !== article.id && !related.includes(a)).slice(0, 3 - related.length)
    related.push(...others)
  }

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Domov</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/znanje" className="hover:text-primary transition-colors">Vse o nepremičninah</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground">{categoryLabels[article.category]}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article content */}
          <article className="flex-1 max-w-3xl">
            <div className="flex items-center gap-4 mb-5">
              <span className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md ${colors.bg} ${colors.text}`}>
                {categoryLabels[article.category]}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {article.readingTime} min branja
              </span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-foreground leading-tight text-balance">
              {article.title}
            </h1>

            <div className="mt-10">
              {article.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-foreground leading-[1.75] mb-5 text-[15.5px]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* FAQ Section */}
            {article.faq.length > 0 && (
              <div className="mt-14 pt-10 border-t border-border">
                <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary mb-3">FAQ</p>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Pogosta vprašanja</h2>
                <Accordion type="single" collapsible className="w-full">
                  {article.faq.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                      <AccordionTrigger className="text-left text-sm font-semibold text-foreground py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-28 flex flex-col gap-6">
              <div className="bg-card rounded-lg border border-border p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-muted-foreground mb-4">
                  Sorodni članki
                </p>
                <div className="flex flex-col gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/znanje/${r.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors leading-snug"
                    >
                      {r.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-accent rounded-lg p-6 text-accent-foreground">
                <div className="flex items-center gap-2.5 mb-3">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-sm">Vprašaj AI</h3>
                </div>
                <p className="text-xs leading-relaxed text-stone-400">
                  Imate vprašanje o tej temi? Naš AI pomočnik vam lahko pomaga s podrobnejšimi informacijami.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
