// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "evmos/erc20/v1/genesis.proto" (package "evmos.erc20.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import type { PartialMessage } from '@protobuf-ts/runtime'
import { reflectionMergePartial } from '@protobuf-ts/runtime'
import { MESSAGE_TYPE } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'
import { TokenPair } from './erc20'
/**
 * GenesisState defines the module's genesis state.
 *
 * @generated from protobuf messages evmos.erc20.v1.GenesisState
 */
export interface GenesisState {
  /**
   * module parameters
   *
   * @generated from protobuf field: evmos.erc20.v1.Params params = 1;
   */
  params?: Params
  /**
   * registered token pairs
   *
   * @generated from protobuf field: repeated evmos.erc20.v1.TokenPair token_pairs = 2;
   */
  tokenPairs: TokenPair[]
}
/**
 * Params defines the erc20 module params
 *
 * @generated from protobuf messages evmos.erc20.v1.Params
 */
export interface Params {
  /**
   * parameter to enable the intrarelaying of Cosmos coins <--> ERC20 tokens.
   *
   * @generated from protobuf field: bool enable_erc20 = 1;
   */
  enableErc20: boolean
  /**
   * parameter to enable the EVM hook to convert an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   *
   * @generated from protobuf field: bool enable_evm_hook = 2;
   */
  enableEvmHook: boolean
}
// @generated messages type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
  constructor() {
    super('evmos.erc20.v1.GenesisState', [
      {
        no: 1,
        name: 'params',
        kind: 'message',
        T: () => Params,
        options: { 'gogoproto.nullable': false },
      },
      {
        no: 2,
        name: 'token_pairs',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => TokenPair,
        options: { 'gogoproto.nullable': false },
      },
    ])
  }
  create(value?: PartialMessage<GenesisState>): GenesisState {
    const message = { tokenPairs: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<GenesisState>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: GenesisState,
  ): GenesisState {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* evmos.erc20.v1.Params params */ 1:
          message.params = Params.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.params,
          )
          break
        case /* repeated evmos.erc20.v1.TokenPair token_pairs */ 2:
          message.tokenPairs.push(
            TokenPair.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            )
          let d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: GenesisState,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* evmos.erc20.v1.Params params = 1; */
    if (message.params)
      Params.internalBinaryWrite(
        message.params,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated evmos.erc20.v1.TokenPair token_pairs = 2; */
    for (let i = 0; i < message.tokenPairs.length; i++)
      TokenPair.internalBinaryWrite(
        message.tokenPairs[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    let u = options.writeUnknownFields
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      )
    return writer
  }
}
/**
 * @generated MessageType for protobuf messages evmos.erc20.v1.GenesisState
 */
export const GenesisState = new GenesisState$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
  constructor() {
    super('evmos.erc20.v1.Params', [
      { no: 1, name: 'enable_erc20', kind: 'scalar', T: 8 /*ScalarType.BOOL*/ },
      {
        no: 2,
        name: 'enable_evm_hook',
        kind: 'scalar',
        T: 8 /*ScalarType.BOOL*/,
        options: { 'gogoproto.customname': 'EnableEVMHook' },
      },
    ])
  }
  create(value?: PartialMessage<Params>): Params {
    const message = { enableErc20: false, enableEvmHook: false }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<Params>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Params,
  ): Params {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* bool enable_erc20 */ 1:
          message.enableErc20 = reader.bool()
          break
        case /* bool enable_evm_hook */ 2:
          message.enableEvmHook = reader.bool()
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            )
          let d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: Params,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* bool enable_erc20 = 1; */
    if (message.enableErc20 !== false)
      writer.tag(1, WireType.Varint).bool(message.enableErc20)
    /* bool enable_evm_hook = 2; */
    if (message.enableEvmHook !== false)
      writer.tag(2, WireType.Varint).bool(message.enableEvmHook)
    let u = options.writeUnknownFields
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      )
    return writer
  }
}
/**
 * @generated MessageType for protobuf messages evmos.erc20.v1.Params
 */
export const Params = new Params$Type()
