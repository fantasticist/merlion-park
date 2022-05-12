// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/capability/v1beta1/genesis.proto" (package "cosmos.capability.v1beta1", syntax proto3)
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
import { CapabilityOwners } from './capability'
/**
 * GenesisOwners defines the capability owners with their corresponding index.
 *
 * @generated from protobuf messages cosmos.capability.v1beta1.GenesisOwners
 */
export interface GenesisOwners {
  /**
   * index is the index of the capability owner.
   *
   * @generated from protobuf field: uint64 index = 1;
   */
  index: string
  /**
   * index_owners are the owners at the given index.
   *
   * @generated from protobuf field: cosmos.capability.v1beta1.CapabilityOwners index_owners = 2;
   */
  indexOwners?: CapabilityOwners
}
/**
 * GenesisState defines the capability module's genesis state.
 *
 * @generated from protobuf messages cosmos.capability.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * index is the capability global index.
   *
   * @generated from protobuf field: uint64 index = 1;
   */
  index: string
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   *
   * @generated from protobuf field: repeated cosmos.capability.v1beta1.GenesisOwners owners = 2;
   */
  owners: GenesisOwners[]
}
// @generated messages type with reflection information, may provide speed optimized methods
class GenesisOwners$Type extends MessageType<GenesisOwners> {
  constructor() {
    super('cosmos.capability.v1beta1.GenesisOwners', [
      { no: 1, name: 'index', kind: 'scalar', T: 4 /*ScalarType.UINT64*/ },
      {
        no: 2,
        name: 'index_owners',
        kind: 'message',
        T: () => CapabilityOwners,
        options: {
          'gogoproto.nullable': false,
          'gogoproto.moretags': 'yaml:"index_owners"',
        },
      },
    ])
  }
  create(value?: PartialMessage<GenesisOwners>): GenesisOwners {
    const message = { index: '0' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<GenesisOwners>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: GenesisOwners,
  ): GenesisOwners {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* uint64 index */ 1:
          message.index = reader.uint64().toString()
          break
        case /* cosmos.capability.v1beta1.CapabilityOwners index_owners */ 2:
          message.indexOwners = CapabilityOwners.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.indexOwners,
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
    message: GenesisOwners,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* uint64 index = 1; */
    if (message.index !== '0')
      writer.tag(1, WireType.Varint).uint64(message.index)
    /* cosmos.capability.v1beta1.CapabilityOwners index_owners = 2; */
    if (message.indexOwners)
      CapabilityOwners.internalBinaryWrite(
        message.indexOwners,
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
 * @generated MessageType for protobuf messages cosmos.capability.v1beta1.GenesisOwners
 */
export const GenesisOwners = new GenesisOwners$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
  constructor() {
    super('cosmos.capability.v1beta1.GenesisState', [
      { no: 1, name: 'index', kind: 'scalar', T: 4 /*ScalarType.UINT64*/ },
      {
        no: 2,
        name: 'owners',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => GenesisOwners,
        options: { 'gogoproto.nullable': false },
      },
    ])
  }
  create(value?: PartialMessage<GenesisState>): GenesisState {
    const message = { index: '0', owners: [] }
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
        case /* uint64 index */ 1:
          message.index = reader.uint64().toString()
          break
        case /* repeated cosmos.capability.v1beta1.GenesisOwners owners */ 2:
          message.owners.push(
            GenesisOwners.internalBinaryRead(reader, reader.uint32(), options),
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
    /* uint64 index = 1; */
    if (message.index !== '0')
      writer.tag(1, WireType.Varint).uint64(message.index)
    /* repeated cosmos.capability.v1beta1.GenesisOwners owners = 2; */
    for (let i = 0; i < message.owners.length; i++)
      GenesisOwners.internalBinaryWrite(
        message.owners[i],
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
 * @generated MessageType for protobuf messages cosmos.capability.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type()
