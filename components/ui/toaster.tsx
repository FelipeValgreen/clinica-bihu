'use client'

import { useToast } from '@/hooks/use-toast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {/* Aria live region for toast announcements */}
      <div 
        id="toast-announcements" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {toasts.map((toast) => (
          <div key={toast.id}>
            {toast.title && <strong>{toast.title}</strong>}
            {toast.description && <span>{toast.description}</span>}
          </div>
        ))}
      </div>
      
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} role="status" aria-live="polite" aria-atomic="true">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose aria-label="Cerrar notificación" />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
