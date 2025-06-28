
"use client"

import { useState } from "react"
import { ExternalLink, CreditCard, Smartphone, Receipt } from "lucide-react"

export default function Component() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const links = [
    {
      name: "الدفع السريع",
      description: "دفع آمن وسريع لجميع الخدمات",
      href: "https://shorturl.at/Q206u",
      color: "from-pink-700 to-purple-600",
      hoverColor: "from-pink-400 to-pink-500",
      icon: CreditCard,
      accent: "pink",
    },
    {
      name: "شحن رصيد eeZee",
      description: "شحن فوري لرصيد eeZee",
      href: "https://shorturl.at/Q206u",
      color: "from-green-500 to-sky-600",
      hoverColor: "from-blue-400 to-blue-500",
      icon: Smartphone,
      accent: "blue",
    },
    {
      name: "دفع الفواتير",
      description: "ادفع فواتيرك بسهولة وأمان",
      href: "https://shorturl.at/Q206u",
      color: "from-pink-500 to-green-600",
      hoverColor: "from-red-700 to-green-800",
      icon: Receipt,
      accent: "green",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 flex items-center justify-center p-2 sm:p-4 lg:p-6">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-sm sm:text-base lg:text-lg text-gray-100 max-w-xl mx-auto leading-relaxed px-4">
            اشحن خطك وتصفح آخر العروض
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <div
                key={link.name}
                className="group animate-fade-in-up w-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <a
                  href={link.href}
                  className="block relative w-full"
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <div
                    className={`
                    relative bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6 shadow-lg 
                    transition-all duration-500 ease-out w-full
                    hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2
                    ${hoveredLink === link.name ? "shadow-2xl -translate-y-1 sm:-translate-y-2" : ""}
                  `}
                  >
                    {/* Background Gradient Overlay */}
                    <div
                      className={`
                      absolute inset-0 rounded-2xl sm:rounded-3xl  transition-opacity duration-500
                      bg-gradient-to-br ${link.color}
                      ${hoveredLink === link.name ? "opacity-5" : ""}
                    `}
                    />

                    {/* Icon */}
                    <div
                      className={`
                      relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full mb-3 sm:mb-4 lg:mb-6 
                      flex items-center justify-center bg-gradient-to-br ${link.color} shadow-lg
                      transition-all duration-500
                      ${hoveredLink === link.name ? "scale-110 shadow-xl" : ""}
                    `}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 mb-1 sm:mb-2 truncate">
                            {link.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-100 leading-relaxed line-clamp-2">
                            {link.description}
                          </p>
                        </div>
                        <ExternalLink
                          className={`
                          w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-all duration-300 flex-shrink-0 ml-2
                          ${hoveredLink === link.name ? "text-gray-600 rotate-45 scale-110" : ""}
                        `}
                        />
                      </div>

                      {/* Progress Bar */}
                      <div className="h-0.5 sm:h-1 bg-gray-100 rounded-full overflow-hidden mb-2 sm:mb-4">
                        <div
                          className={`
                          h-full rounded-full transition-all duration-700 ease-out
                          bg-gradient-to-r ${link.hoverColor}
                          ${hoveredLink === link.name ? "w-full" : "w-0"}
                        `}
                        />
                      </div>

                      {/* Call to Action - Hidden on very small screens */}
                      <div className="hidden sm:block">
                        <div
                          className={`
                          inline-flex items-center text-xs sm:text-sm font-medium transition-all duration-300
                          ${hoveredLink === link.name ? "text-pink-600" : "text-gray-500"}
                        `}
                        >
                          <span>اضغط للاستكشاف</span>
                          <div
                            className={`
                            w-3 h-3 sm:w-4 sm:h-4 mr-2 rounded-full transition-all duration-300
                            ${hoveredLink === link.name ? "bg-blue-400" : "bg-gray-100"}
                          `}
                          >
                            <div
                              className={`
                              w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full m-0.5 sm:m-1 transition-all duration-300
                              ${hoveredLink === link.name ? "bg-pink-500" : "bg-gray-300"}
                            `}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`
                            absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-1000
                            ${hoveredLink === link.name ? "opacity-60 animate-float" : "opacity-0"}
                          `}
                          style={{
                            left: `${20 + i * 25}%`,
                            top: `${20 + i * 15}%`,
                            animationDelay: `${i * 200}ms`,
                            background: `linear-gradient(135deg, #ec4899, #db2777)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="text-center px-4">
          <div className="inline-flex items-center space-x-1 text-gray-400 mb-2 sm:mb-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-500">خدمة آمنة وموثوقة • متاحة 24/7</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(180deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }
        }
      `}</style>
    </div>
  )
}
