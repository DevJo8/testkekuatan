'use client'

interface MarketInfoProps {
  token: string
}

export function MarketInfo({ token }: MarketInfoProps) {
  // Mock data - in real app this would come from API
  const marketData = {
    price: 98.45,
    change: 2.34,
    volume: 1234567,
    high: 99.20,
    low: 97.80,
    marketCap: 45678900000
  }

  const isPositive = marketData.change >= 0

  return (
    <div className="bg-dark-800 rounded-lg border border-dark-600 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-2xl font-bold text-white">{token}</h1>
            <p className="text-sm text-gray-400">Solana / USDC</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-white">${marketData.price}</span>
            <div className={`flex items-center space-x-1 ${isPositive ? 'text-success-400' : 'text-danger-400'}`}>
              <span className="w-4 h-4">{isPositive ? '📈' : '📉'}</span>
              <span className="text-sm font-medium">
                {isPositive ? '+' : ''}{marketData.change}%
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <div className="text-center">
            <p className="text-gray-400">24h Volume</p>
            <p className="text-white font-medium">${(marketData.volume / 1000000).toFixed(2)}M</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">24h High</p>
            <p className="text-white font-medium">${marketData.high}</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">24h Low</p>
            <p className="text-white font-medium">${marketData.low}</p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400">Market Cap</p>
            <p className="text-white font-medium">${(marketData.marketCap / 1000000000).toFixed(2)}B</p>
          </div>
        </div>
      </div>
    </div>
  )
} 