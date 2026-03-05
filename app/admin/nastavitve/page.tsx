"use client"

import { Settings, Globe, Bell, Shield } from "lucide-react"
import { useToast } from "@/components/admin/admin-toast"

export default function AdminNastavitve() {
  const { showToast } = useToast()

  const handleSave = () => {
    showToast("Nastavitve so bile shranjene.")
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl font-bold text-foreground">Nastavitve</h1>
        <p className="text-sm text-muted-foreground mt-1">Upravljajte z nastavitvami portala</p>
      </div>

      <div className="max-w-2xl flex flex-col gap-6">
        {/* General */}
        <div className="bg-card rounded-xl border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
              <Globe className="w-4.5 h-4.5 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground">Splošno</h2>
              <p className="text-xs text-muted-foreground">Osnovne nastavitve portala</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Ime portala</label>
              <input
                type="text"
                defaultValue="Nepremičnine na dlani"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Kontaktni email</label>
              <input
                type="email"
                defaultValue="info@nepremicninenadlani.si"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-card rounded-xl border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
              <Bell className="w-4.5 h-4.5 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground">Obvestila</h2>
              <p className="text-xs text-muted-foreground">Nastavitve email obvestil</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-border text-amber focus:ring-amber accent-amber" />
              <span className="text-sm text-foreground">Obvestilo o novih povpraševanjih</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-border text-amber focus:ring-amber accent-amber" />
              <span className="text-sm text-foreground">Tedensko poročilo o statistiki</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-border text-amber focus:ring-amber accent-amber" />
              <span className="text-sm text-foreground">Obvestilo o novih AI pogovorih</span>
            </label>
          </div>
        </div>

        {/* Security */}
        <div className="bg-card rounded-xl border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
              <Shield className="w-4.5 h-4.5 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground">Varnost</h2>
              <p className="text-xs text-muted-foreground">Sprememba gesla in varnostne nastavitve</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Trenutno geslo</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Novo geslo</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-amber text-primary-foreground text-sm font-semibold rounded-lg hover:bg-amber/90 transition-colors cursor-pointer"
          >
            Shrani nastavitve
          </button>
        </div>
      </div>
    </div>
  )
}
