"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Send } from "lucide-react"
import { useToast } from "@/components/admin/admin-toast"
import { newsCategoryLabels } from "@/lib/data/news"

const categories = Object.entries(newsCategoryLabels)

export default function NewNewsPage() {
  const router = useRouter()
  const { showToast } = useToast()

  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
  })

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handlePublish = () => {
    showToast("Novica je bila uspešno objavljena.")
    setTimeout(() => router.push("/admin/novice"), 500)
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.back()}
          className="w-9 h-9 rounded-lg border border-border hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Nazaj"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Nova novica</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Objavite novo novico</p>
        </div>
      </div>

      <div className="max-w-3xl">
        <div className="flex flex-col gap-5 mb-8">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Naslov *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Naslov novice"
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Kategorija *</label>
              <select
                value={form.category}
                onChange={(e) => handleChange("category", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              >
                <option value="">Izberite kategorijo</option>
                {categories.map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Datum objave</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Vsebina *</label>
            <textarea
              rows={10}
              value={form.content}
              onChange={(e) => handleChange("content", e.target.value)}
              placeholder="Napišite vsebino novice..."
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber resize-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
          >
            Prekliči
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber text-primary-foreground text-sm font-semibold rounded-lg hover:bg-amber/90 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Objavi
          </button>
        </div>
      </div>
    </div>
  )
}
