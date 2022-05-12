// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ibc/core/client/v1/client.proto" (package "ibc.core.client.v1", syntax proto3)
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
import { Plan } from '../../../../cosmos/upgrade/v1beta1/upgrade'
import { Any } from '../../../../google/protobuf/any'
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 *
 * @generated from protobuf messages ibc.core.client.v1.IdentifiedClientState
 */
export interface IdentifiedClientState {
  /**
   * client identifier
   *
   * @generated from protobuf field: string client_id = 1;
   */
  clientId: string
  /**
   * client state
   *
   * @generated from protobuf field: google.protobuf.Any client_state = 2;
   */
  clientState?: Any
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 *
 * @generated from protobuf messages ibc.core.client.v1.ConsensusStateWithHeight
 */
export interface ConsensusStateWithHeight {
  /**
   * consensus state height
   *
   * @generated from protobuf field: ibc.core.client.v1.Height height = 1;
   */
  height?: Height
  /**
   * consensus state
   *
   * @generated from protobuf field: google.protobuf.Any consensus_state = 2;
   */
  consensusState?: Any
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 *
 * @generated from protobuf messages ibc.core.client.v1.ClientConsensusStates
 */
export interface ClientConsensusStates {
  /**
   * client identifier
   *
   * @generated from protobuf field: string client_id = 1;
   */
  clientId: string
  /**
   * consensus states and their heights associated with the client
   *
   * @generated from protobuf field: repeated ibc.core.client.v1.ConsensusStateWithHeight consensus_states = 2;
   */
  consensusStates: ConsensusStateWithHeight[]
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 *
 * @generated from protobuf messages ibc.core.client.v1.ClientUpdateProposal
 */
export interface ClientUpdateProposal {
  /**
   * the title of the update proposal
   *
   * @generated from protobuf field: string title = 1;
   */
  title: string
  /**
   * the description of the proposal
   *
   * @generated from protobuf field: string description = 2;
   */
  description: string
  /**
   * the client identifier for the client to be updated if the proposal passes
   *
   * @generated from protobuf field: string subject_client_id = 3;
   */
  subjectClientId: string
  /**
   * the substitute client identifier for the client standing in for the subject
   * client
   *
   * @generated from protobuf field: string substitute_client_id = 4;
   */
  substituteClientId: string
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 *
 * @generated from protobuf messages ibc.core.client.v1.UpgradeProposal
 */
export interface UpgradeProposal {
  /**
   * @generated from protobuf field: string title = 1;
   */
  title: string
  /**
   * @generated from protobuf field: string description = 2;
   */
  description: string
  /**
   * @generated from protobuf field: cosmos.upgrade.v1beta1.Plan plan = 3;
   */
  plan?: Plan
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades
   *
   * @generated from protobuf field: google.protobuf.Any upgraded_client_state = 4;
   */
  upgradedClientState?: Any
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 *
 * @generated from protobuf messages ibc.core.client.v1.Height
 */
export interface Height {
  /**
   * the revision that the client is currently on
   *
   * @generated from protobuf field: uint64 revision_number = 1;
   */
  revisionNumber: string
  /**
   * the height within the given revision
   *
   * @generated from protobuf field: uint64 revision_height = 2;
   */
  revisionHeight: string
}
/**
 * Params defines the set of IBC light client parameters.
 *
 * @generated from protobuf messages ibc.core.client.v1.Params
 */
export interface Params {
  /**
   * allowed_clients defines the list of allowed client state types.
   *
   * @generated from protobuf field: repeated string allowed_clients = 1;
   */
  allowedClients: string[]
}
// @generated messages type with reflection information, may provide speed optimized methods
class IdentifiedClientState$Type extends MessageType<IdentifiedClientState> {
  constructor() {
    super('ibc.core.client.v1.IdentifiedClientState', [
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
    ])
  }
  create(value?: PartialMessage<IdentifiedClientState>): IdentifiedClientState {
    const message = { clientId: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<IdentifiedClientState>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: IdentifiedClientState,
  ): IdentifiedClientState {
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
    message: IdentifiedClientState,
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.IdentifiedClientState
 */
export const IdentifiedClientState = new IdentifiedClientState$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class ConsensusStateWithHeight$Type extends MessageType<ConsensusStateWithHeight> {
  constructor() {
    super('ibc.core.client.v1.ConsensusStateWithHeight', [
      {
        no: 1,
        name: 'height',
        kind: 'message',
        T: () => Height,
        options: { 'gogoproto.nullable': false },
      },
      {
        no: 2,
        name: 'consensus_state',
        kind: 'message',
        T: () => Any,
        options: { 'gogoproto.moretags': 'yaml:"consensus_state"' },
      },
    ])
  }
  create(
    value?: PartialMessage<ConsensusStateWithHeight>,
  ): ConsensusStateWithHeight {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<ConsensusStateWithHeight>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ConsensusStateWithHeight,
  ): ConsensusStateWithHeight {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* ibc.core.client.v1.Height height */ 1:
          message.height = Height.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.height,
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
    message: ConsensusStateWithHeight,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* ibc.core.client.v1.Height height = 1; */
    if (message.height)
      Height.internalBinaryWrite(
        message.height,
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.ConsensusStateWithHeight
 */
export const ConsensusStateWithHeight = new ConsensusStateWithHeight$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class ClientConsensusStates$Type extends MessageType<ClientConsensusStates> {
  constructor() {
    super('ibc.core.client.v1.ClientConsensusStates', [
      {
        no: 1,
        name: 'client_id',
        kind: 'scalar',
        T: 9 /*ScalarType.STRING*/,
        options: { 'gogoproto.moretags': 'yaml:"client_id"' },
      },
      {
        no: 2,
        name: 'consensus_states',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => ConsensusStateWithHeight,
        options: {
          'gogoproto.nullable': false,
          'gogoproto.moretags': 'yaml:"consensus_states"',
        },
      },
    ])
  }
  create(value?: PartialMessage<ClientConsensusStates>): ClientConsensusStates {
    const message = { clientId: '', consensusStates: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<ClientConsensusStates>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ClientConsensusStates,
  ): ClientConsensusStates {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string client_id */ 1:
          message.clientId = reader.string()
          break
        case /* repeated ibc.core.client.v1.ConsensusStateWithHeight consensus_states */ 2:
          message.consensusStates.push(
            ConsensusStateWithHeight.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
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
    message: ClientConsensusStates,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string client_id = 1; */
    if (message.clientId !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.clientId)
    /* repeated ibc.core.client.v1.ConsensusStateWithHeight consensus_states = 2; */
    for (let i = 0; i < message.consensusStates.length; i++)
      ConsensusStateWithHeight.internalBinaryWrite(
        message.consensusStates[i],
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.ClientConsensusStates
 */
export const ClientConsensusStates = new ClientConsensusStates$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class ClientUpdateProposal$Type extends MessageType<ClientUpdateProposal> {
  constructor() {
    super(
      'ibc.core.client.v1.ClientUpdateProposal',
      [
        { no: 1, name: 'title', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
        {
          no: 2,
          name: 'description',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
        },
        {
          no: 3,
          name: 'subject_client_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'yaml:"subject_client_id"' },
        },
        {
          no: 4,
          name: 'substitute_client_id',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
          options: { 'gogoproto.moretags': 'yaml:"substitute_client_id"' },
        },
      ],
      { 'gogoproto.goproto_getters': false },
    )
  }
  create(value?: PartialMessage<ClientUpdateProposal>): ClientUpdateProposal {
    const message = {
      title: '',
      description: '',
      subjectClientId: '',
      substituteClientId: '',
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<ClientUpdateProposal>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ClientUpdateProposal,
  ): ClientUpdateProposal {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string title */ 1:
          message.title = reader.string()
          break
        case /* string description */ 2:
          message.description = reader.string()
          break
        case /* string subject_client_id */ 3:
          message.subjectClientId = reader.string()
          break
        case /* string substitute_client_id */ 4:
          message.substituteClientId = reader.string()
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
    message: ClientUpdateProposal,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string title = 1; */
    if (message.title !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.title)
    /* string description = 2; */
    if (message.description !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.description)
    /* string subject_client_id = 3; */
    if (message.subjectClientId !== '')
      writer.tag(3, WireType.LengthDelimited).string(message.subjectClientId)
    /* string substitute_client_id = 4; */
    if (message.substituteClientId !== '')
      writer.tag(4, WireType.LengthDelimited).string(message.substituteClientId)
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.ClientUpdateProposal
 */
export const ClientUpdateProposal = new ClientUpdateProposal$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class UpgradeProposal$Type extends MessageType<UpgradeProposal> {
  constructor() {
    super(
      'ibc.core.client.v1.UpgradeProposal',
      [
        { no: 1, name: 'title', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
        {
          no: 2,
          name: 'description',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
        },
        {
          no: 3,
          name: 'plan',
          kind: 'message',
          T: () => Plan,
          options: { 'gogoproto.nullable': false },
        },
        {
          no: 4,
          name: 'upgraded_client_state',
          kind: 'message',
          T: () => Any,
          options: { 'gogoproto.moretags': 'yaml:"upgraded_client_state"' },
        },
      ],
      {
        'gogoproto.goproto_getters': false,
        'gogoproto.goproto_stringer': false,
        'gogoproto.equal': true,
      },
    )
  }
  create(value?: PartialMessage<UpgradeProposal>): UpgradeProposal {
    const message = { title: '', description: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<UpgradeProposal>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpgradeProposal,
  ): UpgradeProposal {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string title */ 1:
          message.title = reader.string()
          break
        case /* string description */ 2:
          message.description = reader.string()
          break
        case /* cosmos.upgrade.v1beta1.Plan plan */ 3:
          message.plan = Plan.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.plan,
          )
          break
        case /* google.protobuf.Any upgraded_client_state */ 4:
          message.upgradedClientState = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.upgradedClientState,
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
    message: UpgradeProposal,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string title = 1; */
    if (message.title !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.title)
    /* string description = 2; */
    if (message.description !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.description)
    /* cosmos.upgrade.v1beta1.Plan plan = 3; */
    if (message.plan)
      Plan.internalBinaryWrite(
        message.plan,
        writer.tag(3, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* google.protobuf.Any upgraded_client_state = 4; */
    if (message.upgradedClientState)
      Any.internalBinaryWrite(
        message.upgradedClientState,
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.UpgradeProposal
 */
export const UpgradeProposal = new UpgradeProposal$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class Height$Type extends MessageType<Height> {
  constructor() {
    super(
      'ibc.core.client.v1.Height',
      [
        {
          no: 1,
          name: 'revision_number',
          kind: 'scalar',
          T: 4 /*ScalarType.UINT64*/,
          options: { 'gogoproto.moretags': 'yaml:"revision_number"' },
        },
        {
          no: 2,
          name: 'revision_height',
          kind: 'scalar',
          T: 4 /*ScalarType.UINT64*/,
          options: { 'gogoproto.moretags': 'yaml:"revision_height"' },
        },
      ],
      {
        'gogoproto.goproto_getters': false,
        'gogoproto.goproto_stringer': false,
      },
    )
  }
  create(value?: PartialMessage<Height>): Height {
    const message = { revisionNumber: '0', revisionHeight: '0' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<Height>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Height,
  ): Height {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* uint64 revision_number */ 1:
          message.revisionNumber = reader.uint64().toString()
          break
        case /* uint64 revision_height */ 2:
          message.revisionHeight = reader.uint64().toString()
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
    message: Height,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* uint64 revision_number = 1; */
    if (message.revisionNumber !== '0')
      writer.tag(1, WireType.Varint).uint64(message.revisionNumber)
    /* uint64 revision_height = 2; */
    if (message.revisionHeight !== '0')
      writer.tag(2, WireType.Varint).uint64(message.revisionHeight)
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.Height
 */
export const Height = new Height$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
  constructor() {
    super('ibc.core.client.v1.Params', [
      {
        no: 1,
        name: 'allowed_clients',
        kind: 'scalar',
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/,
        options: { 'gogoproto.moretags': 'yaml:"allowed_clients"' },
      },
    ])
  }
  create(value?: PartialMessage<Params>): Params {
    const message = { allowedClients: [] }
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
        case /* repeated string allowed_clients */ 1:
          message.allowedClients.push(reader.string())
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
    /* repeated string allowed_clients = 1; */
    for (let i = 0; i < message.allowedClients.length; i++)
      writer.tag(1, WireType.LengthDelimited).string(message.allowedClients[i])
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
 * @generated MessageType for protobuf messages ibc.core.client.v1.Params
 */
export const Params = new Params$Type()
