import { create } from 'zustand'
import { MarketData, Trade, OrderBookEntry } from '@/types'

interface TradingState {
  // Market data
  marketData: MarketData | null
  selectedToken: string
  
  // Trading data
  trades: Trade[]
  orderBook: {
    buys: OrderBookEntry[]
    sells: OrderBookEntry[]
  }
  
  // UI state
  sidebarOpen: boolean
  chartTimeframe: string
  
  // Actions
  setMarketData: (data: MarketData) => void
  setSelectedToken: (token: string) => void
  addTrade: (trade: Trade) => void
  setOrderBook: (buys: OrderBookEntry[], sells: OrderBookEntry[]) => void
  setSidebarOpen: (open: boolean) => void
  setChartTimeframe: (timeframe: string) => void
}

export const useTradingStore = create<TradingState>((set) => ({
  // Initial state
  marketData: null,
  selectedToken: 'SOL/USDC',
  trades: [],
  orderBook: {
    buys: [],
    sells: []
  },
  sidebarOpen: false,
  chartTimeframe: '1H',
  
  // Actions
  setMarketData: (data) => set({ marketData: data }),
  setSelectedToken: (token) => set({ selectedToken: token }),
  addTrade: (trade) => set((state) => ({ 
    trades: [trade, ...state.trades.slice(0, 99)] // Keep last 100 trades
  })),
  setOrderBook: (buys, sells) => set({ 
    orderBook: { buys, sells } 
  }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setChartTimeframe: (timeframe) => set({ chartTimeframe: timeframe }),
})) 