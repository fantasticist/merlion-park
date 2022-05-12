// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/base/store/v1beta1/snapshot.proto" (package "cosmos.base.store.v1beta1", syntax proto3)
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
/**
 * SnapshotItem is an item contained in a rootmulti.Store snapshot.
 *
 * @generated from protobuf messages cosmos.base.store.v1beta1.SnapshotItem
 */
export interface SnapshotItem {
  /**
   * @generated from protobuf oneof: item
   */
  item:
    | {
        oneofKind: 'store'
        /**
         * @generated from protobuf field: cosmos.base.store.v1beta1.SnapshotStoreItem store = 1;
         */
        store: SnapshotStoreItem
      }
    | {
        oneofKind: 'iavl'
        /**
         * @generated from protobuf field: cosmos.base.store.v1beta1.SnapshotIAVLItem iavl = 2;
         */
        iavl: SnapshotIAVLItem
      }
    | {
        oneofKind: undefined
      }
}
/**
 * SnapshotStoreItem contains metadata about a snapshotted store.
 *
 * @generated from protobuf messages cosmos.base.store.v1beta1.SnapshotStoreItem
 */
export interface SnapshotStoreItem {
  /**
   * @generated from protobuf field: string name = 1;
   */
  name: string
}
/**
 * SnapshotIAVLItem is an exported IAVL node.
 *
 * @generated from protobuf messages cosmos.base.store.v1beta1.SnapshotIAVLItem
 */
export interface SnapshotIAVLItem {
  /**
   * @generated from protobuf field: bytes key = 1;
   */
  key: Uint8Array
  /**
   * @generated from protobuf field: bytes value = 2;
   */
  value: Uint8Array
  /**
   * @generated from protobuf field: int64 version = 3;
   */
  version: string
  /**
   * @generated from protobuf field: int32 height = 4;
   */
  height: number
}
// @generated messages type with reflection information, may provide speed optimized methods
class SnapshotItem$Type extends MessageType<SnapshotItem> {
  constructor() {
    super('cosmos.base.store.v1beta1.SnapshotItem', [
      {
        no: 1,
        name: 'store',
        kind: 'message',
        oneof: 'item',
        T: () => SnapshotStoreItem,
      },
      {
        no: 2,
        name: 'iavl',
        kind: 'message',
        oneof: 'item',
        T: () => SnapshotIAVLItem,
        options: { 'gogoproto.customname': 'IAVL' },
      },
    ])
  }
  create(value?: PartialMessage<SnapshotItem>): SnapshotItem {
    const message = { item: { oneofKind: undefined } }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<SnapshotItem>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SnapshotItem,
  ): SnapshotItem {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* cosmos.base.store.v1beta1.SnapshotStoreItem store */ 1:
          message.item = {
            oneofKind: 'store',
            store: SnapshotStoreItem.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
              (message.item as any).store,
            ),
          }
          break
        case /* cosmos.base.store.v1beta1.SnapshotIAVLItem iavl */ 2:
          message.item = {
            oneofKind: 'iavl',
            iavl: SnapshotIAVLItem.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
              (message.item as any).iavl,
            ),
          }
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
    message: SnapshotItem,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* cosmos.base.store.v1beta1.SnapshotStoreItem store = 1; */
    if (message.item.oneofKind === 'store')
      SnapshotStoreItem.internalBinaryWrite(
        message.item.store,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* cosmos.base.store.v1beta1.SnapshotIAVLItem iavl = 2; */
    if (message.item.oneofKind === 'iavl')
      SnapshotIAVLItem.internalBinaryWrite(
        message.item.iavl,
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
 * @generated MessageType for protobuf messages cosmos.base.store.v1beta1.SnapshotItem
 */
export const SnapshotItem = new SnapshotItem$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class SnapshotStoreItem$Type extends MessageType<SnapshotStoreItem> {
  constructor() {
    super('cosmos.base.store.v1beta1.SnapshotStoreItem', [
      { no: 1, name: 'name', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
    ])
  }
  create(value?: PartialMessage<SnapshotStoreItem>): SnapshotStoreItem {
    const message = { name: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<SnapshotStoreItem>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SnapshotStoreItem,
  ): SnapshotStoreItem {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string name */ 1:
          message.name = reader.string()
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
    message: SnapshotStoreItem,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string name = 1; */
    if (message.name !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.name)
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
 * @generated MessageType for protobuf messages cosmos.base.store.v1beta1.SnapshotStoreItem
 */
export const SnapshotStoreItem = new SnapshotStoreItem$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class SnapshotIAVLItem$Type extends MessageType<SnapshotIAVLItem> {
  constructor() {
    super('cosmos.base.store.v1beta1.SnapshotIAVLItem', [
      { no: 1, name: 'key', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
      { no: 2, name: 'value', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
      { no: 3, name: 'version', kind: 'scalar', T: 3 /*ScalarType.INT64*/ },
      { no: 4, name: 'height', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
    ])
  }
  create(value?: PartialMessage<SnapshotIAVLItem>): SnapshotIAVLItem {
    const message = {
      key: new Uint8Array(0),
      value: new Uint8Array(0),
      version: '0',
      height: 0,
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<SnapshotIAVLItem>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SnapshotIAVLItem,
  ): SnapshotIAVLItem {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* bytes key */ 1:
          message.key = reader.bytes()
          break
        case /* bytes value */ 2:
          message.value = reader.bytes()
          break
        case /* int64 version */ 3:
          message.version = reader.int64().toString()
          break
        case /* int32 height */ 4:
          message.height = reader.int32()
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
    message: SnapshotIAVLItem,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* bytes key = 1; */
    if (message.key.length)
      writer.tag(1, WireType.LengthDelimited).bytes(message.key)
    /* bytes value = 2; */
    if (message.value.length)
      writer.tag(2, WireType.LengthDelimited).bytes(message.value)
    /* int64 version = 3; */
    if (message.version !== '0')
      writer.tag(3, WireType.Varint).int64(message.version)
    /* int32 height = 4; */
    if (message.height !== 0)
      writer.tag(4, WireType.Varint).int32(message.height)
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
 * @generated MessageType for protobuf messages cosmos.base.store.v1beta1.SnapshotIAVLItem
 */
export const SnapshotIAVLItem = new SnapshotIAVLItem$Type()
