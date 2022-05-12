// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ethermint/evm/v1/tx.proto" (package "ethermint.evm.v1", syntax proto3)
// tslint:disable
import { ServiceType } from '@protobuf-ts/runtime-rpc'
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
import { Log } from './evm'
import { AccessTuple } from './evm'
import { Any } from '../../../google/protobuf/any'
/**
 * MsgEthereumTx encapsulates an Ethereum transaction as an SDK messages.
 *
 * @generated from protobuf messages ethermint.evm.v1.MsgEthereumTx
 */
export interface MsgEthereumTx {
  /**
   * inner transaction data
   *
   * @generated from protobuf field: google.protobuf.Any data = 1;
   */
  data?: Any // caches
  /**
   * encoded storage size of the transaction
   *
   * @generated from protobuf field: double size = 2;
   */
  size: number
  /**
   * transaction hash in hex format
   *
   * @generated from protobuf field: string hash = 3;
   */
  hash: string
  /**
   * ethereum signer address in hex format. This address value is checked
   * against the address derived from the signature (V, R, S) using the
   * secp256k1 elliptic curve
   *
   * @generated from protobuf field: string from = 4;
   */
  from: string
}
/**
 * LegacyTx is the transaction data of regular Ethereum transactions.
 *
 * @generated from protobuf messages ethermint.evm.v1.LegacyTx
 */
export interface LegacyTx {
  /**
   * nonce corresponds to the account nonce (transaction sequence).
   *
   * @generated from protobuf field: uint64 nonce = 1;
   */
  nonce: string
  /**
   * gas price defines the value for each gas unit
   *
   * @generated from protobuf field: string gas_price = 2;
   */
  gasPrice: string
  /**
   * gas defines the gas limit defined for the transaction.
   *
   * @generated from protobuf field: uint64 gas = 3;
   */
  gas: string
  /**
   * hex formatted address of the recipient
   *
   * @generated from protobuf field: string to = 4;
   */
  to: string
  /**
   * value defines the unsigned integer value of the transaction amount.
   *
   * @generated from protobuf field: string value = 5;
   */
  value: string
  /**
   * input defines the data payload bytes of the transaction.
   *
   * @generated from protobuf field: bytes data = 6;
   */
  data: Uint8Array
  /**
   * v defines the signature value
   *
   * @generated from protobuf field: bytes v = 7;
   */
  v: Uint8Array
  /**
   * r defines the signature value
   *
   * @generated from protobuf field: bytes r = 8;
   */
  r: Uint8Array
  /**
   * s define the signature value
   *
   * @generated from protobuf field: bytes s = 9;
   */
  s: Uint8Array
}
/**
 * AccessListTx is the data of EIP-2930 access list transactions.
 *
 * @generated from protobuf messages ethermint.evm.v1.AccessListTx
 */
export interface AccessListTx {
  /**
   * destination EVM chain ID
   *
   * @generated from protobuf field: string chain_id = 1;
   */
  chainId: string
  /**
   * nonce corresponds to the account nonce (transaction sequence).
   *
   * @generated from protobuf field: uint64 nonce = 2;
   */
  nonce: string
  /**
   * gas price defines the value for each gas unit
   *
   * @generated from protobuf field: string gas_price = 3;
   */
  gasPrice: string
  /**
   * gas defines the gas limit defined for the transaction.
   *
   * @generated from protobuf field: uint64 gas = 4;
   */
  gas: string
  /**
   * hex formatted address of the recipient
   *
   * @generated from protobuf field: string to = 5;
   */
  to: string
  /**
   * value defines the unsigned integer value of the transaction amount.
   *
   * @generated from protobuf field: string value = 6;
   */
  value: string
  /**
   * input defines the data payload bytes of the transaction.
   *
   * @generated from protobuf field: bytes data = 7;
   */
  data: Uint8Array
  /**
   * @generated from protobuf field: repeated ethermint.evm.v1.AccessTuple accesses = 8;
   */
  accesses: AccessTuple[]
  /**
   * v defines the signature value
   *
   * @generated from protobuf field: bytes v = 9;
   */
  v: Uint8Array
  /**
   * r defines the signature value
   *
   * @generated from protobuf field: bytes r = 10;
   */
  r: Uint8Array
  /**
   * s define the signature value
   *
   * @generated from protobuf field: bytes s = 11;
   */
  s: Uint8Array
}
/**
 * DynamicFeeTx is the data of EIP-1559 dinamic fee transactions.
 *
 * @generated from protobuf messages ethermint.evm.v1.DynamicFeeTx
 */
