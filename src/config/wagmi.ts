import { getDefaultConfig } from '@rainbow-me/rainbowkit'

export const wagmiConfig = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: Object.values(chains) as any,
  ssr: true, // If your dApp uses server side rendering (SSR)
})
