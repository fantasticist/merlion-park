export interface ProtoMsg {
  typeUrl: string
  value: any
  encode(): Uint8Array
}

export type AminoMsg = {
  type: string
  value: any
}

export interface Msg {
  toProto(): Promise<ProtoMsg>
  toAmino(): Promise<AminoMsg>
}

export interface MsgParams {}

/////////////////////////////////////////////////////
// bank
/////////////////////////////////////////////////////

/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export type Coin = {
  denom: string
  amount: string
}

/** Input models transaction input for MsgMultiSend. */
export type Input = {
  address: string
  coins: Coin[]
}

/** Output models transaction outputs for MsgMultiSend. */
export type Output = {
  address: string
  coins: Coin[]
}
