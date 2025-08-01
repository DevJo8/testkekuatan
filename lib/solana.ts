// Solana network configuration - using devnet
export const SOLANA_NETWORK = 'devnet'
export const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.devnet.solana.com'

// Common token addresses (Devnet)
export const TOKEN_ADDRESSES = {
  SOL: 'So11111111111111111111111111111111111111112', // Wrapped SOL
  USDC: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // USDC
  USDT: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', // USDT
}

// Token metadata
export const TOKEN_METADATA = {
  [TOKEN_ADDRESSES.SOL]: {
    symbol: 'SOL',
    name: 'Solana',
    decimals: 9,
    logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png'
  },
  [TOKEN_ADDRESSES.USDC]: {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png'
  },
  [TOKEN_ADDRESSES.USDT]: {
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    logoURI: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.png'
  }
}

// Utility functions
export function isValidPublicKey(address: string): boolean {
  // Simple validation for Solana address format
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)
}

export function formatLamports(lamports: number, decimals: number = 9): number {
  return lamports / Math.pow(10, decimals)
}

export function toLamports(amount: number, decimals: number = 9): number {
  return Math.floor(amount * Math.pow(10, decimals))
}

// Mock market data for development
export function getMockMarketData(): any {
  return {
    price: 98.45 + (Math.random() - 0.5) * 2,
    change: (Math.random() - 0.5) * 10,
    volume: 1000000 + Math.random() * 500000,
    high: 99.20 + Math.random() * 2,
    low: 97.80 - Math.random() * 2,
    marketCap: 45000000000 + Math.random() * 1000000000
  }
}

// Mock order book data
export function getMockOrderBook(): any {
  const basePrice = 98.45
  const buys = []
  const sells = []
  
  for (let i = 0; i < 10; i++) {
    const buyPrice = basePrice - (i + 1) * 0.05
    const sellPrice = basePrice + (i + 1) * 0.05
    const amount = 0.5 + Math.random() * 2
    
    buys.push({
      price: buyPrice,
      amount: amount,
      total: buyPrice * amount
    })
    
    sells.push({
      price: sellPrice,
      amount: amount,
      total: sellPrice * amount
    })
  }
  
  return { buys, sells }
}

// Mock recent trades
export function getMockTrades(): any[] {
  const trades = []
  const basePrice = 98.45
  
  for (let i = 0; i < 20; i++) {
    const price = basePrice + (Math.random() - 0.5) * 1
    const amount = 0.1 + Math.random() * 3
    const type = Math.random() > 0.5 ? 'buy' : 'sell'
    const time = new Date(Date.now() - i * 60000).toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    
    trades.push({
      id: i + 1,
      price: parseFloat(price.toFixed(2)),
      amount: parseFloat(amount.toFixed(3)),
      type,
      time
    })
  }
  
  return trades
} 