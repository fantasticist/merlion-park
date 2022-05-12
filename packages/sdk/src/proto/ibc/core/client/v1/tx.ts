// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ibc/core/client/v1/tx.proto" (package "ibc.core.client.v1", syntax proto3)
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
import { Any } from '../../../../google/protobuf/any'
/**
 * MsgCreateClient defines a messages to create an IBC client
 *
 * @generated from protobuf messages ibc.core.client.v1.MsgCreateClient
 */
export interface MsgCreateClient {
  /**
   * light client state
   *
   * @generated from protobuf field: google.protobuf.Any client_state = 1;
   */
  clientState?: Any
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   *
   * @generated from protobuf field: google.protobuf.Any consensus_state = 2;
   */
  consensusState?: Any
  /**
   * signer address
   *
   * @generated from protobuf field: string signer = 3;
   */
  signer: string
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 *
 * @generated from protobuf messages ibc.core.client.v1.MsgCreateClientResponse
 */
export interface MsgCreateClientResponse {}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 *
 * @generated from protobuf messages ibc.core.client.v1.MsgUpdateClient
 */
export interface MsgUpdateClient {
  /**
   * client unique identifier
   *
   * @generated from protobuf field: string client_id = 1;
   */
  clientId: string
  /**
   * header to update the light client
   *
   * @generated from protobuf field: google.protobuf.Any header = 2;
   */
  header?: Any
  /**
   * signer address
   *
   * @generated from protobuf field: string signer = 3;
   */
  signer: string
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 *
 * @generated from protobuf messages ibc.core.client.v1.MsgUpdateClientResponse
 */
export interface MsgUpdateClientResponse {}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 *
 * @generated from protobuf messages ibc.core.client.v1.MsgUpgradeClient
 */
export interface MsgUpgradeClient {
  /**
   * client unique identifier
   *
   * @generated from protobuf field: string client_id = 1;
   */
  clientId: string
  /**
   * upgraded client state
   *
   * @generated from protobuf field: google.protobuf.Any client_state = 2;
   */
  clientState?: Any
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   *
   * @generated from protobuf field: google.protobuf.Any consensus_state = 3;
   */
  consensusState?: Any
  /**
   * proof that old chain committed to new client
   *
   * @generated from protobuf field: bytes proof_upgrade_client = 4;
   */
  proofUpgradeClient: Uint8Array
  /**
   * proof that old chain committed to new consensus state
   *
   * @generated from protobuf field: bytes proof_upgrade_consensus_state = 5;
   */
  proofUpgradeConsensusState: Uint8Array
  /**
   * signer address
   *
   * @generated from protobuf field: string signer = 6;
   */
  signer: string
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 *
 * @generated from protobuf messages ibc.core.client.v1.MsgUpgradeClientResponse
 */
export interface MsgUpgradeClientResponse {}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 *
 * @generated from protobuf messages ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export interface MsgSubmitMisbehaviour {
  /**
   * client unique identifier
   *
   * @generated from protobuf field: string client_id = 1;
   */
  clientId: string
  /**
   * misbehaviour used for freezing the light client
   *
   * @generated from protobuf field: google.protobuf.Any misbehaviour = 2;
   */
  misbehaviour?: Any
  /**
   * signer address
   *
   * @generated from protobuf field: string signer = 3;
   */
  signer: string
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 *
 * @generated from protobuf messages ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export interface MsgSubmitMisbehaviourResponse {}
// @generated messages type with reflection information, may provide speed optimized methods
class MsgCreateClient$Type extends MessageType<MsgCreateClient> {
  constructor() {
    super(
      'ibc.core.client.v1.MsgCreateClient',
      [
        {
          no: 1,
          name: 'client_state',
          kind: 'message',
          T: () => Any,
          options: { 'gogoproto.moretags': 'yaml:"client_state"' },
        },
        {
          no: 2,
          name: 'consensus_state',
          kind: 'message',
          T: () => Any,
          options: { 'gogoproto.moretags': 'yaml:"consensus_state"' },
        },
        { no: 3, name: 'signer', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      ],
      { 'gogoproto.goproto_getters': false, 'gogoproto.equal': false },
    )
  }
  create(value?: PartialMessage<MsgCreateClient>): MsgCreateClient {
    const message = { signer: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgCreateClient>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgCreateClient,
  ): MsgCreateClient {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* google.protobuf.Any client_state */ 1:
          message.clientState = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.clientState,
          )
          break
        case /* google.protobuf.Any consensus_state */ 2:
          message.consensusState = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.consensusState,
          )
          break
        case /* string signer */ 3:
          message.signer = reader.string()
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
    message: MsgCreateClient,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* google.protobuf.Any client_state = 1; */
    if (message.clientState)
      Any.internalBinaryWrite(
        message.clientState,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* google.protobuf.Any consensus_state = 2; */
    if (message.consensusState)
      Any.internalBinaryWrite(
        message.consensusState,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* string signer = 3; */
    if (message.signer !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.signer)
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.MsgCreateClient
 */
export const MsgCreateClient = new MsgCreateClient$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgCreateClientResponse$Type extends MessageType<MsgCreateClientResponse> {
  constructor() {
    super('ibc.core.client.v1.MsgCreateClientResponse', [])
  }
  create(
    value?: PartialMessage<MsgCreateClientResponse>,
  ): MsgCreateClientResponse {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgCreateClientResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgCreateClientResponse,
  ): MsgCreateClientResponse {
    return target ?? this.create()
  }
  internalBinaryWrite(
    message: MsgCreateClientResponse,
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.MsgCreateClientResponse
 */
export const MsgCreateClientResponse = new MsgCreateClientResponse$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgUpdateClient$Type extends MessageType<MsgUpdateClient> {
  constructor() {
    super(
      'ibc.core.client.v1.MsgUpdateClient',
      [
        {
          no: 1,
          name: 'client_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'yaml:"client_id"' },
        },
        { no: 2, name: 'header', kind: 'message', T: () => Any },
        { no: 3, name: 'signer', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      ],
      { 'gogoproto.goproto_getters': false, 'gogoproto.equal': false },
    )
  }
  create(value?: PartialMessage<MsgUpdateClient>): MsgUpdateClient {
    const message = { clientId: '', signer: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgUpdateClient>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgUpdateClient,
  ): MsgUpdateClient {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string client_id */ 1:
          message.clientId = reader.string()
          break
        case /* google.protobuf.Any header */ 2:
          message.header = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.header,
          )
          break
        case /* string signer */ 3:
          message.signer = reader.string()
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
    message: MsgUpdateClient,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string client_id = 1; */
    if (message.clientId !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.clientId)
    /* google.protobuf.Any header = 2; */
    if (message.header)
      Any.internalBinaryWrite(
        message.header,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* string signer = 3; */
    if (message.signer !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.signer)
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.MsgUpdateClient
 */
export const MsgUpdateClient = new MsgUpdateClient$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgUpdateClientResponse$Type extends MessageType<MsgUpdateClientResponse> {
  constructor() {
    super('ibc.core.client.v1.MsgUpdateClientResponse', [])
  }
  create(
    value?: PartialMessage<MsgUpdateClientResponse>,
  ): MsgUpdateClientResponse {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgUpdateClientResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgUpdateClientResponse,
  ): MsgUpdateClientResponse {
    return target ?? this.create()
  }
  internalBinaryWrite(
    message: MsgUpdateClientResponse,
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.MsgUpdateClientResponse
 */
export const MsgUpdateClientResponse = new MsgUpdateClientResponse$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgUpgradeClient$Type extends MessageType<MsgUpgradeClient> {
  constructor() {
    super(
      'ibc.core.client.v1.MsgUpgradeClient',
      [
        {
          no: 1,
          name: 'client_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'yaml:"client_id"' },
        },
        {
          no: 2,
          name: 'client_state',
          kind: 'message',
          T: () => Any,
          options: { 'gogoproto.moretags': 'yaml:"client_state"' },
        },
        {
          no: 3,
          name: 'consensus_state',
          kind: 'message',
          T: () => Any,
          options: { 'gogoproto.moretags': 'yaml:"consensus_state"' },
        },
        {
          no: 4,
          name: 'proof_upgrade_client',
          kind: 'scalar',
          T: 12 /*ScalarType.BYTES*/,
          options: { 'gogoproto.moretags': 'yaml:"proof_upgrade_client"' },
        },
        {
          no: 5,
          name: 'proof_upgrade_consensus_state',
          kind: 'scalar',
          T: 12 /*ScalarType.BYTES*/,
          options: {
            'gogoproto.moretags': 'yaml:"proof_upgrade_consensus_state"',
          },
        },
        { no: 6, name: 'signer', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      ],
      { 'gogoproto.goproto_getters': false, 'gogoproto.equal': false },
    )
  }
  create(value?: PartialMessage<MsgUpgradeClient>): MsgUpgradeClient {
    const message = {
      clientId: '',
      proofUpgradeClient: new Uint8Array(0),
      proofUpgradeConsensusState: new Uint8Array(0),
      signer: '',
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgUpgradeClient>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgUpgradeClient,
  ): MsgUpgradeClient {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string client_id */ 1:
          message.clientId = reader.string()
          break
        case /* google.protobuf.Any client_state */ 2:
          message.clientState = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.clientState,
          )
          break
        case /* google.protobuf.Any consensus_state */ 3:
          message.consensusState = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.consensusState,
          )
          break
        case /* bytes proof_upgrade_client */ 4:
          message.proofUpgradeClient = reader.bytes()
          break
        case /* bytes proof_upgrade_consensus_state */ 5:
          message.proofUpgradeConsensusState = reader.bytes()
          break
        case /* string signer */ 6:
          message.signer = reader.string()
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
    message: MsgUpgradeClient,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string client_id = 1; */
    if (message.clientId !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.clientId)
    /* google.protobuf.Any client_state = 2; */
    if (message.clientState)
      Any.internalBinaryWrite(
        message.clientState,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* google.protobuf.Any consensus_state = 3; */
    if (message.consensusState)
      Any.internalBinaryWrite(
        message.consensusState,
        writer.tag(3, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* bytes proof_upgrade_client = 4; */
    if (message.proofUpgradeClient.length)
      writer.tag(4, WireType.LengthDelimited).bytes(message.proofUpgradeClient)
    /* bytes proof_upgrade_consensus_state = 5; */
    if (message.proofUpgradeConsensusState.length)
      writer
        .tag(5, WireType.LengthDelimited)
        .bytes(message.proofUpgradeConsensusState)
    /* string signer = 6; */
    if (message.signer !== '')
      writer.tag(6, WireType.LengthDelimited).string(message.signer)
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.MsgUpgradeClient
 */
export const MsgUpgradeClient = new MsgUpgradeClient$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgUpgradeClientResponse$Type extends MessageType<MsgUpgradeClientResponse> {
  constructor() {
    super('ibc.core.client.v1.MsgUpgradeClientResponse', [])
  }
  create(
    value?: PartialMessage<MsgUpgradeClientResponse>,
  ): MsgUpgradeClientResponse {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgUpgradeClientResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgUpgradeClientResponse,
  ): MsgUpgradeClientResponse {
    return target ?? this.create()
  }
  internalBinaryWrite(
    message: MsgUpgradeClientResponse,
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.MsgUpgradeClientResponse
 */
export const MsgUpgradeClientResponse = new MsgUpgradeClientResponse$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgSubmitMisbehaviour$Type extends MessageType<MsgSubmitMisbehaviour> {
  constructor() {
    super(
      'ibc.core.client.v1.MsgSubmitMisbehaviour',
      [
        {
          no: 1,
          name: 'client_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'yaml:"client_id"' },
        },
        { no: 2, name: 'misbehaviour', kind: 'message', T: () => Any },
        { no: 3, name: 'signer', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      ],
      { 'gogoproto.goproto_getters': false, 'gogoproto.equal': false },
    )
  }
  create(value?: PartialMessage<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour {
    const message = { clientId: '', signer: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgSubmitMisbehaviour>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgSubmitMisbehaviour,
  ): MsgSubmitMisbehaviour {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string client_id */ 1:
          message.clientId = reader.string()
          break
        case /* google.protobuf.Any misbehaviour */ 2:
          message.misbehaviour = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.misbehaviour,
          )
          break
        case /* string signer */ 3:
          message.signer = reader.string()
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
    message: MsgSubmitMisbehaviour,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string client_id = 1; */
    if (message.clientId !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.clientId)
    /* google.protobuf.Any misbehaviour = 2; */
    if (message.misbehaviour)
      Any.internalBinaryWrite(
        message.misbehaviour,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* string signer = 3; */
    if (message.signer !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.signer)
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export const MsgSubmitMisbehaviour = new MsgSubmitMisbehaviour$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgSubmitMisbehaviourResponse$Type extends MessageType<MsgSubmitMisbehaviourResponse> {
  constructor() {
    super('ibc.core.client.v1.MsgSubmitMisbehaviourResponse', [])
  }
  create(
    value?: PartialMessage<MsgSubmitMisbehaviourResponse>,
  ): MsgSubmitMisbehaviourResponse {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgSubmitMisbehaviourResponse>(
        this,
        message,
        value,
      )
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgSubmitMisbehaviourResponse,
  ): MsgSubmitMisbehaviourResponse {
    return target ?? this.create()
  }
  internalBinaryWrite(
    message: MsgSubmitMisbehaviourResponse,
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export const MsgSubmitMisbehaviourResponse =
  new MsgSubmitMisbehaviourResponse$Type()
/**
 * @generated ServiceType for protobuf service ibc.core.client.v1.Msg
 */
export const Msg = new ServiceType('ibc.core.client.v1.Msg', [
  {
    name: 'CreateClient',
    options: {},
    I: MsgCreateClient,
    O: MsgCreateClientResponse,
  },
  {
    name: 'UpdateClient',
    options: {},
    I: MsgUpdateClient,
    O: MsgUpdateClientResponse,
  },
  {
    name: 'UpgradeClient',
    options: {},
    I: MsgUpgradeClient,
    O: MsgUpgradeClientResponse,
  },
  {
    name: 'SubmitMisbehaviour',
    options: {},
    I: MsgSubmitMisbehaviour,
    O: MsgSubmitMisbehaviourResponse,
  },
])
