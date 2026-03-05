"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Bold, Italic, Heading1, Heading2, Plus, X, Send } from "lucide-react"
import { useToast } from "@/components/admin/admin-toast"
import { categoryLabels } from "@/lib/data/articles"

const categories = Object.entries(categoryLabels)

export default function NewArticlePage() {
  const router = useRouter()
  const { showToast } = useToast()

  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
    tags: [] as string[],
    faq: [{ question: "", answer: "" }],
  })
  const [tagInput, setTagInput] = useState("")

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const addTag = () => {
    if (tagInput.trim() && !form.tags.includes(tagInput.trim())) {
      setForm((prev) => ({ ...prev, tags: [...prev.tags, tagInput.trim()] }))
      setTagInput("")
    }
  }

  const removeTag = (tag: string) => {
    setForm((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== tag) }))
  }

  const addFaq = () => {
    setForm((prev) => ({ ...prev, faq: [...prev.faq, { question: "", answer: "" }] }))
  }

  const updateFaq = (index: number, field: "question" | "answer", value: string) => {
    setForm((prev) => ({
      ...prev,
      faq: prev.faq.map((f, i) => (i === index ? { ...f, [field]: value } : f)),
    }))
  }

  const removeFaq = (index: number) => {
    setForm((prev) => ({ ...prev, faq: prev.faq.filter((_, i) => i !== index) }))
  }

  const handlePublish = () => {
    showToast("Članek je bil uspešno objavljen.")
    setTimeout(() => router.push("/admin/clanki"), 500)
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
          <h1 className="font-serif text-2xl font-bold text-foreground">Nov članek</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Dodajte nov članek v bazo znanja</p>
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
              placeholder="Naslov članka"
              className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
            />
          </div>

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
            <label className="block text-sm font-medium text-foreground mb-1.5">Vsebina *</label>
            <div className="border border-border rounded-xl overflow-hidden bg-card focus-within:ring-2 focus-within:ring-amber/40 focus-within:border-amber">
              <div className="flex items-center gap-1 px-3 py-2 border-b border-border bg-secondary/50">
                <button type="button" className="w-8 h-8 rounded hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer" aria-label="Krepko">
                  <Bold className="w-4 h-4 text-muted-foreground" />
                </button>
                <button type="button" className="w-8 h-8 rounded hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer" aria-label="Ležeče">
                  <Italic className="w-4 h-4 text-muted-foreground" />
                </button>
                <div className="w-px h-5 bg-border mx-1" />
                <button type="button" className="w-8 h-8 rounded hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer" aria-label="Naslov 1">
                  <Heading1 className="w-4 h-4 text-muted-foreground" />
                </button>
                <button type="button" className="w-8 h-8 rounded hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer" aria-label="Naslov 2">
                  <Heading2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
              <textarea
                rows={10}
                value={form.content}
                onChange={(e) => handleChange("content", e.target.value)}
                placeholder="Napišite vsebino članka..."
                className="w-full px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none resize-none bg-transparent"
              />
            </div>
          </div>

          {/* FAQ */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">FAQ sekcija</label>
            <div className="flex flex-col gap-3">
              {form.faq.map((faq, index) => (
                <div key={index} className="p-4 bg-secondary/50 rounded-xl border border-border">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xs font-medium text-muted-foreground mt-1">
                      Vprašanje {index + 1}
                    </span>
                    {form.faq.length > 1 && (
                      <button
                        onClick={() => removeFaq(index)}
                        className="w-6 h-6 rounded hover:bg-secondary flex items-center justify-center cursor-pointer"
                        aria-label="Odstrani vprašanje"
                      >
                        <X className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => updateFaq(index, "question", e.target.value)}
                    placeholder="Vprašanje"
                    className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 mb-2"
                  />
                  <textarea
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => updateFaq(index, "answer", e.target.value)}
                    placeholder="Odgovor"
                    className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 resize-none"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={addFaq}
              className="mt-2 flex items-center gap-1.5 text-sm font-medium text-amber hover:text-amber/80 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Dodaj vprašanje
            </button>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Tagi</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                placeholder="Dodajte tag..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
              <button
                onClick={addTag}
                className="px-4 py-2.5 text-sm font-medium rounded-xl border border-border hover:bg-secondary transition-colors cursor-pointer"
              >
                Dodaj
              </button>
            </div>
            {form.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {form.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full"
                  >
                    {tag}
                    <button onClick={() => removeTag(tag)} className="cursor-pointer" aria-label="Odstrani tag">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
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
