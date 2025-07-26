'use client'

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
            className="p-2 rounded-lg hover:bg-dark-700 transition-colors text-gray-300"
          >
            ☰
          </button>
          
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 text-primary-400">⚡</span>
            <h1 className="text-xl font-bold text-white">Solana Terminal</h1>
            <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded-full">
              letsbonk.fun
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <span>📈</span>
            <span>SOL: $98.45</span>
            <span className="text-success-400">+2.34%</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-lg hover:bg-dark-700 transition-colors text-gray-300">
              ⚙️
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 