'use client'

import { useState } from 'react'

export function TradingForm() {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('98.45')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle order submission
    console.log(`${orderType} order: ${amount} SOL at $${price}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Order Type Toggle */}
      <div className="flex bg-dark-700 rounded-lg p-1">
        <button
          type="button"
          onClick={() => setOrderType('buy')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            orderType === 'buy'
              ? 'bg-success-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="inline mr-2">📈</span>
          Buy
        </button>
        <button
          type="button"
          onClick={() => setOrderType('sell')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            orderType === 'sell'
              ? 'bg-danger-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="inline mr-2">📉</span>
          Sell
        </button>
      </div>

      {/* Amount Input */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Amount (SOL)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Price Input */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Price (USDC)
        </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          className="w-full bg-dark-700 border border-dark-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Total */}
      <div className="bg-dark-700 rounded-lg p-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Total:</span>
          <span className="text-white font-medium">
            ${amount && price ? (parseFloat(amount) * parseFloat(price)).toFixed(2) : '0.00'}
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
          orderType === 'buy'
            ? 'bg-success-600 hover:bg-success-700'
            : 'bg-danger-600 hover:bg-danger-700'
        }`}
      >
        {orderType === 'buy' ? 'Buy SOL' : 'Sell SOL'}
      </button>

      {/* Quick Amount Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {[0.1, 0.5, 1.0].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setAmount(value.toString())}
            className="py-2 px-3 text-sm bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
          >
            {value}
          </button>
        ))}
      </div>
    </form>
  )
} 