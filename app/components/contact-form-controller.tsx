'use client'

import { createContext, useContext, useState } from 'react'
import { ContactForm } from '@/app/components/contact-form'

type ContactFormContextType = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined)

export function useContactForm() {
  const context = useContext(ContactFormContext)
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider')
  }
  return context
}

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ContactFormContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      {isOpen && <ContactForm onClose={() => setIsOpen(false)} />}
    </ContactFormContext.Provider>
  )
} 