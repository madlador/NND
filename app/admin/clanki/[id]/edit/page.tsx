"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { articles, categoryLabels } from "@/lib/data/articles"
import NewArticlePage from "../../new/page"

export default function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const article = articles.find((a) => a.id === id)

  if (!article) return notFound()

  // In a real app we'd pass initialData to the form — for now redirect to new article form pattern
  return <NewArticlePage />
}
