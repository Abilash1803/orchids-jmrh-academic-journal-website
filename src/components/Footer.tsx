import Link from 'next/link'
import { Facebook, Linkedin, BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#FFD700] dark:bg-[#1a1a1a] border-t border-[#222222]/10 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#1E90FF] rounded-full flex items-center justify-center text-white font-bold">
                J
              </div>
              <span className="font-bold text-xl text-[#222222] dark:text-white">JMRH</span>
            </div>
            <p className="text-[#222222] dark:text-gray-300 text-sm leading-relaxed mb-4">
              Journal of Multidisciplinary Research Horizon (JMRH) is a peer-reviewed open-access journal promoting high-quality original research across disciplines.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1E90FF] hover:bg-[#1873CC] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1E90FF] hover:bg-[#1873CC] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://researchgate.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1E90FF] hover:bg-[#1873CC] rounded-full flex items-center justify-center transition-colors"
              >
                <BookOpen className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#222222] dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#222222] dark:text-gray-300 hover:text-[#1E90FF] dark:hover:text-[#87CEEB] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#222222] dark:text-gray-300 hover:text-[#1E90FF] dark:hover:text-[#87CEEB] transition-colors">
                  About Journal
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-[#222222] dark:text-gray-300 hover:text-[#1E90FF] dark:hover:text-[#87CEEB] transition-colors">
                  Author Guidelines
                </Link>
              </li>
              <li>
                <Link href="/editorial-board" className="text-[#222222] dark:text-gray-300 hover:text-[#1E90FF] dark:hover:text-[#87CEEB] transition-colors">
                  Editorial Board
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-[#222222] dark:text-gray-300 hover:text-[#1E90FF] dark:hover:text-[#87CEEB] transition-colors">
                  Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-[#222222] dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[#222222] dark:text-gray-300">
              <li>JMRH Publications</li>
              <li>Gudalur, The Nilgiris</li>
              <li>Tamil Nadu - 643212</li>
              <li>India</li>
              <li className="mt-3">
                <a href="mailto:jmrhpublications@gmail.com" className="hover:text-[#1E90FF] dark:hover:text-[#87CEEB] transition-colors">
                  jmrhpublications@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#222222]/20 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#222222] dark:text-gray-300 space-y-2 md:space-y-0">
            <p>
              © 2025 Journal of Multidisciplinary Research Horizon (JMRH). Published by JMRH Publications, Gudalur, The Nilgiris – 643212, Tamil Nadu, India.
            </p>
          </div>
          <div className="text-center mt-4 text-sm text-[#222222] dark:text-gray-300">
            <p>ISSN (Online): [To be assigned by ISSN India]</p>
          </div>
          <div className="text-center mt-4 text-sm text-[#222222] dark:text-gray-400">
            Developed with <span className="text-[#1E90FF]">💛</span> by Orchids AI | Maintained by JMRH Editorial Team
          </div>
        </div>
      </div>
    </footer>
  )
}
