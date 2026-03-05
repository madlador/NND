"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AIChat, AIFloatingButton } from "@/components/ai/ai-chat"

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <Navbar onOpenChat={() => setChatOpen(true)} />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <AIFloatingButton onClick={() => setChatOpen(true)} />
      <AIChat open={chatOpen} onClose={() => setChatOpen(false)} />
    </>
  )
}
