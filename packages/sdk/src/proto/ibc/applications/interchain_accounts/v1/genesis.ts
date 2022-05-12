// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ibc/applications/interchain_accounts/v1/genesis.proto" (package "ibc.applications.interchain_accounts.v1", syntax proto3)
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
import { Params as Params$ } from '../host/v1/host'
import { Params } from '../controller/v1/controller'
/**
 * GenesisState defines the interchain accounts genesis state
 *
 * @generated from protobuf messages ibc.applications.interchain_accounts.v1.GenesisState
 */
export interface GenesisState {
  /**
   * @generated from protobuf field: ibc.applications.interchain_accounts.v1.ControllerGenesisState controller_genesis_state = 1;
   */
  controllerGenesisState?: ControllerGenesisState
  /**
   * @generated from protobuf field: ibc.applications.interchain_accounts.v1.HostGenesisState host_genesis_state = 2;
   */
  hostGenesisState?: HostGenesisState
}
/**
 * ControllerGenesisState defines the interchain accounts controller genesis state
 *
 * @generated from protobuf messages ibc.applications.interchain_accounts.v1.ControllerGenesisState
 */
export interface ControllerGenesisState {
  /**
   * @generated from protobuf field: repeated ibc.applications.interchain_accounts.v1.ActiveChannel active_channels = 1;
   */
  activeChannels: ActiveChannel[]
  /**
   * @generated from protobuf field: repeated ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount interchain_accounts = 2;
   */
  interchainAccounts: RegisteredInterchainAccount[]
  /**
   * @generated from protobuf field: repeated string ports = 3;
   */
  ports: string[]
  /**
   * @generated from protobuf field: ibc.applications.interchain_accounts.controller.v1.Params params = 4;
   */
  params?: Params
}
/**
 * HostGenesisState defines the interchain accounts host genesis state
 *
 * @generated from protobuf messages ibc.applications.interchain_accounts.v1.HostGenesisState
 */
