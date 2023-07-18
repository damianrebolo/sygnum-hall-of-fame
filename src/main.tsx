import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import './index.css'
import { ThirdwebProvider, metamaskWallet, walletConnect } from '@thirdweb-dev/react'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <ThirdwebProvider supportedWallets={[metamaskWallet(), walletConnect({
      projectId: ""
    })]} activeChain="polygon">
      <App />
    </ThirdwebProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)
