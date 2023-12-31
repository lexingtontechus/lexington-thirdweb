"use client";
import { ThemeProvider } from "next-themes";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

export function Providers({ children }) {
  //export function Providers({ children }) {
  return (
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect({
          projectId:
            //"process.env.NEXT_PUBLIC_PROJECT_ID" ||
            "87491f051df9c49d7834ffc89cfd9dc7",
        }),
      ]}
      clientId="7f865d42b1215fe56877ba215d3b0c5d" // "process.env.NEXT_PUBLIC_CLIENTID" ||
    >
      <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
    </ThirdwebProvider>
  );
}