export interface DynamicFeeTx {
  /**
   * destination EVM chain ID
   *
   * @generated from protobuf field: string chain_id = 1;
   */
  chainId: string
  /**
   * nonce corresponds to the account nonce (transaction sequence).
   *
   * @generated from protobuf field: uint64 nonce = 2;
   */
  nonce: string
  /**
   * gas tip cap defines the max value for the gas tip
   *
   * @generated from protobuf field: string gas_tip_cap = 3;
   */
  gasTipCap: string
  /**
   * gas fee cap defines the max value for the gas fee
   *
   * @generated from protobuf field: string gas_fee_cap = 4;
   */
  gasFeeCap: string
  /**
   * gas defines the gas limit defined for the transaction.
   *
   * @generated from protobuf field: uint64 gas = 5;
   */
  gas: string
  /**
   * hex formatted address of the recipient
   *
   * @generated from protobuf field: string to = 6;
   */
  to: string
  /**
   * value defines the the transaction amount.
   *
   * @generated from protobuf field: string value = 7;
   */
  value: string
  /**
   * input defines the data payload bytes of the transaction.
   *
   * @generated from protobuf field: bytes data = 8;
   */
  data: Uint8Array
  /**
   * @generated from protobuf field: repeated ethermint.evm.v1.AccessTuple accesses = 9;
   */
  accesses: AccessTuple[]
  /**
   * v defines the signature value
   *
   * @generated from protobuf field: bytes v = 10;
   */
  v: Uint8Array
  /**
   * r defines the signature value
   *
   * @generated from protobuf field: bytes r = 11;
   */
  r: Uint8Array
  /**
   * s define the signature value
   *
   * @generated from protobuf field: bytes s = 12;
   */
  s: Uint8Array
}
/**
 * @generated from protobuf messages ethermint.evm.v1.ExtensionOptionsEthereumTx
 */
export interface ExtensionOptionsEthereumTx {}
/**
 * MsgEthereumTxResponse defines the Msg/EthereumTx response type.
 *
 * @generated from protobuf messages ethermint.evm.v1.MsgEthereumTxResponse
 */
