import { wait } from '@hairy/ether-lib'
import { If } from '@hairy/react-lib'
import { contracts, provider, signer } from '@harsta/client'
import { Button } from '@heroui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

function Page() {
  const { isConnected } = useAccount()

  async function sign() {
    const number = await provider.getBlockNumber()
    signer.signMessage(`Hello World! \n Now block number is ${number}`)
  }

  async function transfer() {
    const erc20 = contracts.ERC20.resolve('signer')
    await wait(erc20.transfer('[your address]', 1))
  }

  return (
    <layouts.default>
      <div className="mb-4 flex">
        <ConnectButton />
      </div>
      <If cond={isConnected} tag="div" className="flex gap-2">
        <Button onPress={sign} color="primary">Sign Message</Button>
        <Button onPress={transfer} color="secondary">Transfer erc20</Button>
      </If>
    </layouts.default>
  )
}

export default Page
