'use client'

import { ThemeSwitch } from './ui/themeswitch'
import { useState } from 'react'
import {
  useFloating,
  useInteractions,
  useClick,
  useRole,
  useDismiss,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react'
import { useContactForm } from './contact-form-controller'
import { Button } from "@/app/components/ui/button"

export function HeaderActions() {
  const { setIsOpen } = useContactForm()

  const [isOpen, setIsOpenState] = useState(false)

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpenState,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ])
  
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="group flex items-center gap-2 absolute right-[7.25%] transform translate-y-[70%]"
        onClick={() => setIsOpen(true)}
        aria-label="Open contact form"
      >
        <span className="text-[34px] font-bold text-[rgb(233,23,23)]">
          Contact
        </span>
        <span className="transition-all duration-0 h-[35px]
          block text-[18px]
          font-bold
          text-[rgb(233,23,23)]
          text-center border-2 border-black
          px-5 py-1 bg-white
          cursor-pointer rounded-tr-[5px]
          rounded-br-[15px]">
          Here
        </span>
      </button>

      <div className="absolute right-[2%] ml-6 border-l pl-6">
        <ThemeSwitch />
      </div>
    </div>
  )
} 