export interface HostGenesisState {
  /**
   * @generated from protobuf field: repeated ibc.applications.interchain_accounts.v1.ActiveChannel active_channels = 1;
   */
  activeChannels: ActiveChannel[]
  /**
   * @generated from protobuf field: repeated ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount interchain_accounts = 2;
   */
  interchainAccounts: RegisteredInterchainAccount[]
  /**
   * @generated from protobuf field: string port = 3;
   */
  port: string
  /**
   * @generated from protobuf field: ibc.applications.interchain_accounts.host.v1.Params params = 4;
   */
  params?: Params$
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID
 *
 * @generated from protobuf messages ibc.applications.interchain_accounts.v1.ActiveChannel
 */
export interface ActiveChannel {
  /**
   * @generated from protobuf field: string connection_id = 1;
   */
  connectionId: string
  /**
   * @generated from protobuf field: string port_id = 2;
   */
  portId: string
  /**
   * @generated from protobuf field: string channel_id = 3;
   */
  channelId: string
}
/**
 * RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address
 *
 * @generated from protobuf messages ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount
 */
export interface RegisteredInterchainAccount {
  /**
   * @generated from protobuf field: string connection_id = 1;
   */
  connectionId: string
  /**
   * @generated from protobuf field: string port_id = 2;
   */
  portId: string
  /**
   * @generated from protobuf field: string account_address = 3;
   */
  accountAddress: string
}
// @generated messages type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
  constructor() {
    super('ibc.applications.interchain_accounts.v1.GenesisState', [
      {
        no: 1,
        name: 'controller_genesis_state',
        kind: 'message',
        T: () => ControllerGenesisState,
        options: {
          'gogoproto.nullable': false,
          'gogoproto.moretags': 'yaml:"controller_genesis_state"',
        },
      },
      {
        no: 2,
        name: 'host_genesis_state',
        kind: 'message',
        T: () => HostGenesisState,
        options: {
          'gogoproto.nullable': false,
          'gogoproto.moretags': 'yaml:"host_genesis_state"',
        },
      },
    ])
  }
  create(value?: PartialMessage<GenesisState>): GenesisState {
    const message = {}
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
        case /* ibc.applications.interchain_accounts.v1.ControllerGenesisState controller_genesis_state */ 1:
          message.controllerGenesisState =
            ControllerGenesisState.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
              message.controllerGenesisState,
            )
          break
        case /* ibc.applications.interchain_accounts.v1.HostGenesisState host_genesis_state */ 2:
          message.hostGenesisState = HostGenesisState.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.hostGenesisState,
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
    /* ibc.applications.interchain_accounts.v1.ControllerGenesisState controller_genesis_state = 1; */
    if (message.controllerGenesisState)
      ControllerGenesisState.internalBinaryWrite(
        message.controllerGenesisState,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* ibc.applications.interchain_accounts.v1.HostGenesisState host_genesis_state = 2; */
    if (message.hostGenesisState)
      HostGenesisState.internalBinaryWrite(
        message.hostGenesisState,
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
 * @generated MessageType for protobuf messages ibc.applications.interchain_accounts.v1.GenesisState
 */
export const GenesisState = new GenesisState$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class ControllerGenesisState$Type extends MessageType<ControllerGenesisState> {
  constructor() {
    super('ibc.applications.interchain_accounts.v1.ControllerGenesisState', [
      {
        no: 1,
        name: 'active_channels',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => ActiveChannel,
        options: {
          'gogoproto.nullable': false,
          'gogoproto.moretags': 'yaml:"active_channels"',
        },
      },
      {
        no: 2,
        name: 'interchain_accounts',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => RegisteredInterchainAccount,
        options: {
          'gogoproto.nullable': false,
          'gogoproto.moretags': 'yaml:"interchain_accounts"',
        },
      },
      {
        no: 3,
        name: 'ports',
        kind: 'scalar',
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 4,
        name: 'params',
        kind: 'message',
        T: () => Params,
        options: { 'gogoproto.nullable': false },
      },
    ])
  }
  create(
    value?: PartialMessage<ControllerGenesisState>,
  ): ControllerGenesisState {
    const message = { activeChannels: [], interchainAccounts: [], ports: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<ControllerGenesisState>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ControllerGenesisState,
  ): ControllerGenesisState {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated ibc.applications.interchain_accounts.v1.ActiveChannel active_channels */ 1:
          message.activeChannels.push(
            ActiveChannel.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* repeated ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount interchain_accounts */ 2:
          message.interchainAccounts.push(
            RegisteredInterchainAccount.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          )
          break
        case /* repeated string ports */ 3:
          message.ports.push(reader.string())
          break
        case /* ibc.applications.interchain_accounts.controller.v1.Params params */ 4:
          message.params = Params.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.params,
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
    message: ControllerGenesisState,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* repeated ibc.applications.interchain_accounts.v1.ActiveChannel active_channels = 1; */
    for (let i = 0; i < message.activeChannels.length; i++)
      ActiveChannel.internalBinaryWrite(
        message.activeChannels[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount interchain_accounts = 2; */
    for (let i = 0; i < message.interchainAccounts.length; i++)
      RegisteredInterchainAccount.internalBinaryWrite(
        message.interchainAccounts[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated string ports = 3; */
    for (let i = 0; i < message.ports.length; i++)
      writer.tag(3, WireType.LengthDelimited).string(message.ports[i])
    /* ibc.applications.interchain_accounts.controller.v1.Params params = 4; */
    if (message.params)
      Params.internalBinaryWrite(
        message.params,
        writer.tag(4, WireType.LengthDelimited).fork(),
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
 * @generated MessageType for protobuf messages ibc.applications.interchain_accounts.v1.ControllerGenesisState
 */
export const ControllerGenesisState = new ControllerGenesisState$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class HostGenesisState$Type extends MessageType<HostGenesisState> {
  constructor() {
    super('ibc.applications.interchain_accounts.v1.HostGenesisState', [
      {
        no: 1,
        name: 'active_channels',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => ActiveChannel,
        options: {
          'gogoproto.nullable': false,
          'gogoproto.moretags': 'yaml:"active_channels"',
        },
      },
      {
        no: 2,
        name: 'interchain_accounts',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => RegisteredInterchainAccount,
        options: {
          'gogoproto.nullable': false,
          'gogoproto.moretags': 'yaml:"interchain_accounts"',
        },
      },
      { no: 3, name: 'port', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      {
        no: 4,
        name: 'params',
        kind: 'message',
        T: () => Params$,
        options: { 'gogoproto.nullable': false },
      },
    ])
  }
  create(value?: PartialMessage<HostGenesisState>): HostGenesisState {
    const message = { activeChannels: [], interchainAccounts: [], port: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<HostGenesisState>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: HostGenesisState,
  ): HostGenesisState {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated ibc.applications.interchain_accounts.v1.ActiveChannel active_channels */ 1:
          message.activeChannels.push(
            ActiveChannel.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* repeated ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount interchain_accounts */ 2:
          message.interchainAccounts.push(
            RegisteredInterchainAccount.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          )
          break
        case /* string port */ 3:
          message.port = reader.string()
          break
        case /* ibc.applications.interchain_accounts.host.v1.Params params */ 4:
          message.params = Params$.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.params,
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
    message: HostGenesisState,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* repeated ibc.applications.interchain_accounts.v1.ActiveChannel active_channels = 1; */
    for (let i = 0; i < message.activeChannels.length; i++)
      ActiveChannel.internalBinaryWrite(
        message.activeChannels[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount interchain_accounts = 2; */
    for (let i = 0; i < message.interchainAccounts.length; i++)
      RegisteredInterchainAccount.internalBinaryWrite(
        message.interchainAccounts[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* string port = 3; */
    if (message.port !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.port)
    /* ibc.applications.interchain_accounts.host.v1.Params params = 4; */
    if (message.params)
      Params$.internalBinaryWrite(
        message.params,
        writer.tag(4, WireType.LengthDelimited).fork(),
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
 * @generated MessageType for protobuf messages ibc.applications.interchain_accounts.v1.HostGenesisState
 */
export const HostGenesisState = new HostGenesisState$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class ActiveChannel$Type extends MessageType<ActiveChannel> {
  constructor() {
    super('ibc.applications.interchain_accounts.v1.ActiveChannel', [
      {
        no: 1,
        name: 'connection_id',
        kind: 'scalar',
        T: 9 /*ScalarType.STRING*/,
        options: { 'gogoproto.moretags': 'yaml:"connection_id"' },
      },
      {
        no: 2,
        name: 'port_id',
        kind: 'scalar',
        T: 9 /*ScalarType.STRING*/,
        options: { 'gogoproto.moretags': 'yaml:"port_id"' },
      },
      {
        no: 3,
        name: 'channel_id',
        kind: 'scalar',
        T: 9 /*ScalarType.STRING*/,
        options: { 'gogoproto.moretags': 'yaml:"channel_id"' },
      },
    ])
  }
  create(value?: PartialMessage<ActiveChannel>): ActiveChannel {
    const message = { connectionId: '', portId: '', channelId: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<ActiveChannel>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ActiveChannel,
  ): ActiveChannel {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string connection_id */ 1:
          message.connectionId = reader.string()
          break
        case /* string port_id */ 2:
          message.portId = reader.string()
          break
        case /* string channel_id */ 3:
          message.channelId = reader.string()
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
    message: ActiveChannel,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string connection_id = 1; */
    if (message.connectionId !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.connectionId)
    /* string port_id = 2; */
    if (message.portId !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.portId)
    /* string channel_id = 3; */
    if (message.channelId !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.channelId)
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
 * @generated MessageType for protobuf messages ibc.applications.interchain_accounts.v1.ActiveChannel
 */
export const ActiveChannel = new ActiveChannel$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class RegisteredInterchainAccount$Type extends MessageType<RegisteredInterchainAccount> {
  constructor() {
    super(
      'ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount',
      [
        {
          no: 1,
          name: 'connection_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'yaml:"connection_id"' },
        },
        {
          no: 2,
          name: 'port_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'yaml:"port_id"' },
        },
        {
          no: 3,
          name: 'account_address',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'yaml:"account_address"' },
        },
      ],
    )
  }
  create(
    value?: PartialMessage<RegisteredInterchainAccount>,
  ): RegisteredInterchainAccount {
    const message = { connectionId: '', portId: '', accountAddress: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<RegisteredInterchainAccount>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: RegisteredInterchainAccount,
  ): RegisteredInterchainAccount {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string connection_id */ 1:
          message.connectionId = reader.string()
          break
        case /* string port_id */ 2:
          message.portId = reader.string()
          break
        case /* string account_address */ 3:
          message.accountAddress = reader.string()
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
    message: RegisteredInterchainAccount,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string connection_id = 1; */
    if (message.connectionId !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.connectionId)
    /* string port_id = 2; */
    if (message.portId !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.portId)
    /* string account_address = 3; */
    if (message.accountAddress !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.accountAddress)
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
 * @generated MessageType for protobuf messages ibc.applications.interchain_accounts.v1.RegisteredInterchainAccount
 */
export const RegisteredInterchainAccount =
  new RegisteredInterchainAccount$Type()
