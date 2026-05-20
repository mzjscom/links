"use client"

import { useState } from "react"
import { ExternalLink, CreditCard, Smartphone, Receipt } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = [
    {
      name: "الدفع السريع",
      description: "دفع آمن وسريع لجميع الخدمات",
      href: "https://shorturl.at/UoXK7",
      icon: CreditCard,
    },
    {
      name: "شحن رصيد eeZee",
      description: "شحن فوري لرصيد eeZee",
      href: "https://shorturl.at/UoXK7",
      icon: Smartphone,
    },
    {
      name: "دفع الفواتير",
      description: "ادفع فواتيرك بسهولة وأمان",
      href: "https://shorturl.at/UoXK7",
      icon: Receipt,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d1b4e] via-[#3d1f5c] to-[#1a0f30] flex flex-col">
      {/* Navbar */}
      <header className="w-full px-6 py-4 flex items-center justify-end">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f3Sv57YmcrslAzuGDhtngkaeqmthVv.png"
          alt="Zain Logo"
          width={80}
          height={32}
          className="h-8 w-auto object-contain"
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              خدمات سريعة وآمنة
            </h1>
            <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto leading-relaxed px-4">
              اشحن خطك وتصفح آخر العروض بأمان وسرعة
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4 sm:gap-5 mb-10">
            {links.map((link, index) => {
              const Icon = link.icon
              const isHovered = hoveredLink === link.name
              return (
                <div
                  key={link.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="block"
                  >
                    <div
                      className={`
                        relative rounded-2xl p-5 sm:p-6 border transition-all duration-400 ease-out
                        ${isHovered
                          ? "bg-white/15 border-white/40 shadow-lg shadow-purple-900/40 -translate-y-1"
                          : "bg-white/8 border-white/15"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div
                          className={`
                            w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300
                            ${isHovered ? "bg-white/25 scale-110" : "bg-white/12"}
                          `}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                            {link.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
                            {link.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <ExternalLink
                          className={`
                            w-5 h-5 flex-shrink-0 transition-all duration-300
                            ${isHovered ? "text-white rotate-45 scale-110" : "text-purple-300"}
                          `}
                        />
                      </div>

                      {/* Bottom progress bar */}
                      <div className="mt-4 h-0.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-white/60 rounded-full transition-all duration-700 ease-out ${isHovered ? "w-full" : "w-0"}`}
                        />
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-purple-300">خدمة آمنة وموثوقة • متاحة 24/7</p>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