export interface MsgEthereumTxResponse {
  /**
   * ethereum transaction hash in hex format. This hash differs from the
   * Tendermint sha256 hash of the transaction bytes. See
   * https://github.com/tendermint/tendermint/issues/6539 for reference
   *
   * @generated from protobuf field: string hash = 1;
   */
  hash: string
  /**
   * logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   *
   * @generated from protobuf field: repeated ethermint.evm.v1.Log logs = 2;
   */
  logs: Log[]
  /**
   * returned data from evm function (result or data supplied with revert
   * opcode)
   *
   * @generated from protobuf field: bytes ret = 3;
   */
  ret: Uint8Array
  /**
   * vm error is the error returned by vm execution
   *
   * @generated from protobuf field: string vm_error = 4;
   */
  vmError: string
  /**
   * gas consumed by the transaction
   *
   * @generated from protobuf field: uint64 gas_used = 5;
   */
  gasUsed: string
}
// @generated messages type with reflection information, may provide speed optimized methods
class MsgEthereumTx$Type extends MessageType<MsgEthereumTx> {
  constructor() {
    super(
      'ethermint.evm.v1.MsgEthereumTx',
      [
        { no: 1, name: 'data', kind: 'message', T: () => Any },
        {
          no: 2,
          name: 'size',
          kind: 'scalar',
          T: 1 /*ScalarType.DOUBLE*/,
          options: { 'gogoproto.jsontag': '-' },
        },
        {
          no: 3,
          name: 'hash',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'rlp:"-"' },
        },
        { no: 4, name: 'from', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      ],
      { 'gogoproto.goproto_getters': false },
    )
  }
  create(value?: PartialMessage<MsgEthereumTx>): MsgEthereumTx {
    const message = { size: 0, hash: '', from: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgEthereumTx>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgEthereumTx,
  ): MsgEthereumTx {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* google.protobuf.Any data */ 1:
          message.data = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.data,
          )
          break
        case /* double size */ 2:
          message.size = reader.double()
          break
        case /* string hash */ 3:
          message.hash = reader.string()
          break
        case /* string from */ 4:
          message.from = reader.string()
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
    message: MsgEthereumTx,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* google.protobuf.Any data = 1; */
    if (message.data)
      Any.internalBinaryWrite(
        message.data,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* double size = 2; */
    if (message.size !== 0) writer.tag(2, WireType.Bit64).double(message.size)
    /* string hash = 3; */
    if (message.hash !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.hash)
    /* string from = 4; */
    if (message.from !== '')
      writer.tag(4, WireType.LengthDelimited).string(message.from)
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
 * @generated MessageType for protobuf messages ethermint.evm.v1.MsgEthereumTx
 */
export const MsgEthereumTx = new MsgEthereumTx$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class LegacyTx$Type extends MessageType<LegacyTx> {
  constructor() {
    super(
      'ethermint.evm.v1.LegacyTx',
      [
        { no: 1, name: 'nonce', kind: 'scalar', T: 4 /*ScalarType.UINT64*/ },
        {
          no: 2,
          name: 'gas_price',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
          },
        },
        {
          no: 3,
          name: 'gas',
          kind: 'scalar',
          T: 4 /*ScalarType.UINT64*/,
          options: { 'gogoproto.customname': 'GasLimit' },
        },
        { no: 4, name: 'to', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
        {
          no: 5,
          name: 'value',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
            'gogoproto.customname': 'Amount',
          },
        },
        { no: 6, name: 'data', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        { no: 7, name: 'v', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        { no: 8, name: 'r', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        { no: 9, name: 's', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
      ],
      {
        'gogoproto.goproto_getters': false,
        'cosmos_proto.implements_interface': 'TxData',
      },
    )
  }
  create(value?: PartialMessage<LegacyTx>): LegacyTx {
    const message = {
      nonce: '0',
      gasPrice: '',
      gas: '0',
      to: '',
      value: '',
      data: new Uint8Array(0),
      v: new Uint8Array(0),
      r: new Uint8Array(0),
      s: new Uint8Array(0),
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<LegacyTx>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: LegacyTx,
  ): LegacyTx {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* uint64 nonce */ 1:
          message.nonce = reader.uint64().toString()
          break
        case /* string gas_price */ 2:
          message.gasPrice = reader.string()
          break
        case /* uint64 gas */ 3:
          message.gas = reader.uint64().toString()
          break
        case /* string to */ 4:
          message.to = reader.string()
          break
        case /* string value */ 5:
          message.value = reader.string()
          break
        case /* bytes data */ 6:
          message.data = reader.bytes()
          break
        case /* bytes v */ 7:
          message.v = reader.bytes()
          break
        case /* bytes r */ 8:
          message.r = reader.bytes()
          break
        case /* bytes s */ 9:
          message.s = reader.bytes()
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
    message: LegacyTx,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* uint64 nonce = 1; */
    if (message.nonce !== '0')
      writer.tag(1, WireType.Varint).uint64(message.nonce)
    /* string gas_price = 2; */
    if (message.gasPrice !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.gasPrice)
    /* uint64 gas = 3; */
    if (message.gas !== '0') writer.tag(3, WireType.Varint).uint64(message.gas)
    /* string to = 4; */
    if (message.to !== '')
      writer.tag(4, WireType.LengthDelimited).string(message.to)
    /* string value = 5; */
    if (message.value !== '')
      writer.tag(5, WireType.LengthDelimited).string(message.value)
    /* bytes data = 6; */
    if (message.data.length)
      writer.tag(6, WireType.LengthDelimited).bytes(message.data)
    /* bytes v = 7; */
    if (message.v.length)
      writer.tag(7, WireType.LengthDelimited).bytes(message.v)
    /* bytes r = 8; */
    if (message.r.length)
      writer.tag(8, WireType.LengthDelimited).bytes(message.r)
    /* bytes s = 9; */
    if (message.s.length)
      writer.tag(9, WireType.LengthDelimited).bytes(message.s)
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
 * @generated MessageType for protobuf messages ethermint.evm.v1.LegacyTx
 */
export const LegacyTx = new LegacyTx$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class AccessListTx$Type extends MessageType<AccessListTx> {
  constructor() {
    super(
      'ethermint.evm.v1.AccessListTx',
      [
        {
          no: 1,
          name: 'chain_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
            'gogoproto.customname': 'ChainID',
            'gogoproto.jsontag': 'chainID',
          },
        },
        { no: 2, name: 'nonce', kind: 'scalar', T: 4 /*ScalarType.UINT64*/ },
        {
          no: 3,
          name: 'gas_price',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
          },
        },
        {
          no: 4,
          name: 'gas',
          kind: 'scalar',
          T: 4 /*ScalarType.UINT64*/,
          options: { 'gogoproto.customname': 'GasLimit' },
        },
        { no: 5, name: 'to', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
        {
          no: 6,
          name: 'value',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
            'gogoproto.customname': 'Amount',
          },
        },
        { no: 7, name: 'data', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        {
          no: 8,
          name: 'accesses',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => AccessTuple,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.jsontag': 'accessList',
            'gogoproto.castrepeated': 'AccessList',
          },
        },
        { no: 9, name: 'v', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        { no: 10, name: 'r', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        { no: 11, name: 's', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
      ],
      {
        'gogoproto.goproto_getters': false,
        'cosmos_proto.implements_interface': 'TxData',
      },
    )
  }
  create(value?: PartialMessage<AccessListTx>): AccessListTx {
    const message = {
      chainId: '',
      nonce: '0',
      gasPrice: '',
      gas: '0',
      to: '',
      value: '',
      data: new Uint8Array(0),
      accesses: [],
      v: new Uint8Array(0),
      r: new Uint8Array(0),
      s: new Uint8Array(0),
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<AccessListTx>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: AccessListTx,
  ): AccessListTx {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string chain_id */ 1:
          message.chainId = reader.string()
          break
        case /* uint64 nonce */ 2:
          message.nonce = reader.uint64().toString()
          break
        case /* string gas_price */ 3:
          message.gasPrice = reader.string()
          break
        case /* uint64 gas */ 4:
          message.gas = reader.uint64().toString()
          break
        case /* string to */ 5:
          message.to = reader.string()
          break
        case /* string value */ 6:
          message.value = reader.string()
          break
        case /* bytes data */ 7:
          message.data = reader.bytes()
          break
        case /* repeated ethermint.evm.v1.AccessTuple accesses */ 8:
          message.accesses.push(
            AccessTuple.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* bytes v */ 9:
          message.v = reader.bytes()
          break
        case /* bytes r */ 10:
          message.r = reader.bytes()
          break
        case /* bytes s */ 11:
          message.s = reader.bytes()
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
    message: AccessListTx,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string chain_id = 1; */
    if (message.chainId !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.chainId)
    /* uint64 nonce = 2; */
    if (message.nonce !== '0')
      writer.tag(2, WireType.Varint).uint64(message.nonce)
    /* string gas_price = 3; */
    if (message.gasPrice !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.gasPrice)
    /* uint64 gas = 4; */
    if (message.gas !== '0') writer.tag(4, WireType.Varint).uint64(message.gas)
    /* string to = 5; */
    if (message.to !== '')
      writer.tag(5, WireType.LengthDelimited).string(message.to)
    /* string value = 6; */
    if (message.value !== '')
      writer.tag(6, WireType.LengthDelimited).string(message.value)
    /* bytes data = 7; */
    if (message.data.length)
      writer.tag(7, WireType.LengthDelimited).bytes(message.data)
    /* repeated ethermint.evm.v1.AccessTuple accesses = 8; */
    for (let i = 0; i < message.accesses.length; i++)
      AccessTuple.internalBinaryWrite(
        message.accesses[i],
        writer.tag(8, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* bytes v = 9; */
    if (message.v.length)
      writer.tag(9, WireType.LengthDelimited).bytes(message.v)
    /* bytes r = 10; */
    if (message.r.length)
      writer.tag(10, WireType.LengthDelimited).bytes(message.r)
    /* bytes s = 11; */
    if (message.s.length)
      writer.tag(11, WireType.LengthDelimited).bytes(message.s)
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
 * @generated MessageType for protobuf messages ethermint.evm.v1.AccessListTx
 */
export const AccessListTx = new AccessListTx$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class DynamicFeeTx$Type extends MessageType<DynamicFeeTx> {
  constructor() {
    super(
      'ethermint.evm.v1.DynamicFeeTx',
      [
        {
          no: 1,
          name: 'chain_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
            'gogoproto.customname': 'ChainID',
            'gogoproto.jsontag': 'chainID',
          },
        },
        { no: 2, name: 'nonce', kind: 'scalar', T: 4 /*ScalarType.UINT64*/ },
        {
          no: 3,
          name: 'gas_tip_cap',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
          },
        },
        {
          no: 4,
          name: 'gas_fee_cap',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
          },
        },
        {
          no: 5,
          name: 'gas',
          kind: 'scalar',
          T: 4 /*ScalarType.UINT64*/,
          options: { 'gogoproto.customname': 'GasLimit' },
        },
        { no: 6, name: 'to', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
        {
          no: 7,
          name: 'value',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: {
            'gogoproto.customtype': 'github.com/cosmos/cosmos-sdk/types.Int',
            'gogoproto.customname': 'Amount',
          },
        },
        { no: 8, name: 'data', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        {
          no: 9,
          name: 'accesses',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => AccessTuple,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.jsontag': 'accessList',
            'gogoproto.castrepeated': 'AccessList',
          },
        },
        { no: 10, name: 'v', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        { no: 11, name: 'r', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        { no: 12, name: 's', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
      ],
      {
        'gogoproto.goproto_getters': false,
        'cosmos_proto.implements_interface': 'TxData',
      },
    )
  }
  create(value?: PartialMessage<DynamicFeeTx>): DynamicFeeTx {
    const message = {
      chainId: '',
      nonce: '0',
      gasTipCap: '',
      gasFeeCap: '',
      gas: '0',
      to: '',
      value: '',
      data: new Uint8Array(0),
      accesses: [],
      v: new Uint8Array(0),
      r: new Uint8Array(0),
      s: new Uint8Array(0),
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<DynamicFeeTx>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DynamicFeeTx,
  ): DynamicFeeTx {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string chain_id */ 1:
          message.chainId = reader.string()
          break
        case /* uint64 nonce */ 2:
          message.nonce = reader.uint64().toString()
          break
        case /* string gas_tip_cap */ 3:
          message.gasTipCap = reader.string()
          break
        case /* string gas_fee_cap */ 4:
          message.gasFeeCap = reader.string()
          break
        case /* uint64 gas */ 5:
          message.gas = reader.uint64().toString()
          break
        case /* string to */ 6:
          message.to = reader.string()
          break
        case /* string value */ 7:
          message.value = reader.string()
          break
        case /* bytes data */ 8:
          message.data = reader.bytes()
          break
        case /* repeated ethermint.evm.v1.AccessTuple accesses */ 9:
          message.accesses.push(
            AccessTuple.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* bytes v */ 10:
          message.v = reader.bytes()
          break
        case /* bytes r */ 11:
          message.r = reader.bytes()
          break
        case /* bytes s */ 12:
          message.s = reader.bytes()
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
    message: DynamicFeeTx,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string chain_id = 1; */
    if (message.chainId !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.chainId)
    /* uint64 nonce = 2; */
    if (message.nonce !== '0')
      writer.tag(2, WireType.Varint).uint64(message.nonce)
    /* string gas_tip_cap = 3; */
    if (message.gasTipCap !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.gasTipCap)
    /* string gas_fee_cap = 4; */
    if (message.gasFeeCap !== '')
      writer.tag(4, WireType.LengthDelimited).string(message.gasFeeCap)
    /* uint64 gas = 5; */
    if (message.gas !== '0') writer.tag(5, WireType.Varint).uint64(message.gas)
    /* string to = 6; */
    if (message.to !== '')
      writer.tag(6, WireType.LengthDelimited).string(message.to)
    /* string value = 7; */
    if (message.value !== '')
      writer.tag(7, WireType.LengthDelimited).string(message.value)
    /* bytes data = 8; */
    if (message.data.length)
      writer.tag(8, WireType.LengthDelimited).bytes(message.data)
    /* repeated ethermint.evm.v1.AccessTuple accesses = 9; */
    for (let i = 0; i < message.accesses.length; i++)
      AccessTuple.internalBinaryWrite(
        message.accesses[i],
        writer.tag(9, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* bytes v = 10; */
    if (message.v.length)
      writer.tag(10, WireType.LengthDelimited).bytes(message.v)
    /* bytes r = 11; */
    if (message.r.length)
      writer.tag(11, WireType.LengthDelimited).bytes(message.r)
    /* bytes s = 12; */
    if (message.s.length)
      writer.tag(12, WireType.LengthDelimited).bytes(message.s)
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
 * @generated MessageType for protobuf messages ethermint.evm.v1.DynamicFeeTx
 */
export const DynamicFeeTx = new DynamicFeeTx$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class ExtensionOptionsEthereumTx$Type extends MessageType<ExtensionOptionsEthereumTx> {
  constructor() {
    super('ethermint.evm.v1.ExtensionOptionsEthereumTx', [], {
      'gogoproto.goproto_getters': false,
    })
  }
  create(
    value?: PartialMessage<ExtensionOptionsEthereumTx>,
  ): ExtensionOptionsEthereumTx {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<ExtensionOptionsEthereumTx>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ExtensionOptionsEthereumTx,
  ): ExtensionOptionsEthereumTx {
    return target ?? this.create()
  }
  internalBinaryWrite(
    message: ExtensionOptionsEthereumTx,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
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
 * @generated MessageType for protobuf messages ethermint.evm.v1.ExtensionOptionsEthereumTx
 */
export const ExtensionOptionsEthereumTx = new ExtensionOptionsEthereumTx$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgEthereumTxResponse$Type extends MessageType<MsgEthereumTxResponse> {
  constructor() {
    super(
      'ethermint.evm.v1.MsgEthereumTxResponse',
      [
        { no: 1, name: 'hash', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
        {
          no: 2,
          name: 'logs',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Log,
        },
        { no: 3, name: 'ret', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
        { no: 4, name: 'vm_error', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
        { no: 5, name: 'gas_used', kind: 'scalar', T: 4 /*ScalarType.UINT64*/ },
      ],
      { 'gogoproto.goproto_getters': false },
    )
  }
  create(value?: PartialMessage<MsgEthereumTxResponse>): MsgEthereumTxResponse {
    const message = {
      hash: '',
      logs: [],
      ret: new Uint8Array(0),
      vmError: '',
      gasUsed: '0',
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgEthereumTxResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgEthereumTxResponse,
  ): MsgEthereumTxResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string hash */ 1:
          message.hash = reader.string()
          break
        case /* repeated ethermint.evm.v1.Log logs */ 2:
          message.logs.push(
            Log.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* bytes ret */ 3:
          message.ret = reader.bytes()
          break
        case /* string vm_error */ 4:
          message.vmError = reader.string()
          break
        case /* uint64 gas_used */ 5:
          message.gasUsed = reader.uint64().toString()
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
    message: MsgEthereumTxResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string hash = 1; */
    if (message.hash !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.hash)
    /* repeated ethermint.evm.v1.Log logs = 2; */
    for (let i = 0; i < message.logs.length; i++)
      Log.internalBinaryWrite(
        message.logs[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* bytes ret = 3; */
    if (message.ret.length)
      writer.tag(3, WireType.LengthDelimited).bytes(message.ret)
    /* string vm_error = 4; */
    if (message.vmError !== '')
      writer.tag(4, WireType.LengthDelimited).string(message.vmError)
    /* uint64 gas_used = 5; */
    if (message.gasUsed !== '0')
      writer.tag(5, WireType.Varint).uint64(message.gasUsed)
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
 * @generated MessageType for protobuf messages ethermint.evm.v1.MsgEthereumTxResponse
 */
export const MsgEthereumTxResponse = new MsgEthereumTxResponse$Type()
/**
 * @generated ServiceType for protobuf service ethermint.evm.v1.Msg
 */
export const Msg = new ServiceType('ethermint.evm.v1.Msg', [
  {
    name: 'EthereumTx',
    options: { 'google.api.http': { post: '/ethermint/evm/v1/ethereum_tx' } },
    I: MsgEthereumTx,
    O: MsgEthereumTxResponse,
  },
])
