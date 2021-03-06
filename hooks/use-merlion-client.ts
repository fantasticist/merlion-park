import { useEffect, useCallback, useState } from 'react'
import { MerlionClient } from '@merjs/core'

import { CHAIN_ID, GRPC_ENDPOINT } from '@/constants'
import { useKeplr } from './use-keplr'

export const useMerlionClient = () => {
  const { signer, address } = useKeplr()

  const [merlionClient, setMerlionClient] = useState<MerlionClient>()

  const createMerlionClient = useCallback(async () => {
    setMerlionClient(
      await MerlionClient.create({
        grpcWebUrl: GRPC_ENDPOINT,
        signer,
        address,
        chainId: CHAIN_ID,
      }),
    )
  }, [signer, address])

  useEffect(() => {
    void createMerlionClient()
  }, [createMerlionClient])

  return merlionClient
}
