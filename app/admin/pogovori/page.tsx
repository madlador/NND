"use client"

import { MessageSquare, User, Bot, Clock } from "lucide-react"

const conversations = [
  {
    id: 1,
    date: "2026-03-05 14:32",
    messages: [
      { role: "user", text: "Kako kupim stanovanje?" },
      { role: "assistant", text: "Postopek nakupa stanovanja v Sloveniji poteka v osmih korakih..." },
    ],
  },
  {
    id: 2,
    date: "2026-03-05 12:15",
    messages: [
      { role: "user", text: "Iščem hišo v Kopru do 300k" },
      { role: "assistant", text: "Na območju Kopra imam v bazi naslednje nepremičnine..." },
    ],
  },
  {
    id: 3,
    date: "2026-03-04 18:44",
    messages: [
      { role: "user", text: "Kakšni so stroški nakupa nepremičnine?" },
      { role: "assistant", text: "Pri nakupu nepremičnine morate poleg cene upoštevati: davek na promet (2 %), notarske stroške..." },
    ],
  },
  {
    id: 4,
    date: "2026-03-04 09:20",
    messages: [
      { role: "user", text: "Kaj je energetska izkaznica?" },
      { role: "assistant", text: "Energetska izkaznica je javna listina, ki prikazuje energetsko učinkovitost stavbe..." },
    ],
  },
  {
    id: 5,
    date: "2026-03-03 16:05",
    messages: [
      { role: "user", text: "Imam stanovanje v Ljubljani, bi ga rad prodal" },
      { role: "assistant", text: "Za uspešno prodajo stanovanja v Ljubljani priporočamo naslednje korake..." },
    ],
  },
]

export default function AdminPogovori() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="font-serif text-2xl font-bold text-foreground">AI Pogovori</h1>
        <p className="text-sm text-muted-foreground mt-1">Pregled pogovorov z AI pomočnikom (samo za branje)</p>
      </div>

      <div className="flex flex-col gap-4">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="bg-card rounded-xl border border-border p-5"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {conv.date}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {conv.messages.map((msg, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    msg.role === "user" ? "bg-secondary" : "bg-amber/10"
                  }`}>
                    {msg.role === "user" ? (
                      <User className="w-3.5 h-3.5 text-muted-foreground" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 text-amber" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground mb-0.5">
                      {msg.role === "user" ? "Uporabnik" : "AI Pomočnik"}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
