'use client'

import { X, Home, BarChart3, Wallet, Settings, ExternalLink } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: BarChart3, label: 'Trading', href: '/trading' },
    { icon: Wallet, label: 'Portfolio', href: '/portfolio' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-dark-800 border-r border-dark-600 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-dark-600">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-dark-700 transition-colors"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-700 transition-colors text-gray-300 hover:text-white"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-8 border-t border-dark-600">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Integrations</h3>
            <a
              href="https://letsbonk.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-700 transition-colors text-gray-300 hover:text-white"
            >
              <ExternalLink className="w-5 h-5" />
              <span>letsbonk.fun</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
} 