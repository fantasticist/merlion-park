// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/feegrant/v1beta1/feegrant.proto" (package "cosmos.feegrant.v1beta1", syntax proto3)
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
import { Any } from '../../../google/protobuf/any'
import { Duration } from '../../../google/protobuf/duration'
import { Timestamp } from '../../../google/protobuf/timestamp'
import { Coin } from '../../base/v1beta1/coin'
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 *
 * @generated from protobuf messages cosmos.feegrant.v1beta1.BasicAllowance
 */
export interface BasicAllowance {
  /**
   * spend_limit specifies the maximum amount of tokens that can be spent
   * by this allowance and will be updated as tokens are spent. If it is
   * empty, there is no spend limit and any amount of coins can be spent.
   *
   * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin spend_limit = 1;
   */
  spendLimit: Coin[]
  /**
   * expiration specifies an optional time when this allowance expires
   *
   * @generated from protobuf field: google.protobuf.Timestamp expiration = 2;
   */
  expiration?: Timestamp
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 *
 * @generated from protobuf messages cosmos.feegrant.v1beta1.PeriodicAllowance
 */
export interface PeriodicAllowance {
  /**
   * basic specifies a struct of `BasicAllowance`
   *
   * @generated from protobuf field: cosmos.feegrant.v1beta1.BasicAllowance basic = 1;
   */
  basic?: BasicAllowance
  /**
   * period specifies the time duration in which period_spend_limit coins can
   * be spent before that allowance is reset
   *
   * @generated from protobuf field: google.protobuf.Duration period = 2;
   */
  period?: Duration
  /**
   * period_spend_limit specifies the maximum number of coins that can be spent
   * in the period
   *
   * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin period_spend_limit = 3;
   */
  periodSpendLimit: Coin[]
  /**
   * period_can_spend is the number of coins left to be spent before the period_reset time
   *
   * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin period_can_spend = 4;
   */
  periodCanSpend: Coin[]
  /**
   * period_reset is the time at which this period resets and a new one begins,
   * it is calculated from the start time of the first transaction after the
   * last period ended
   *
   * @generated from protobuf field: google.protobuf.Timestamp period_reset = 5;
   */
  periodReset?: Timestamp
}
/**
 * AllowedMsgAllowance creates allowance only for specified messages types.
 *
 * @generated from protobuf messages cosmos.feegrant.v1beta1.AllowedMsgAllowance
 */
export interface AllowedMsgAllowance {
  /**
   * allowance can be any of basic and filtered fee allowance.
   *
   * @generated from protobuf field: google.protobuf.Any allowance = 1;
   */
  allowance?: Any
  /**
   * allowed_messages are the messages for which the grantee has the access.
   *
   * @generated from protobuf field: repeated string allowed_messages = 2;
   */
  allowedMessages: string[]
}
/**
 * Grant is stored in the KVStore to record a grant with full context
 *
 * @generated from protobuf messages cosmos.feegrant.v1beta1.Grant
 */
export interface Grant {
  /**
   * granter is the address of the user granting an allowance of their funds.
   *
   * @generated from protobuf field: string granter = 1;
   */
  granter: string
  /**
   * grantee is the address of the user being granted an allowance of another user's funds.
   *
   * @generated from protobuf field: string grantee = 2;
   */
  grantee: string
  /**
   * allowance can be any of basic and filtered fee allowance.
   *
   * @generated from protobuf field: google.protobuf.Any allowance = 3;
   */
  allowance?: Any
}
// @generated messages type with reflection information, may provide speed optimized methods
class BasicAllowance$Type extends MessageType<BasicAllowance> {
  constructor() {
    super(
      'cosmos.feegrant.v1beta1.BasicAllowance',
      [
        {
          no: 1,
          name: 'spend_limit',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Coin,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.castrepeated':
              'github.com/cosmos/cosmos-sdk/types.Coins',
          },
        },
        {
          no: 2,
          name: 'expiration',
          kind: 'message',
          T: () => Timestamp,
          options: { 'gogoproto.stdtime': true },
        },
      ],
      { 'cosmos_proto.implements_interface': 'FeeAllowanceI' },
    )
  }
  create(value?: PartialMessage<BasicAllowance>): BasicAllowance {
    const message = { spendLimit: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<BasicAllowance>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: BasicAllowance,
  ): BasicAllowance {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated cosmos.base.v1beta1.Coin spend_limit */ 1:
          message.spendLimit.push(
            Coin.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* google.protobuf.Timestamp expiration */ 2:
          message.expiration = Timestamp.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.expiration,
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
    message: BasicAllowance,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* repeated cosmos.base.v1beta1.Coin spend_limit = 1; */
    for (let i = 0; i < message.spendLimit.length; i++)
      Coin.internalBinaryWrite(
        message.spendLimit[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* google.protobuf.Timestamp expiration = 2; */
    if (message.expiration)
      Timestamp.internalBinaryWrite(
        message.expiration,
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
 * @generated MessageType for protobuf messages cosmos.feegrant.v1beta1.BasicAllowance
 */
export const BasicAllowance = new BasicAllowance$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class PeriodicAllowance$Type extends MessageType<PeriodicAllowance> {
  constructor() {
    super(
      'cosmos.feegrant.v1beta1.PeriodicAllowance',
      [
        {
          no: 1,
          name: 'basic',
          kind: 'message',
          T: () => BasicAllowance,
          options: { 'gogoproto.nullable': false },
        },
        {
          no: 2,
          name: 'period',
          kind: 'message',
          T: () => Duration,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.stdduration': true,
          },
        },
        {
          no: 3,
          name: 'period_spend_limit',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Coin,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.castrepeated':
              'github.com/cosmos/cosmos-sdk/types.Coins',
          },
        },
        {
          no: 4,
          name: 'period_can_spend',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Coin,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.castrepeated':
              'github.com/cosmos/cosmos-sdk/types.Coins',
          },
        },
        {
          no: 5,
          name: 'period_reset',
          kind: 'message',
          T: () => Timestamp,
          options: { 'gogoproto.nullable': false, 'gogoproto.stdtime': true },
        },
      ],
      { 'cosmos_proto.implements_interface': 'FeeAllowanceI' },
    )
  }
  create(value?: PartialMessage<PeriodicAllowance>): PeriodicAllowance {
    const message = { periodSpendLimit: [], periodCanSpend: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<PeriodicAllowance>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: PeriodicAllowance,
  ): PeriodicAllowance {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* cosmos.feegrant.v1beta1.BasicAllowance basic */ 1:
          message.basic = BasicAllowance.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.basic,
          )
          break
        case /* google.protobuf.Duration period */ 2:
          message.period = Duration.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.period,
          )
          break
        case /* repeated cosmos.base.v1beta1.Coin period_spend_limit */ 3:
          message.periodSpendLimit.push(
            Coin.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* repeated cosmos.base.v1beta1.Coin period_can_spend */ 4:
          message.periodCanSpend.push(
            Coin.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* google.protobuf.Timestamp period_reset */ 5:
          message.periodReset = Timestamp.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.periodReset,
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
    message: PeriodicAllowance,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* cosmos.feegrant.v1beta1.BasicAllowance basic = 1; */
    if (message.basic)
      BasicAllowance.internalBinaryWrite(
        message.basic,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* google.protobuf.Duration period = 2; */
    if (message.period)
      Duration.internalBinaryWrite(
        message.period,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated cosmos.base.v1beta1.Coin period_spend_limit = 3; */
    for (let i = 0; i < message.periodSpendLimit.length; i++)
      Coin.internalBinaryWrite(
        message.periodSpendLimit[i],
        writer.tag(3, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated cosmos.base.v1beta1.Coin period_can_spend = 4; */
    for (let i = 0; i < message.periodCanSpend.length; i++)
      Coin.internalBinaryWrite(
        message.periodCanSpend[i],
        writer.tag(4, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* google.protobuf.Timestamp period_reset = 5; */
    if (message.periodReset)
      Timestamp.internalBinaryWrite(
        message.periodReset,
        writer.tag(5, WireType.LengthDelimited).fork(),
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
 * @generated MessageType for protobuf messages cosmos.feegrant.v1beta1.PeriodicAllowance
 */
export const PeriodicAllowance = new PeriodicAllowance$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class AllowedMsgAllowance$Type extends MessageType<AllowedMsgAllowance> {
  constructor() {
    super(
      'cosmos.feegrant.v1beta1.AllowedMsgAllowance',
      [
        {
          no: 1,
          name: 'allowance',
          kind: 'message',
          T: () => Any,
          options: { 'cosmos_proto.accepts_interface': 'FeeAllowanceI' },
        },
        {
          no: 2,
          name: 'allowed_messages',
          kind: 'scalar',
          repeat: 2 /*RepeatType.UNPACKED*/,
          T: 9 /*ScalarType.STRING*/,
        },
      ],
      {
        'gogoproto.goproto_getters': false,
        'cosmos_proto.implements_interface': 'FeeAllowanceI',
      },
    )
  }
  create(value?: PartialMessage<AllowedMsgAllowance>): AllowedMsgAllowance {
    const message = { allowedMessages: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<AllowedMsgAllowance>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: AllowedMsgAllowance,
  ): AllowedMsgAllowance {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* google.protobuf.Any allowance */ 1:
          message.allowance = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.allowance,
          )
          break
        case /* repeated string allowed_messages */ 2:
          message.allowedMessages.push(reader.string())
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
    message: AllowedMsgAllowance,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* google.protobuf.Any allowance = 1; */
    if (message.allowance)
      Any.internalBinaryWrite(
        message.allowance,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated string allowed_messages = 2; */
    for (let i = 0; i < message.allowedMessages.length; i++)
      writer.tag(2, WireType.LengthDelimited).string(message.allowedMessages[i])
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
 * @generated MessageType for protobuf messages cosmos.feegrant.v1beta1.AllowedMsgAllowance
 */
export const AllowedMsgAllowance = new AllowedMsgAllowance$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class Grant$Type extends MessageType<Grant> {
  constructor() {
    super('cosmos.feegrant.v1beta1.Grant', [
      { no: 1, name: 'granter', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'grantee', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      {
        no: 3,
        name: 'allowance',
        kind: 'message',
        T: () => Any,
        options: { 'cosmos_proto.accepts_interface': 'FeeAllowanceI' },
      },
    ])
  }
  create(value?: PartialMessage<Grant>): Grant {
    const message = { granter: '', grantee: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined) reflectionMergePartial<Grant>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Grant,
  ): Grant {
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
        case /* google.protobuf.Any allowance */ 3:
          message.allowance = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.allowance,
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
    message: Grant,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string granter = 1; */
    if (message.granter !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.granter)
    /* string grantee = 2; */
    if (message.grantee !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.grantee)
    /* google.protobuf.Any allowance = 3; */
    if (message.allowance)
      Any.internalBinaryWrite(
        message.allowance,
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
 * @generated MessageType for protobuf messages cosmos.feegrant.v1beta1.Grant
 */
export const Grant = new Grant$Type()
