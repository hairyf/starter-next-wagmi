import { defineConfig } from 'etherlib-generator'
import { wagmi } from 'etherlib-generator/plugins'
import { erc20Abi } from 'viem'
import { mainnet } from 'viem/chains'
import 'dotenv/config'

export default defineConfig({
  // Output directory for generated code
  output: 'src/generated',

  fragments: {
    ERC20: erc20Abi,
  },
  // Manually add chain networks
  chains: {
    ethereum: mainnet as any,
  },

  plugins: [
    // Generate code for viem
    wagmi(), // or ethers()
    // hardhat(),
  ],
})
