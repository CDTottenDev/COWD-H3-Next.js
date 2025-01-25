'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HeaderActions } from './header-actions'
import { useEffect, useState } from 'react'

export function ClientHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-sm z-40 transition-all duration-300
      ${scrolled ? 'mt-3.5 mx-3.5 rounded-lg w-[calc(100%-28px)]' : ''}`}>
      <div className={`container mx-auto flex items-center justify-between px-4 md:px-8 transition-all duration-300
        ${scrolled ? 'h-16' : 'h-20'}`}>
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/H3 Logo Final.svg"
              alt="H3 Logo" 
              width={200}
              height={50}
              className="h-[50px] w-auto md:h-[40px]"
              priority
            />
            <span className="text-lg font-bold">
              <span className="text-black">H3</span>{' '}
              <span className="text-red-600">Excavation & Construction</span>
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 absolute right-[13.5%]">
          {[
            ['Home', '/#top'],
            ['Services', '/#services'],
            ['Projects', '/#projects'],
            ['About', '/#about'],
          ].map(([title, url]) => (
            <Link
              key={url}
              href={url}
              className="text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {title}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </Link>
          ))}
        </nav>

        <HeaderActions />

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  )
} 