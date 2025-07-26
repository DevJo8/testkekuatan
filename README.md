# Solana Trading Terminal

A modern, professional trading terminal for Solana blockchain, integrated with `letsbonk.fun`. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

### 🚀 Core Features
- **Real-time Price Charts** - Interactive price charts with multiple timeframes
- **Order Book** - Live order book with buy/sell orders
- **Trading Interface** - Buy/sell orders with price and amount inputs
- **Recent Trades** - Live feed of recent transactions
- **Wallet Integration** - Support for Phantom, Solflare, and Backpack wallets

### 🎨 UI/UX Features
- **Dark Theme** - Professional dark theme optimized for trading
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Real-time Updates** - Live price updates and market data
- **Glassmorphism Effects** - Modern UI with glass-like components

### 🔗 Integrations
- **letsbonk.fun** - Direct integration with the letsbonk platform
- **Solana Network** - Full Solana blockchain support
- **Phantom Wallet** - Ready for Phantom wallet integration

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Charts**: Recharts
- **Blockchain**: Ready for Solana Web3.js integration
- **State Management**: Zustand
- **Icons**: Emoji icons (ready for Lucide React)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Solana wallet (Phantom, Solflare, or Backpack)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd solana-trading-terminal
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
NEXT_PUBLIC_LETSBONK_API_URL=https://api.letsbonk.fun
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Header with wallet connection
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── TradingTerminal.tsx # Main trading interface
│   ├── PriceChart.tsx     # Price chart component
│   ├── OrderBook.tsx      # Order book display
│   ├── TradingForm.tsx    # Buy/sell form
│   ├── MarketInfo.tsx     # Market statistics
│   ├── RecentTrades.tsx   # Recent trades table
│   └── WalletProvider.tsx # Solana wallet provider
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Architecture

Based on the Publisher Exchange Stack diagram, this application implements:

### User Layer
- **Trading Terminal Interface** - Professional trading interface
- **Wallet Integration** - Seamless wallet connection
- **Responsive Design** - Mobile and desktop optimized

### Token & Markets Layer
- **Solana Token Support** - Native SOL and SPL tokens
- **Market Data** - Real-time price feeds and order books
- **Trading Pairs** - SOL/USDC and other major pairs

### Core Functionality Layer (Doppler Equivalent)
- **Custom Markets** - Support for custom trading pairs
- **App Integrations** - letsbonk.fun integration
- **Improved Monetization** - Advanced trading features
- **Better Price Discovery** - Real-time market data
- **Sniping Protection** - Advanced order types and protection

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features

1. **New Trading Pairs**: Add to the market data configuration
2. **New Wallet Support**: Extend the wallet adapter configuration
3. **New Chart Types**: Extend the PriceChart component
4. **New Order Types**: Add to the TradingForm component

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community
- Email: support@solana-terminal.com

## Roadmap

- [ ] Advanced order types (limit, stop-loss)
- [ ] Portfolio management
- [ ] Trading history
- [ ] Mobile app
- [ ] More wallet integrations
- [ ] Advanced charting tools
- [ ] Social trading features
- [ ] API for third-party integrations 