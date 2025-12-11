import { If } from '@hairy/react-lib'
import { Button } from '@heroui/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { zeroAddress } from 'viem'
import { useAccount } from 'wagmi'

function Page() {
  const { isConnected } = useAccount()

  async function sign() {
    const number = await client.getBlockNumber()
    wallet.signMessage({
      message: `Hello World! \n Now block number is ${number}`,
    })
  }

  async function transfer() {
    const hash = await writeErc20Transfer({
      args: [zeroAddress, BigInt(1)],
    })
    await client.waitForTransactionReceipt({ hash })
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
