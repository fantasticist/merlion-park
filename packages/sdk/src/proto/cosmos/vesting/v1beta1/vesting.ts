// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/vesting/v1beta1/vesting.proto" (package "cosmos.vesting.v1beta1", syntax proto3)
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
import { Coin } from '../../base/v1beta1/coin'
import { BaseAccount } from '../../auth/v1beta1/auth'
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 *
 * @generated from protobuf messages cosmos.vesting.v1beta1.BaseVestingAccount
 */
export interface BaseVestingAccount {
  /**
   * @generated from protobuf field: cosmos.auth.v1beta1.BaseAccount base_account = 1;
   */
  baseAccount?: BaseAccount
  /**
   * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin original_vesting = 2;
   */
  originalVesting: Coin[]
  /**
   * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin delegated_free = 3;
   */
  delegatedFree: Coin[]
  /**
   * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin delegated_vesting = 4;
   */
  delegatedVesting: Coin[]
  /**
   * @generated from protobuf field: int64 end_time = 5;
   */
  endTime: string
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 *
 * @generated from protobuf messages cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export interface ContinuousVestingAccount {
  /**
   * @generated from protobuf field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount
  /**
   * @generated from protobuf field: int64 start_time = 2;
   */
  startTime: string
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 *
 * @generated from protobuf messages cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export interface DelayedVestingAccount {
  /**
   * @generated from protobuf field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount
}
/**
 * Period defines a length of time and amount of coins that will vest.
 *
 * @generated from protobuf messages cosmos.vesting.v1beta1.Period
 */
export interface Period {
  /**
   * @generated from protobuf field: int64 length = 1;
   */
  length: string
  /**
   * @generated from protobuf field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[]
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 *
 * @generated from protobuf messages cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export interface PeriodicVestingAccount {
  /**
   * @generated from protobuf field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount
  /**
   * @generated from protobuf field: int64 start_time = 2;
   */
  startTime: string
  /**
   * @generated from protobuf field: repeated cosmos.vesting.v1beta1.Period vesting_periods = 3;
   */
  vestingPeriods: Period[]
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from protobuf messages cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export interface PermanentLockedAccount {
  /**
   * @generated from protobuf field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount
}
// @generated messages type with reflection information, may provide speed optimized methods
class BaseVestingAccount$Type extends MessageType<BaseVestingAccount> {
  constructor() {
    super(
      'cosmos.vesting.v1beta1.BaseVestingAccount',
      [
        {
          no: 1,
          name: 'base_account',
          kind: 'message',
          T: () => BaseAccount,
          options: { 'gogoproto.embed': true },
        },
        {
          no: 2,
          name: 'original_vesting',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Coin,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.moretags': 'yaml:"original_vesting"',
            'gogoproto.castrepeated':
              'github.com/cosmos/cosmos-sdk/types.Coins',
          },
        },
        {
          no: 3,
          name: 'delegated_free',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Coin,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.moretags': 'yaml:"delegated_free"',
            'gogoproto.castrepeated':
              'github.com/cosmos/cosmos-sdk/types.Coins',
          },
        },
        {
          no: 4,
          name: 'delegated_vesting',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Coin,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.moretags': 'yaml:"delegated_vesting"',
            'gogoproto.castrepeated':
              'github.com/cosmos/cosmos-sdk/types.Coins',
          },
        },
        {
          no: 5,
          name: 'end_time',
          kind: 'scalar',
          T: 3 /*ScalarType.INT64*/,
          options: { 'gogoproto.moretags': 'yaml:"end_time"' },
        },
      ],
      {
        'gogoproto.goproto_getters': false,
        'gogoproto.goproto_stringer': false,
      },
    )
  }
  create(value?: PartialMessage<BaseVestingAccount>): BaseVestingAccount {
    const message = {
      originalVesting: [],
      delegatedFree: [],
      delegatedVesting: [],
      endTime: '0',
    }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<BaseVestingAccount>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: BaseVestingAccount,
  ): BaseVestingAccount {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* cosmos.auth.v1beta1.BaseAccount base_account */ 1:
          message.baseAccount = BaseAccount.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.baseAccount,
          )
          break
        case /* repeated cosmos.base.v1beta1.Coin original_vesting */ 2:
          message.originalVesting.push(
            Coin.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* repeated cosmos.base.v1beta1.Coin delegated_free */ 3:
          message.delegatedFree.push(
            Coin.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* repeated cosmos.base.v1beta1.Coin delegated_vesting */ 4:
          message.delegatedVesting.push(
            Coin.internalBinaryRead(reader, reader.uint32(), options),
          )
          break
        case /* int64 end_time */ 5:
          message.endTime = reader.int64().toString()
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
    message: BaseVestingAccount,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* cosmos.auth.v1beta1.BaseAccount base_account = 1; */
    if (message.baseAccount)
      BaseAccount.internalBinaryWrite(
        message.baseAccount,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated cosmos.base.v1beta1.Coin original_vesting = 2; */
    for (let i = 0; i < message.originalVesting.length; i++)
      Coin.internalBinaryWrite(
        message.originalVesting[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated cosmos.base.v1beta1.Coin delegated_free = 3; */
    for (let i = 0; i < message.delegatedFree.length; i++)
      Coin.internalBinaryWrite(
        message.delegatedFree[i],
        writer.tag(3, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* repeated cosmos.base.v1beta1.Coin delegated_vesting = 4; */
    for (let i = 0; i < message.delegatedVesting.length; i++)
      Coin.internalBinaryWrite(
        message.delegatedVesting[i],
        writer.tag(4, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* int64 end_time = 5; */
    if (message.endTime !== '0')
      writer.tag(5, WireType.Varint).int64(message.endTime)
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
 * @generated MessageType for protobuf messages cosmos.vesting.v1beta1.BaseVestingAccount
 */
export const BaseVestingAccount = new BaseVestingAccount$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class ContinuousVestingAccount$Type extends MessageType<ContinuousVestingAccount> {
  constructor() {
    super(
      'cosmos.vesting.v1beta1.ContinuousVestingAccount',
      [
        {
          no: 1,
          name: 'base_vesting_account',
          kind: 'message',
          T: () => BaseVestingAccount,
          options: { 'gogoproto.embed': true },
        },
        {
          no: 2,
          name: 'start_time',
          kind: 'scalar',
          T: 3 /*ScalarType.INT64*/,
          options: { 'gogoproto.moretags': 'yaml:"start_time"' },
        },
      ],
      {
        'gogoproto.goproto_getters': false,
        'gogoproto.goproto_stringer': false,
      },
    )
  }
  create(
    value?: PartialMessage<ContinuousVestingAccount>,
  ): ContinuousVestingAccount {
    const message = { startTime: '0' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<ContinuousVestingAccount>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ContinuousVestingAccount,
  ): ContinuousVestingAccount {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account */ 1:
          message.baseVestingAccount = BaseVestingAccount.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.baseVestingAccount,
          )
          break
        case /* int64 start_time */ 2:
          message.startTime = reader.int64().toString()
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
    message: ContinuousVestingAccount,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1; */
    if (message.baseVestingAccount)
      BaseVestingAccount.internalBinaryWrite(
        message.baseVestingAccount,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* int64 start_time = 2; */
    if (message.startTime !== '0')
      writer.tag(2, WireType.Varint).int64(message.startTime)
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
 * @generated MessageType for protobuf messages cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export const ContinuousVestingAccount = new ContinuousVestingAccount$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class DelayedVestingAccount$Type extends MessageType<DelayedVestingAccount> {
  constructor() {
    super(
      'cosmos.vesting.v1beta1.DelayedVestingAccount',
      [
        {
          no: 1,
          name: 'base_vesting_account',
          kind: 'message',
          T: () => BaseVestingAccount,
          options: { 'gogoproto.embed': true },
        },
      ],
      {
        'gogoproto.goproto_getters': false,
        'gogoproto.goproto_stringer': false,
      },
    )
  }
  create(value?: PartialMessage<DelayedVestingAccount>): DelayedVestingAccount {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<DelayedVestingAccount>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: DelayedVestingAccount,
  ): DelayedVestingAccount {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account */ 1:
          message.baseVestingAccount = BaseVestingAccount.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.baseVestingAccount,
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
    message: DelayedVestingAccount,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1; */
    if (message.baseVestingAccount)
      BaseVestingAccount.internalBinaryWrite(
        message.baseVestingAccount,
        writer.tag(1, WireType.LengthDelimited).fork(),
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
 * @generated MessageType for protobuf messages cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export const DelayedVestingAccount = new DelayedVestingAccount$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class Period$Type extends MessageType<Period> {
  constructor() {
    super(
      'cosmos.vesting.v1beta1.Period',
      [
        { no: 1, name: 'length', kind: 'scalar', T: 3 /*ScalarType.INT64*/ },
        {
          no: 2,
          name: 'amount',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Coin,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.castrepeated':
              'github.com/cosmos/cosmos-sdk/types.Coins',
          },
        },
      ],
      { 'gogoproto.goproto_stringer': false },
    )
  }
  create(value?: PartialMessage<Period>): Period {
    const message = { length: '0', amount: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<Period>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Period,
  ): Period {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* int64 length */ 1:
          message.length = reader.int64().toString()
          break
        case /* repeated cosmos.base.v1beta1.Coin amount */ 2:
          message.amount.push(
            Coin.internalBinaryRead(reader, reader.uint32(), options),
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
    message: Period,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* int64 length = 1; */
    if (message.length !== '0')
      writer.tag(1, WireType.Varint).int64(message.length)
    /* repeated cosmos.base.v1beta1.Coin amount = 2; */
    for (let i = 0; i < message.amount.length; i++)
      Coin.internalBinaryWrite(
        message.amount[i],
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
 * @generated MessageType for protobuf messages cosmos.vesting.v1beta1.Period
 */
export const Period = new Period$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class PeriodicVestingAccount$Type extends MessageType<PeriodicVestingAccount> {
  constructor() {
    super(
      'cosmos.vesting.v1beta1.PeriodicVestingAccount',
      [
        {
          no: 1,
          name: 'base_vesting_account',
          kind: 'message',
          T: () => BaseVestingAccount,
          options: { 'gogoproto.embed': true },
        },
        {
          no: 2,
          name: 'start_time',
          kind: 'scalar',
          T: 3 /*ScalarType.INT64*/,
          options: { 'gogoproto.moretags': 'yaml:"start_time"' },
        },
        {
          no: 3,
          name: 'vesting_periods',
          kind: 'message',
          repeat: 1 /*RepeatType.PACKED*/,
          T: () => Period,
          options: {
            'gogoproto.nullable': false,
            'gogoproto.moretags': 'yaml:"vesting_periods"',
          },
        },
      ],
      {
        'gogoproto.goproto_getters': false,
        'gogoproto.goproto_stringer': false,
      },
    )
  }
  create(
    value?: PartialMessage<PeriodicVestingAccount>,
  ): PeriodicVestingAccount {
    const message = { startTime: '0', vestingPeriods: [] }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<PeriodicVestingAccount>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: PeriodicVestingAccount,
  ): PeriodicVestingAccount {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account */ 1:
          message.baseVestingAccount = BaseVestingAccount.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.baseVestingAccount,
          )
          break
        case /* int64 start_time */ 2:
          message.startTime = reader.int64().toString()
          break
        case /* repeated cosmos.vesting.v1beta1.Period vesting_periods */ 3:
          message.vestingPeriods.push(
            Period.internalBinaryRead(reader, reader.uint32(), options),
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
    message: PeriodicVestingAccount,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1; */
    if (message.baseVestingAccount)
      BaseVestingAccount.internalBinaryWrite(
        message.baseVestingAccount,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join()
    /* int64 start_time = 2; */
    if (message.startTime !== '0')
      writer.tag(2, WireType.Varint).int64(message.startTime)
    /* repeated cosmos.vesting.v1beta1.Period vesting_periods = 3; */
    for (let i = 0; i < message.vestingPeriods.length; i++)
      Period.internalBinaryWrite(
        message.vestingPeriods[i],
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
 * @generated MessageType for protobuf messages cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export const PeriodicVestingAccount = new PeriodicVestingAccount$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class PermanentLockedAccount$Type extends MessageType<PermanentLockedAccount> {
  constructor() {
    super(
      'cosmos.vesting.v1beta1.PermanentLockedAccount',
      [
        {
          no: 1,
          name: 'base_vesting_account',
          kind: 'message',
          T: () => BaseVestingAccount,
          options: { 'gogoproto.embed': true },
        },
      ],
      {
        'gogoproto.goproto_getters': false,
        'gogoproto.goproto_stringer': false,
      },
    )
  }
  create(
    value?: PartialMessage<PermanentLockedAccount>,
  ): PermanentLockedAccount {
    const message = {}
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<PermanentLockedAccount>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: PermanentLockedAccount,
  ): PermanentLockedAccount {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account */ 1:
          message.baseVestingAccount = BaseVestingAccount.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.baseVestingAccount,
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
    message: PermanentLockedAccount,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1; */
    if (message.baseVestingAccount)
      BaseVestingAccount.internalBinaryWrite(
        message.baseVestingAccount,
        writer.tag(1, WireType.LengthDelimited).fork(),
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
 * @generated MessageType for protobuf messages cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export const PermanentLockedAccount = new PermanentLockedAccount$Type()
