"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { CheckCircle2, XCircle, X } from "lucide-react"

interface Toast {
  id: number
  message: string
  type: "success" | "error"
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error") => void
}

const ToastContext = createContext<ToastContextType>({ showToast: () => {} })

export function useToast() {
  return useContext(ToastContext)
}

let toastId = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string, type: "success" | "error" = "success") => {
    const id = ++toastId
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])

  const dismiss = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <ToastContext value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-center gap-3 px-4 py-3 bg-card border border-border rounded-xl shadow-lg animate-in slide-in-from-right-full duration-300 max-w-sm"
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />
            ) : (
              <XCircle className="w-5 h-5 text-destructive shrink-0" />
            )}
            <p className="text-sm font-medium text-foreground flex-1">{toast.message}</p>
            <button
              onClick={() => dismiss(toast.id)}
              className="w-6 h-6 rounded hover:bg-secondary flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Zapri"
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext>
  )
}
