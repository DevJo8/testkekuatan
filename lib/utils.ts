import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility function for combining Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format number with commas
export function formatNumber(num: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num)
}

// Format currency
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

// Format percentage
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`
}

// Format time
export function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

// Calculate price change percentage
export function calculatePriceChange(currentPrice: number, previousPrice: number): number {
  return ((currentPrice - previousPrice) / previousPrice) * 100
}

// Generate random price data for demo
export function generateMockPriceData(initialPrice: number, points: number = 100): Array<{time: string, price: number}> {
  const data = []
  let currentPrice = initialPrice
  
  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * 2 // Random change between -1 and 1
    currentPrice += change
    currentPrice = Math.max(currentPrice, 0) // Ensure price doesn't go negative
    
    const time = new Date(Date.now() - (points - i) * 60000).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    })
    
    data.push({
      time,
      price: parseFloat(currentPrice.toFixed(2))
    })
  }
  
  return data
}

// Truncate wallet address
export function truncateAddress(address: string, length: number = 4): string {
  if (!address) return ''
  return `${address.slice(0, length)}...${address.slice(-length)}`
}

// Validate Solana address
export function isValidSolanaAddress(address: string): boolean {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)
}

// Sleep utility for async operations
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
} 