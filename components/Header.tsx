'use client'

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Menu, Zap, TrendingUp, Settings } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-dark-800 border-b border-dark-600 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-dark-700 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-300" />
          </button>
          
          <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-primary-400" />
            <h1 className="text-xl font-bold text-white">Solana Terminal</h1>
            <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded-full">
              letsbonk.fun
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <TrendingUp className="w-4 h-4" />
            <span>SOL: $98.45</span>
            <span className="text-success-400">+2.34%</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-dark-700 transition-colors">
              <Settings className="w-5 h-5 text-gray-300" />
            </button>
            <WalletMultiButton className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors" />
          </div>
        </div>
      </div>
    </header>
  )
} 