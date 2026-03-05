"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { listings } from "@/lib/data/listings"
import { ListingForm } from "@/components/admin/listing-form"

export default function EditListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const listing = listings.find((l) => l.id === id)

  if (!listing) return notFound()

  return <ListingForm initialData={listing} />
}
