"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { news } from "@/lib/data/news"
import NewNewsPage from "../../new/page"

export default function EditNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const item = news.find((n) => n.id === id)

  if (!item) return notFound()

  return <NewNewsPage />
}
