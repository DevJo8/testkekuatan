# Deployment Guide - Solana Trading Terminal

## Deploy to Vercel

### Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Solana Trading Terminal"
```

2. Create a new repository on GitHub

3. Push to GitHub:
```bash
git remote add origin https://github.com/yourusername/solana-trading-terminal.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

2. Click "New Project"

3. Import your GitHub repository

4. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. Add Environment Variables (optional):
   ```
   NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com
   NEXT_PUBLIC_LETSBONK_API_URL=https://api.letsbonk.fun
   ```

6. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## Environment Variables

Create a `.env.local` file for local development:

```env
# Solana RPC URL (Devnet for testing, Mainnet for production)
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.devnet.solana.com

# letsbonk.fun API URL
NEXT_PUBLIC_LETSBONK_API_URL=https://api.letsbonk.fun

# Optional: Custom RPC endpoint for better performance
# NEXT_PUBLIC_SOLANA_RPC_URL=https://your-custom-rpc-endpoint.com
```

## Build Optimization

The project is already optimized for production with:

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for optimized CSS
- **Tree shaking** for smaller bundle sizes
- **Image optimization** with Next.js Image component

## Performance Tips

1. **Use a custom RPC endpoint** for better performance
2. **Enable caching** for static assets
3. **Optimize images** using Next.js Image component
4. **Use CDN** for better global performance

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Check that all dependencies are installed:
```bash
npm install
```

2. Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

3. Check TypeScript errors:
```bash
npx tsc --noEmit
```

### Runtime Errors

1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure Solana wallet is connected properly

## Monitoring

After deployment, monitor:

- **Build logs** in Vercel dashboard
- **Function logs** for API routes
- **Performance metrics** in Vercel Analytics
- **Error tracking** (consider adding Sentry)

## Updates

To update your deployed application:

1. Make changes to your code
2. Commit and push to GitHub:
```bash
git add .
git commit -m "Update: description of changes"
git push
```

3. Vercel will automatically redeploy

## Security Considerations

1. **Environment Variables**: Never commit sensitive data
2. **API Keys**: Use environment variables for all API keys
3. **CORS**: Configure CORS properly for production
4. **Rate Limiting**: Implement rate limiting for API routes
5. **Input Validation**: Validate all user inputs

## Support

If you encounter issues:

1. Check the [Vercel documentation](https://vercel.com/docs)
2. Review [Next.js documentation](https://nextjs.org/docs)
3. Check GitHub issues for similar problems
4. Contact support if needed 