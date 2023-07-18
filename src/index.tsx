import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThirdwebProvider, metamaskWallet, walletConnect } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chains";

import App from "./App";
import "./index.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <ThirdwebProvider supportedWallets={[metamaskWallet(), walletConnect({projectId:'f5f1f699b7be764c15a095e74db04197'})]} activeChain={Polygon}>
      <App />
    </ThirdwebProvider>
  </QueryClientProvider>
);
