// Trading related types
export interface Trade {
  id: number
  price: number
  amount: number
  type: 'buy' | 'sell'
  time: string
}

export interface OrderBookEntry {
  price: number
  amount: number
  total: number
}

export interface MarketData {
  price: number
  change: number
  volume: number
  high: number
  low: number
  marketCap: number
}

export interface Token {
  symbol: string
  name: string
  address: string
  decimals: number
  logoURI?: string
}

// Wallet related types
export interface WalletBalance {
  token: string
  balance: number
  usdValue: number
}

// Chart data types
export interface ChartDataPoint {
  time: string
  price: number
  volume?: number
}

// Order types
export interface Order {
  id: string
  type: 'buy' | 'sell'
  amount: number
  price: number
  status: 'pending' | 'filled' | 'cancelled'
  timestamp: number
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// letsbonk.fun integration types
export interface LetsBonkData {
  tokenAddress: string
  price: number
  volume24h: number
  marketCap: number
  holders: number
} 