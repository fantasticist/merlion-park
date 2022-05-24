import type { StateCreator } from 'zustand'
import { OfflineSigner } from '@merlion/sdk'

import { CHAIN_ID, CHAIN_INFO } from '@/constants'

export interface KeplrSlice {
  isActive: boolean
  address?: string
  signer?: OfflineSigner
  connect: () => void
}

export const createKeplrSlice: StateCreator<KeplrSlice> = (set) => ({
  isActive: false,
  address: undefined,
  connect: async () => {
    try {
      await window.keplr.enable(CHAIN_ID)
    } catch {
      await window.keplr
        .experimentalSuggestChain(CHAIN_INFO)
        .catch((error) => console.error(error))
    }

    const offlineSigner = window.keplr.getOfflineSigner(CHAIN_ID)
    const [account] = await offlineSigner.getAccounts()

    set({ isActive: true, address: account.address, signer: offlineSigner })
  },
})
