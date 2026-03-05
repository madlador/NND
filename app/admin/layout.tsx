"use client"

import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { ToastProvider } from "@/components/admin/admin-toast"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-background">
        <AdminSidebar />
        <div className="ml-60">
          <main className="p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </ToastProvider>
  )
}
