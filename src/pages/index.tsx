import { wait } from '@hairy/ether-lib'
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
      <div className="flex-center">
        <ConnectButton />
        <Button>12321</Button>
        <div className="text-red-100">123213</div>
      </div>
      {isConnected && (
        <div className="flex gap-2">
          <div className="flex-center">
            <button onClick={sign}>Sign Message</button>
          </div>
          <div className="flex-center">
            <button onClick={transfer}>Transfer erc20</button>
          </div>
        </div>
      )}
    </layouts.default>
  )
}

export default Page
