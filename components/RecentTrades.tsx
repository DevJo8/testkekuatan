'use client'

export function RecentTrades() {
  // Mock recent trades data
  const trades = [
    { id: 1, price: 98.45, amount: 1.234, type: 'buy', time: '14:32:15' },
    { id: 2, price: 98.42, amount: 0.567, type: 'sell', time: '14:31:48' },
    { id: 3, price: 98.48, amount: 2.100, type: 'buy', time: '14:31:22' },
    { id: 4, price: 98.40, amount: 0.890, type: 'sell', time: '14:30:55' },
    { id: 5, price: 98.46, amount: 1.456, type: 'buy', time: '14:30:18' },
    { id: 6, price: 98.43, amount: 0.750, type: 'sell', time: '14:29:42' },
    { id: 7, price: 98.47, amount: 3.210, type: 'buy', time: '14:29:15' },
    { id: 8, price: 98.41, amount: 1.890, type: 'sell', time: '14:28:48' },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-xs text-gray-400 border-b border-dark-600">
            <th className="text-left py-2 px-2">Price</th>
            <th className="text-left py-2 px-2">Amount</th>
            <th className="text-left py-2 px-2">Total</th>
            <th className="text-left py-2 px-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr key={trade.id} className="border-b border-dark-700 hover:bg-dark-700">
              <td className={`py-2 px-2 font-mono text-sm ${
                trade.type === 'buy' ? 'text-success-400' : 'text-danger-400'
              }`}>
                ${trade.price.toFixed(2)}
              </td>
              <td className="py-2 px-2 text-gray-300 font-mono text-sm">
                {trade.amount.toFixed(3)}
              </td>
              <td className="py-2 px-2 text-gray-300 font-mono text-sm">
                ${(trade.price * trade.amount).toFixed(2)}
              </td>
              <td className="py-2 px-2 text-gray-400 text-sm">
                {trade.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 