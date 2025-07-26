'use client'

export function OrderBook() {
  // Mock order book data
  const sellOrders = [
    { price: 98.50, amount: 1.234, total: 121.58 },
    { price: 98.45, amount: 2.567, total: 252.82 },
    { price: 98.40, amount: 0.890, total: 87.58 },
    { price: 98.35, amount: 1.456, total: 143.20 },
    { price: 98.30, amount: 3.210, total: 315.54 },
  ]

  const buyOrders = [
    { price: 98.25, amount: 2.100, total: 206.33 },
    { price: 98.20, amount: 1.890, total: 185.60 },
    { price: 98.15, amount: 0.750, total: 73.61 },
    { price: 98.10, amount: 1.340, total: 131.45 },
    { price: 98.05, amount: 2.890, total: 283.36 },
  ]

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="grid grid-cols-3 text-xs text-gray-400 font-medium">
        <span>Price</span>
        <span>Amount</span>
        <span>Total</span>
      </div>

      {/* Sell Orders */}
      <div className="space-y-1">
        {sellOrders.map((order, index) => (
          <div
            key={`sell-${index}`}
            className="grid grid-cols-3 text-sm order-book-row cursor-pointer"
          >
            <span className="text-danger-400 font-mono">{order.price.toFixed(2)}</span>
            <span className="text-gray-300 font-mono">{order.amount.toFixed(3)}</span>
            <span className="text-gray-300 font-mono">{order.total.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Current Price */}
      <div className="border-t border-dark-600 pt-2">
        <div className="text-center">
          <div className="text-lg font-bold text-white">98.45</div>
          <div className="text-xs text-success-400">+2.34%</div>
        </div>
      </div>

      {/* Buy Orders */}
      <div className="space-y-1">
        {buyOrders.map((order, index) => (
          <div
            key={`buy-${index}`}
            className="grid grid-cols-3 text-sm order-book-row cursor-pointer"
          >
            <span className="text-success-400 font-mono">{order.price.toFixed(2)}</span>
            <span className="text-gray-300 font-mono">{order.amount.toFixed(3)}</span>
            <span className="text-gray-300 font-mono">{order.total.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
} 