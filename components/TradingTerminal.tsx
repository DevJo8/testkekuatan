'use client'

import { useState } from 'react'
import { PriceChart } from './PriceChart'
import { OrderBook } from './OrderBook'
import { TradingForm } from './TradingForm'
import { MarketInfo } from './MarketInfo'
import { RecentTrades } from './RecentTrades'

export function TradingTerminal() {
  const [selectedToken, setSelectedToken] = useState('SOL/USDC')

  return (
    <div className="p-4 space-y-4">
      {/* Market Info Bar */}
      <MarketInfo token={selectedToken} />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Price Chart - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <div className="bg-dark-800 rounded-lg border border-dark-600 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Price Chart</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-primary-600 text-white rounded">1H</button>
                <button className="px-3 py-1 text-xs bg-dark-700 text-gray-300 rounded hover:bg-dark-600">4H</button>
                <button className="px-3 py-1 text-xs bg-dark-700 text-gray-300 rounded hover:bg-dark-600">1D</button>
                <button className="px-3 py-1 text-xs bg-dark-700 text-gray-300 rounded hover:bg-dark-600">1W</button>
              </div>
            </div>
            <PriceChart />
          </div>
        </div>

        {/* Order Book */}
        <div className="lg:col-span-1">
          <div className="bg-dark-800 rounded-lg border border-dark-600 p-4">
            <h2 className="text-lg font-semibold text-white mb-4">Order Book</h2>
            <OrderBook />
          </div>
        </div>

        {/* Trading Form */}
        <div className="lg:col-span-1">
          <div className="bg-dark-800 rounded-lg border border-dark-600 p-4">
            <h2 className="text-lg font-semibold text-white mb-4">Trade</h2>
            <TradingForm />
          </div>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-dark-800 rounded-lg border border-dark-600 p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Recent Trades</h2>
        <RecentTrades />
      </div>
    </div>
  )
} 