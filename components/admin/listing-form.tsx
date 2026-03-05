"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, Plus, Minus, ArrowLeft, Save, Send } from "lucide-react"
import { useToast } from "@/components/admin/admin-toast"
import { type Listing } from "@/lib/data/listings"

const regions = ["Ljubljana", "Maribor", "Koper", "Celje", "Kranj", "Novo Mesto"]
const conditions = ["Novogradnja", "Dobro", "Potrebna obnova"]
const energyClasses = ["A+", "A", "B", "C", "D", "E", "F", "G"]

interface ListingFormProps {
  initialData?: Listing
}

export function ListingForm({ initialData }: ListingFormProps) {
  const router = useRouter()
  const { showToast } = useToast()
  const isEdit = !!initialData

  const [form, setForm] = useState({
    title: initialData?.title || "",
    shortDescription: initialData?.shortDescription || "",
    fullDescription: initialData?.fullDescription || "",
    type: initialData?.type || "stanovanje",
    status: initialData?.status || "prodaja",
    region: initialData?.region || "",
    address: initialData?.address || "",
    postalCode: initialData?.postalCode || "",
    price: initialData?.price?.toString() || "",
    area: initialData?.area?.toString() || "",
    rooms: initialData?.rooms || 2,
    yearBuilt: initialData?.yearBuilt?.toString() || "",
    condition: initialData?.condition || "Dobro",
    energyClass: initialData?.energyClass || "C",
  })

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = (publish: boolean) => {
    showToast(
      publish
        ? isEdit
          ? "Oglas je bil uspešno posodobljen."
          : "Oglas je bil uspešno objavljen."
        : "Osnutek je bil shranjen."
    )
    setTimeout(() => router.push("/admin/oglasi"), 500)
  }

  const typeOptions = [
    { value: "stanovanje", label: "Stanovanje" },
    { value: "hisa", label: "Hiša" },
    { value: "zemljisce", label: "Zemljišče" },
    { value: "poslovni", label: "Poslovni prostor" },
  ]

  const statusOptions = [
    { value: "prodaja", label: "Prodaja" },
    { value: "oddaja", label: "Oddaja" },
  ]

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
          <h1 className="font-serif text-2xl font-bold text-foreground">
            {isEdit ? "Uredi oglas" : "Nov oglas"}
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {isEdit ? "Posodobite podatke oglasa" : "Izpolnite podatke za nov oglas"}
          </p>
        </div>
      </div>

      <div className="max-w-3xl">
        {/* Osnovno */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Osnovno</h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Naslov oglasa *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="npr. Sodobno stanovanje v centru Ljubljane"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Kratek opis</label>
              <textarea
                rows={3}
                value={form.shortDescription}
                onChange={(e) => handleChange("shortDescription", e.target.value)}
                placeholder="Kratek opis nepremičnine, ki se prikaže na kartici..."
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Polni opis</label>
              <textarea
                rows={5}
                value={form.fullDescription}
                onChange={(e) => handleChange("fullDescription", e.target.value)}
                placeholder="Podroben opis nepremičnine..."
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber resize-none"
              />
            </div>
          </div>
        </section>

        {/* Tip in status */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Tip in status</h2>
          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tip nepremičnine *</label>
              <div className="flex flex-wrap gap-1 p-1 bg-secondary rounded-xl">
                {typeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleChange("type", opt.value)}
                    className={`flex-1 min-w-[100px] px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      form.type === opt.value
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Status *</label>
              <div className="flex gap-1 p-1 bg-secondary rounded-xl max-w-xs">
                {statusOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleChange("status", opt.value)}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                      form.status === opt.value
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lokacija */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Lokacija</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Regija/Občina *</label>
              <select
                value={form.region}
                onChange={(e) => handleChange("region", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              >
                <option value="">Izberite regijo</option>
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Poštna številka</label>
              <input
                type="text"
                value={form.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
                placeholder="npr. 1000"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1.5">Naslov *</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="npr. Mestni trg 12"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
          </div>
        </section>

        {/* Podrobnosti */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Podrobnosti</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Cena (&euro;) *</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder="285000"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">{'Kvadratura (m\u00B2) *'}</label>
              <input
                type="number"
                value={form.area}
                onChange={(e) => handleChange("area", e.target.value)}
                placeholder="78"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Število sob</label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleChange("rooms", Math.max(0, form.rooms - 1))}
                  className="w-10 h-10 rounded-xl border border-border hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Zmanjšaj"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-foreground">{form.rooms}</span>
                <button
                  type="button"
                  onClick={() => handleChange("rooms", form.rooms + 1)}
                  className="w-10 h-10 rounded-xl border border-border hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Povečaj"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Leto izgradnje</label>
              <input
                type="number"
                value={form.yearBuilt}
                onChange={(e) => handleChange("yearBuilt", e.target.value)}
                placeholder="2019"
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Stanje</label>
              <select
                value={form.condition}
                onChange={(e) => handleChange("condition", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              >
                {conditions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Energijski razred</label>
              <select
                value={form.energyClass}
                onChange={(e) => handleChange("energyClass", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber"
              >
                {energyClasses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Slike */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Slike</h2>
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-amber/40 transition-colors cursor-pointer">
            <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground">Povlecite slike sem</p>
            <p className="text-xs text-muted-foreground mt-1">ali kliknite za izbiro</p>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
          <button
            type="button"
            onClick={() => handleSave(false)}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer"
          >
            <Save className="w-4 h-4" />
            Shrani osnutek
          </button>
          <button
            type="button"
            onClick={() => handleSave(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber text-primary-foreground text-sm font-semibold rounded-lg hover:bg-amber/90 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Objavi oglas
          </button>
        </div>
      </div>
    </div>
  )
}
