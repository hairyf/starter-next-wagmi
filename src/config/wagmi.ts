import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet } from 'viem/chains'

export const wagmiConfig = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
})
