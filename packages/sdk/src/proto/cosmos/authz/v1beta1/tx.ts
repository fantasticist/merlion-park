// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/authz/v1beta1/tx.proto" (package "cosmos.authz.v1beta1", syntax proto3)
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
import { Any } from '../../../google/protobuf/any'
import { Grant } from './authz'
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 *
 * @generated from protobuf messages cosmos.authz.v1beta1.MsgGrant
 */
export interface MsgGrant {
  /**
   * @generated from protobuf field: string granter = 1;
   */
  granter: string
  /**
   * @generated from protobuf field: string grantee = 2;
   */
  grantee: string
  /**
   * @generated from protobuf field: cosmos.authz.v1beta1.Grant grant = 3;
   */
  grant?: Grant
}
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 *
 * @generated from protobuf messages cosmos.authz.v1beta1.MsgExecResponse
 */
export interface MsgExecResponse {
  /**
   * @generated from protobuf field: repeated bytes results = 1;
   */
  results: Uint8Array[]
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each messages should have only
 * one signer corresponding to the granter of the authorization.
 *
 * @generated from protobuf messages cosmos.authz.v1beta1.MsgExec
 */
export interface MsgExec {
  /**
   * @generated from protobuf field: string grantee = 1;
   */
  grantee: string
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   *
   * @generated from protobuf field: repeated google.protobuf.Any msgs = 2;
   */
  msgs: Any[]
}
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 *
 * @generated from protobuf messages cosmos.authz.v1beta1.MsgGrantResponse
 */
export interface MsgGrantResponse {}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 *
 * @generated from protobuf messages cosmos.authz.v1beta1.MsgRevoke
 */
export interface MsgRevoke {
  /**
   * @generated from protobuf field: string granter = 1;
   */
  granter: string
  /**
   * @generated from protobuf field: string grantee = 2;
   */
  grantee: string
  /**
   * @generated from protobuf field: string msg_type_url = 3;
   */
  msgTypeUrl: string
}
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 *
 * @generated from protobuf messages cosmos.authz.v1beta1.MsgRevokeResponse
 */
export interface MsgRevokeResponse {}
// @generated messages type with reflection information, may provide speed optimized methods
class MsgGrant$Type extends MessageType<MsgGrant> {
  constructor() {
    super('cosmos.authz.v1beta1.MsgGrant', [
      { no: 1, name: 'granter', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'grantee', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      {
        no: 3,
        name: 'grant',
        kind: 'message',
        T: () => Grant,
        options: { 'gogoproto.nullable': false },
      },
    ])
  }
  create(value?: PartialMessage<MsgGrant>): MsgGrant {
    const message = { granter: '', grantee: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgGrant>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgGrant,
  ): MsgGrant {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string granter */ 1:
          message.granter = reader.string()
          break
        case /* string grantee */ 2:
          message.grantee = reader.string()
          break
        case /* cosmos.authz.v1beta1.Grant grant */ 3:
          message.grant = Grant.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.grant,
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
    message: MsgGrant,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string granter = 1; */
    if (message.granter !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.granter)
    /* string grantee = 2; */
    if (message.grantee !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.grantee)
    /* cosmos.authz.v1beta1.Grant grant = 3; */
    if (message.grant)
      Grant.internalBinaryWrite(
        message.grant,
        writer.tag(3, WireType.LengthDelimited).fork(),
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
 * @generated MessageType for protobuf messages cosmos.authz.v1beta1.MsgGrant
 */
export const MsgGrant = new MsgGrant$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgExecResponse$Type extends MessageType<MsgExecResponse> {
  constructor() {
    super('cosmos.authz.v1beta1.MsgExecResponse', [
      {
        no: 1,
        name: 'results',
        kind: 'scalar',
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 12 /*ScalarType.BYTES*/,
      },
    ])
  }
  create(value?: PartialMessage<MsgExecResponse>): MsgExecResponse {
    const message = { results: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgExecResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgExecResponse,
  ): MsgExecResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated bytes results */ 1:
          message.results.push(reader.bytes())
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
    message: MsgExecResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* repeated bytes results = 1; */
    for (let i = 0; i < message.results.length; i++)
      writer.tag(1, WireType.LengthDelimited).bytes(message.results[i])
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
 * @generated MessageType for protobuf messages cosmos.authz.v1beta1.MsgExecResponse
 */
export const MsgExecResponse = new MsgExecResponse$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgExec$Type extends MessageType<MsgExec> {
  constructor() {
    super('cosmos.authz.v1beta1.MsgExec', [
      { no: 1, name: 'grantee', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      {
        no: 2,
        name: 'msgs',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Any,
        options: {
          'cosmos_proto.accepts_interface': 'sdk.Msg, authz.Authorization',
        },
      },
    ])
  }
  create(value?: PartialMessage<MsgExec>): MsgExec {
    const message = { grantee: '', msgs: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgExec>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgExec,
  ): MsgExec {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string grantee */ 1:
          message.grantee = reader.string()
          break
        case /* repeated google.protobuf.Any msgs */ 2:
          message.msgs.push(
            Any.internalBinaryRead(reader, reader.uint32(), options),
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
    message: MsgExec,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string grantee = 1; */
    if (message.grantee !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.grantee)
    /* repeated google.protobuf.Any msgs = 2; */
    for (let i = 0; i < message.msgs.length; i++)
      Any.internalBinaryWrite(
        message.msgs[i],
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
 * @generated MessageType for protobuf messages cosmos.authz.v1beta1.MsgExec
 */
export const MsgExec = new MsgExec$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgGrantResponse$Type extends MessageType<MsgGrantResponse> {
  constructor() {
    super('cosmos.authz.v1beta1.MsgGrantResponse', [])
  }
  create(value?: PartialMessage<MsgGrantResponse>): MsgGrantResponse {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgGrantResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgGrantResponse,
  ): MsgGrantResponse {
    return target ?? this.create()
  }
  internalBinaryWrite(
    message: MsgGrantResponse,
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
 * @generated MessageType for protobuf messages cosmos.authz.v1beta1.MsgGrantResponse
 */
export const MsgGrantResponse = new MsgGrantResponse$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgRevoke$Type extends MessageType<MsgRevoke> {
  constructor() {
    super('cosmos.authz.v1beta1.MsgRevoke', [
      { no: 1, name: 'granter', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'grantee', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      {
        no: 3,
        name: 'msg_type_url',
        kind: 'scalar',
        T: 9 /*ScalarType.STRING*/,
      },
    ])
  }
  create(value?: PartialMessage<MsgRevoke>): MsgRevoke {
    const message = { granter: '', grantee: '', msgTypeUrl: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgRevoke>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgRevoke,
  ): MsgRevoke {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string granter */ 1:
          message.granter = reader.string()
          break
        case /* string grantee */ 2:
          message.grantee = reader.string()
          break
        case /* string msg_type_url */ 3:
          message.msgTypeUrl = reader.string()
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
    message: MsgRevoke,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string granter = 1; */
    if (message.granter !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.granter)
    /* string grantee = 2; */
    if (message.grantee !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.grantee)
    /* string msg_type_url = 3; */
    if (message.msgTypeUrl !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.msgTypeUrl)
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
 * @generated MessageType for protobuf messages cosmos.authz.v1beta1.MsgRevoke
 */
export const MsgRevoke = new MsgRevoke$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgRevokeResponse$Type extends MessageType<MsgRevokeResponse> {
  constructor() {
    super('cosmos.authz.v1beta1.MsgRevokeResponse', [])
  }
  create(value?: PartialMessage<MsgRevokeResponse>): MsgRevokeResponse {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgRevokeResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgRevokeResponse,
  ): MsgRevokeResponse {
    return target ?? this.create()
  }
  internalBinaryWrite(
    message: MsgRevokeResponse,
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
 * @generated MessageType for protobuf messages cosmos.authz.v1beta1.MsgRevokeResponse
 */
export const MsgRevokeResponse = new MsgRevokeResponse$Type()
/**
 * @generated ServiceType for protobuf service cosmos.authz.v1beta1.Msg
 */
export const Msg = new ServiceType('cosmos.authz.v1beta1.Msg', [
  { name: 'Grant', options: {}, I: MsgGrant, O: MsgGrantResponse },
  { name: 'Exec', options: {}, I: MsgExec, O: MsgExecResponse },
  { name: 'Revoke', options: {}, I: MsgRevoke, O: MsgRevokeResponse },
])
