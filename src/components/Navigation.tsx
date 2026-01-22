"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/guidelines', label: 'Author Guidelines' },
    { href: '/editorial-board', label: 'Editorial Board' },
    { href: '/archive', label: 'Archive' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FFD700] shadow-lg dark:bg-[#1a1a1a] dark:border-b dark:border-gray-800' : 'bg-[#FFD700] dark:bg-[#1a1a1a]'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#1E90FF] rounded-full flex items-center justify-center text-white font-bold text-xl">
              J
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#222222] dark:text-white leading-tight">JMRH</span>
              <span className="text-xs text-[#222222]/80 dark:text-gray-300">Multidisciplinary Research</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[#222222] dark:text-gray-200 hover:bg-[#222222]/10 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-[#222222]/10 dark:hover:bg-gray-700"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-[#222222] dark:text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-[#222222]" />
              )}
            </Button>

            <Link href="/submit" className="hidden md:block">
              <Button className="bg-[#1E90FF] hover:bg-[#1873CC] text-white font-semibold">
                Submit Paper
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full hover:bg-[#222222]/10 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#222222] dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-[#222222] dark:text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#222222]/10 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-[#222222] dark:text-gray-200 hover:bg-[#222222]/10 dark:hover:bg-gray-700 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/submit" onClick={() => setIsMenuOpen(false)} className="px-4 py-3">
                <Button className="w-full bg-[#1E90FF] hover:bg-[#1873CC] text-white font-semibold">
                  Submit Paper
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
