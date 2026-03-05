"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { X, Send, Sparkles, Building2, MapPin } from "lucide-react"
import { listings, type Listing } from "@/lib/data/listings"

interface ChatMessage {
  role: "user" | "assistant"
  text: string
  listings?: Listing[]
}

const starterQuestions = [
  "Kako kupim stanovanje?",
  "Iščem hišo v Kopru do 300k",
  "Kakšni so stroški nakupa?",
]

function getAIResponse(input: string): ChatMessage {
  const lower = input.toLowerCase()

  if (lower.includes("koper") || lower.includes("obala") || lower.includes("morje")) {
    const found = listings.filter((l) => l.region === "Koper").slice(0, 2)
    return { role: "assistant", text: "Na območju Kopra in obale imam v bazi naslednje nepremičnine, ki bi vas utegnile zanimati:", listings: found }
  }
  if (lower.includes("kredit") || lower.includes("banka") || lower.includes("financ")) {
    return { role: "assistant", text: "Za stanovanjski kredit v Sloveniji boste potrebovali vsaj 20 % lastnih sredstev. Banke trenutno ponujajo fiksne obrestne mere od 3,2 % in variabilne od 2,8 % + EURIBOR. Priporočam, da pridobite ponudbe vsaj treh bank." }
  }
  if (lower.includes("strošk") || lower.includes("davek") || lower.includes("koliko")) {
    return { role: "assistant", text: "Pri nakupu nepremičnine v Sloveniji morate poleg cene upoštevati: davek na promet nepremičnin (2 %), notarske stroške (500-800 €), provizijo agencije (2-4 %), sodno takso za vpis v zemljiško knjigo. Skupaj računajte na 3-5 % dodatnih stroškov." }
  }
  if (lower.includes("kupim") || lower.includes("nakup") || lower.includes("stanovanje")) {
    return { role: "assistant", text: "Postopek nakupa stanovanja poteka v osmih korakih: 1) Določite proračun, 2) Poiščite nepremičnino, 3) Opravite ogled, 4) Sklenite predpogodbo, 5) Uredite financiranje, 6) Podpišite pogodbo pri notarju, 7) Plačajte davek in opravite vpis, 8) Prevzemite stanovanje." }
  }
  if (lower.includes("hiš") || lower.includes("hisa")) {
    const found = listings.filter((l) => l.type === "hisa").slice(0, 2)
    return { role: "assistant", text: "Tukaj je nekaj hiš, ki jih trenutno imamo v ponudbi:", listings: found }
  }
  if (lower.includes("ljubljana") || lower.includes("lj")) {
    const found = listings.filter((l) => l.region === "Ljubljana").slice(0, 2)
    return { role: "assistant", text: "V Ljubljani in okolici imam naslednje nepremičnine:", listings: found }
  }
  return { role: "assistant", text: "Hvala za vaše vprašanje. Na portalu Nepremičnine na dlani vam lahko pomagam z informacijami o nakupu, prodaji ali najemu nepremičnin v Sloveniji. Kaj vas zanima?" }
}

function ListingMiniCard({ listing }: { listing: Listing }) {
  return (
    <Link
      href={`/oglasi/${listing.id}`}
      className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:border-primary/30 transition-all group"
    >
      <div className="w-12 h-12 rounded-md bg-secondary flex items-center justify-center shrink-0">
        <Building2 className="w-5 h-5 text-muted-foreground/30" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-primary font-serif">
          {listing.status === "oddaja"
            ? `${listing.price.toLocaleString("sl-SI")} €/mesec`
            : `${listing.price.toLocaleString("sl-SI")} €`}
        </p>
        <p className="text-sm font-medium text-foreground truncate">{listing.title}</p>
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <MapPin className="w-3 h-3" /> {listing.region}
        </p>
      </div>
    </Link>
  )
}

export function AIChat({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Pozdravljeni! Sem vaš AI pomočnik za nepremičnine. Vprašajte me karkoli o nakupu, prodaji, najemu ali pa poiščite primerno nepremičnino." },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg: ChatMessage = { role: "user", text: input.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setTimeout(() => {
      const response = getAIResponse(userMsg.text)
      setMessages((prev) => [...prev, response])
    }, 600)
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:bg-transparent md:backdrop-blur-none" onClick={onClose} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-card z-50 flex flex-col transition-transform duration-300 ease-in-out shadow-[-4px_0_40px_rgba(0,0,0,0.1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground">AI Pomočnik</h2>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Nepremičnine na dlani</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-md hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Zapri"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-accent text-accent-foreground rounded-lg rounded-br-sm"
                    : "bg-secondary text-foreground rounded-lg rounded-bl-sm"
                }`}
              >
                <p>{msg.text}</p>
                {msg.listings && msg.listings.length > 0 && (
                  <div className="mt-3 flex flex-col gap-2">
                    {msg.listings.map((l) => (
                      <ListingMiniCard key={l.id} listing={l} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />

          {messages.length <= 1 && (
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">Predlogi</p>
              {starterQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setInput(q)
                    const userMsg: ChatMessage = { role: "user", text: q }
                    setMessages((prev) => [...prev, userMsg])
                    setTimeout(() => {
                      setMessages((prev) => [...prev, getAIResponse(q)])
                    }, 600)
                  }}
                  className="text-left text-sm px-4 py-3 rounded-lg border border-border hover:border-primary/30 hover:bg-gold-light/30 transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="px-6 py-5 border-t border-border">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Vprašajte me karkoli..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="w-11 h-11 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-gold-hover transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Pošlji"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export function AIFloatingButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-40 flex items-center gap-2.5 pl-5 pr-6 py-3.5 rounded-full bg-accent text-accent-foreground shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition-all cursor-pointer"
      aria-label="Odpri AI pomočnika"
    >
      <Sparkles className="w-4 h-4 text-primary" />
      <span className="text-sm font-semibold">AI Pomočnik</span>
    </button>
  )
}
