"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  FileText,
  Megaphone,
  Home as HomeIcon,
  MessageSquare,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react"

const navItems = [
  { href: "/admin", label: "Pregled", icon: BarChart3 },
  { href: "/admin/clanki", label: "Članki", icon: FileText },
  { href: "/admin/novice", label: "Novice", icon: Megaphone },
  { href: "/admin/oglasi", label: "Oglasi", icon: HomeIcon },
  { href: "/admin/pogovori", label: "AI Pogovori", icon: MessageSquare },
  { href: "/admin/nastavitve", label: "Nastavitve", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed top-0 left-0 h-full w-60 bg-accent flex flex-col z-30">
      <div className="px-5 py-5 border-b border-sidebar-border">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center">
            <HomeIcon className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-serif text-sm font-bold text-accent-foreground tracking-tight">
            Nepremičnine <span className="text-amber">na dlani</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href)
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-amber border-l-2 border-amber"
                  : "text-stone-400 hover:text-accent-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-sidebar-border">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-400 hover:text-accent-foreground hover:bg-sidebar-accent/50 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 shrink-0" />
          Nazaj na portal
        </Link>
        <div className="flex items-center gap-3 px-3 py-3 mt-2">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
            AK
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-accent-foreground truncate">Admin Kobal</p>
            <p className="text-xs text-stone-500 truncate">admin@nnd.si</p>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-sidebar-accent flex items-center justify-center transition-colors cursor-pointer" aria-label="Odjava">
            <LogOut className="w-4 h-4 text-stone-500" />
          </button>
        </div>
      </div>
    </aside>
  )
}
