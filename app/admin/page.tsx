"use client"

import Link from "next/link"
import { HomeIcon, FileText, Megaphone, MessageSquare, TrendingUp, Plus, Clock } from "lucide-react"

const stats = [
  { label: "Skupaj oglasov", value: "24", trend: "+12 %", icon: HomeIcon },
  { label: "Skupaj člankov", value: "8", trend: "+2 ta mesec", icon: FileText },
  { label: "Novice", value: "6", trend: "+3 ta mesec", icon: Megaphone },
  { label: "Pogovori z AI", value: "142", trend: "+38 ta teden", icon: MessageSquare },
]

const recentActivity = [
  { text: "Nov oglas: Sodobno stanovanje v centru Ljubljane", time: "pred 2 urama" },
  { text: "Nov članek: Pravne pasti pri nakupu nepremičnine", time: "pred 5 urama" },
  { text: "Nova novica: Cene stanovanj v Ljubljani narasle za 8 %", time: "pred 1 dnevom" },
  { text: "Posodobljen oglas: Vila z bazenom na Obali", time: "pred 2 dnevoma" },
  { text: "Nov oglas: Penthouse v Novi Gorici", time: "pred 3 dnevi" },
]

const quickActions = [
  { label: "+ Nov oglas", href: "/admin/oglasi/new" },
  { label: "+ Nov članek", href: "/admin/clanki/new" },
  { label: "+ Nova novica", href: "/admin/novice/new" },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Pregled</h1>
          <p className="text-sm text-muted-foreground mt-1">Dobrodošli nazaj, Admin Kobal</p>
        </div>
        <div className="flex items-center gap-2">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-card rounded-xl border border-border p-5"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-teal">
                  <TrendingUp className="w-3 h-3" />
                  {stat.trend}
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-card rounded-xl border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
        <h2 className="text-base font-semibold text-foreground mb-4">Nedavna aktivnost</h2>
        <div className="flex flex-col">
          {recentActivity.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 py-3 ${
                i < recentActivity.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-foreground flex-1">{item.text}</p>
              <p className="text-xs text-muted-foreground shrink-0">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
