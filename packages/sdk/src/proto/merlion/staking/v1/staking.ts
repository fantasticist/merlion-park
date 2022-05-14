// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "merlion/staking/v1/staking.proto" (package "merlion.staking.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message merlion.staking.v1.VeValidator
 */
export interface VeValidator {
    /**
     * @generated from protobuf field: string operator_address = 1;
     */
    operatorAddress: string;
    /**
     * @generated from protobuf field: string ve_delegator_shares = 2;
     */
    veDelegatorShares: string;
}
/**
 * @generated from protobuf message merlion.staking.v1.VeDelegation
 */
export interface VeDelegation {
    /**
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from protobuf field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * @generated from protobuf field: repeated merlion.staking.v1.VeShares ve_shares = 3;
     */
    veShares: VeShares[];
}
/**
 * @generated from protobuf message merlion.staking.v1.VeShares
 */
export interface VeShares {
    /**
     * @generated from protobuf field: uint64 ve_id = 1;
     */
    veId: string;
    /**
     * @generated from protobuf field: string tokens_may_unsettled = 2;
     */
    tokensMayUnsettled: string;
    /**
     * @generated from protobuf field: string shares = 3;
     */
    shares: string;
}
/**
 * @generated from protobuf message merlion.staking.v1.VeUnbondingDelegation
 */
export interface VeUnbondingDelegation {
    /**
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from protobuf field: string validator_address = 2;
     */
    validatorAddress: string;
    /**
     * @generated from protobuf field: repeated merlion.staking.v1.VeUnbondingDelegationEntry entries = 3;
     */
    entries: VeUnbondingDelegationEntry[];
}
/**
 * @generated from protobuf message merlion.staking.v1.VeUnbondingDelegationEntry
 */
export interface VeUnbondingDelegationEntry {
    /**
     * @generated from protobuf field: repeated merlion.staking.v1.VeUnbondingDelegationEntryBalances ve_balances = 1;
     */
    veBalances: VeUnbondingDelegationEntryBalances[];
}
/**
 * @generated from protobuf message merlion.staking.v1.VeUnbondingDelegationEntryBalances
 */
export interface VeUnbondingDelegationEntryBalances {
    /**
     * @generated from protobuf field: uint64 ve_id = 1;
     */
    veId: string;
    /**
     * @generated from protobuf field: string initial_balance = 2;
     */
    initialBalance: string;
    /**
     * @generated from protobuf field: string balance = 3;
     */
    balance: string;
}
/**
 * @generated from protobuf message merlion.staking.v1.VeRedelegation
 */
export interface VeRedelegation {
    /**
     * @generated from protobuf field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from protobuf field: string validator_src_address = 2;
     */
    validatorSrcAddress: string;
    /**
     * @generated from protobuf field: string validator_dst_address = 3;
     */
    validatorDstAddress: string;
    /**
     * @generated from protobuf field: repeated merlion.staking.v1.VeRedelegationEntry entries = 4;
     */
    entries: VeRedelegationEntry[];
}
/**
 * @generated from protobuf message merlion.staking.v1.VeRedelegationEntry
 */
export interface VeRedelegationEntry {
    /**
     * @generated from protobuf field: repeated merlion.staking.v1.VeRedelegationEntryShares ve_shares = 1;
     */
    veShares: VeRedelegationEntryShares[];
}
/**
 * @generated from protobuf message merlion.staking.v1.VeRedelegationEntryShares
 */
export interface VeRedelegationEntryShares {
    /**
     * @generated from protobuf field: uint64 ve_id = 1;
     */
    veId: string;
    /**
     * @generated from protobuf field: string initial_balance = 2;
     */
    initialBalance: string;
    /**
     * @generated from protobuf field: string shares_dst = 3;
     */
    sharesDst: string;
}
/**
 * @generated from protobuf message merlion.staking.v1.VeTokens
 */
export interface VeTokens {
    /**
     * @generated from protobuf field: uint64 ve_id = 1;
     */
    veId: string;
    /**
     * @generated from protobuf field: string tokens = 2;
     */
    tokens: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class VeValidator$Type extends MessageType<VeValidator> {
    constructor() {
        super("merlion.staking.v1.VeValidator", [
            { no: 1, name: "operator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "ve_delegator_shares", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeValidator>): VeValidator {
        const message = { operatorAddress: "", veDelegatorShares: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeValidator>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeValidator): VeValidator {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string operator_address */ 1:
                    message.operatorAddress = reader.string();
                    break;
                case /* string ve_delegator_shares */ 2:
                    message.veDelegatorShares = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeValidator, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string operator_address = 1; */
        if (message.operatorAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.operatorAddress);
        /* string ve_delegator_shares = 2; */
        if (message.veDelegatorShares !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.veDelegatorShares);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeValidator
 */
export const VeValidator = new VeValidator$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeDelegation$Type extends MessageType<VeDelegation> {
    constructor() {
        super("merlion.staking.v1.VeDelegation", [
            { no: 1, name: "delegator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "validator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "ve_shares", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VeShares, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeDelegation>): VeDelegation {
        const message = { delegatorAddress: "", validatorAddress: "", veShares: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeDelegation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeDelegation): VeDelegation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string delegator_address */ 1:
                    message.delegatorAddress = reader.string();
                    break;
                case /* string validator_address */ 2:
                    message.validatorAddress = reader.string();
                    break;
                case /* repeated merlion.staking.v1.VeShares ve_shares */ 3:
                    message.veShares.push(VeShares.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeDelegation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string delegator_address = 1; */
        if (message.delegatorAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.delegatorAddress);
        /* string validator_address = 2; */
        if (message.validatorAddress !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.validatorAddress);
        /* repeated merlion.staking.v1.VeShares ve_shares = 3; */
        for (let i = 0; i < message.veShares.length; i++)
            VeShares.internalBinaryWrite(message.veShares[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeDelegation
 */
export const VeDelegation = new VeDelegation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeShares$Type extends MessageType<VeShares> {
    constructor() {
        super("merlion.staking.v1.VeShares", [
            { no: 1, name: "ve_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "tokens_may_unsettled", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } },
            { no: 3, name: "shares", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeShares>): VeShares {
        const message = { veId: "0", tokensMayUnsettled: "", shares: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeShares>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeShares): VeShares {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 ve_id */ 1:
                    message.veId = reader.uint64().toString();
                    break;
                case /* string tokens_may_unsettled */ 2:
                    message.tokensMayUnsettled = reader.string();
                    break;
                case /* string shares */ 3:
                    message.shares = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeShares, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 ve_id = 1; */
        if (message.veId !== "0")
            writer.tag(1, WireType.Varint).uint64(message.veId);
        /* string tokens_may_unsettled = 2; */
        if (message.tokensMayUnsettled !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.tokensMayUnsettled);
        /* string shares = 3; */
        if (message.shares !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.shares);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeShares
 */
export const VeShares = new VeShares$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeUnbondingDelegation$Type extends MessageType<VeUnbondingDelegation> {
    constructor() {
        super("merlion.staking.v1.VeUnbondingDelegation", [
            { no: 1, name: "delegator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "validator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VeUnbondingDelegationEntry, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeUnbondingDelegation>): VeUnbondingDelegation {
        const message = { delegatorAddress: "", validatorAddress: "", entries: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeUnbondingDelegation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeUnbondingDelegation): VeUnbondingDelegation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string delegator_address */ 1:
                    message.delegatorAddress = reader.string();
                    break;
                case /* string validator_address */ 2:
                    message.validatorAddress = reader.string();
                    break;
                case /* repeated merlion.staking.v1.VeUnbondingDelegationEntry entries */ 3:
                    message.entries.push(VeUnbondingDelegationEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeUnbondingDelegation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string delegator_address = 1; */
        if (message.delegatorAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.delegatorAddress);
        /* string validator_address = 2; */
        if (message.validatorAddress !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.validatorAddress);
        /* repeated merlion.staking.v1.VeUnbondingDelegationEntry entries = 3; */
        for (let i = 0; i < message.entries.length; i++)
            VeUnbondingDelegationEntry.internalBinaryWrite(message.entries[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeUnbondingDelegation
 */
export const VeUnbondingDelegation = new VeUnbondingDelegation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeUnbondingDelegationEntry$Type extends MessageType<VeUnbondingDelegationEntry> {
    constructor() {
        super("merlion.staking.v1.VeUnbondingDelegationEntry", [
            { no: 1, name: "ve_balances", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VeUnbondingDelegationEntryBalances, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeUnbondingDelegationEntry>): VeUnbondingDelegationEntry {
        const message = { veBalances: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeUnbondingDelegationEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeUnbondingDelegationEntry): VeUnbondingDelegationEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated merlion.staking.v1.VeUnbondingDelegationEntryBalances ve_balances */ 1:
                    message.veBalances.push(VeUnbondingDelegationEntryBalances.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeUnbondingDelegationEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated merlion.staking.v1.VeUnbondingDelegationEntryBalances ve_balances = 1; */
        for (let i = 0; i < message.veBalances.length; i++)
            VeUnbondingDelegationEntryBalances.internalBinaryWrite(message.veBalances[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeUnbondingDelegationEntry
 */
export const VeUnbondingDelegationEntry = new VeUnbondingDelegationEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeUnbondingDelegationEntryBalances$Type extends MessageType<VeUnbondingDelegationEntryBalances> {
    constructor() {
        super("merlion.staking.v1.VeUnbondingDelegationEntryBalances", [
            { no: 1, name: "ve_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "initial_balance", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } },
            { no: 3, name: "balance", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeUnbondingDelegationEntryBalances>): VeUnbondingDelegationEntryBalances {
        const message = { veId: "0", initialBalance: "", balance: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeUnbondingDelegationEntryBalances>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeUnbondingDelegationEntryBalances): VeUnbondingDelegationEntryBalances {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 ve_id */ 1:
                    message.veId = reader.uint64().toString();
                    break;
                case /* string initial_balance */ 2:
                    message.initialBalance = reader.string();
                    break;
                case /* string balance */ 3:
                    message.balance = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeUnbondingDelegationEntryBalances, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 ve_id = 1; */
        if (message.veId !== "0")
            writer.tag(1, WireType.Varint).uint64(message.veId);
        /* string initial_balance = 2; */
        if (message.initialBalance !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.initialBalance);
        /* string balance = 3; */
        if (message.balance !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.balance);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeUnbondingDelegationEntryBalances
 */
export const VeUnbondingDelegationEntryBalances = new VeUnbondingDelegationEntryBalances$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeRedelegation$Type extends MessageType<VeRedelegation> {
    constructor() {
        super("merlion.staking.v1.VeRedelegation", [
            { no: 1, name: "delegator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "validator_src_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "validator_dst_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VeRedelegationEntry, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeRedelegation>): VeRedelegation {
        const message = { delegatorAddress: "", validatorSrcAddress: "", validatorDstAddress: "", entries: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeRedelegation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeRedelegation): VeRedelegation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string delegator_address */ 1:
                    message.delegatorAddress = reader.string();
                    break;
                case /* string validator_src_address */ 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case /* string validator_dst_address */ 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case /* repeated merlion.staking.v1.VeRedelegationEntry entries */ 4:
                    message.entries.push(VeRedelegationEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeRedelegation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string delegator_address = 1; */
        if (message.delegatorAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.delegatorAddress);
        /* string validator_src_address = 2; */
        if (message.validatorSrcAddress !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.validatorSrcAddress);
        /* string validator_dst_address = 3; */
        if (message.validatorDstAddress !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.validatorDstAddress);
        /* repeated merlion.staking.v1.VeRedelegationEntry entries = 4; */
        for (let i = 0; i < message.entries.length; i++)
            VeRedelegationEntry.internalBinaryWrite(message.entries[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeRedelegation
 */
export const VeRedelegation = new VeRedelegation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeRedelegationEntry$Type extends MessageType<VeRedelegationEntry> {
    constructor() {
        super("merlion.staking.v1.VeRedelegationEntry", [
            { no: 1, name: "ve_shares", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => VeRedelegationEntryShares, options: { "gogoproto.nullable": false } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeRedelegationEntry>): VeRedelegationEntry {
        const message = { veShares: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeRedelegationEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeRedelegationEntry): VeRedelegationEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated merlion.staking.v1.VeRedelegationEntryShares ve_shares */ 1:
                    message.veShares.push(VeRedelegationEntryShares.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeRedelegationEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated merlion.staking.v1.VeRedelegationEntryShares ve_shares = 1; */
        for (let i = 0; i < message.veShares.length; i++)
            VeRedelegationEntryShares.internalBinaryWrite(message.veShares[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeRedelegationEntry
 */
export const VeRedelegationEntry = new VeRedelegationEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeRedelegationEntryShares$Type extends MessageType<VeRedelegationEntryShares> {
    constructor() {
        super("merlion.staking.v1.VeRedelegationEntryShares", [
            { no: 1, name: "ve_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "initial_balance", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } },
            { no: 3, name: "shares_dst", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeRedelegationEntryShares>): VeRedelegationEntryShares {
        const message = { veId: "0", initialBalance: "", sharesDst: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeRedelegationEntryShares>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeRedelegationEntryShares): VeRedelegationEntryShares {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 ve_id */ 1:
                    message.veId = reader.uint64().toString();
                    break;
                case /* string initial_balance */ 2:
                    message.initialBalance = reader.string();
                    break;
                case /* string shares_dst */ 3:
                    message.sharesDst = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeRedelegationEntryShares, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 ve_id = 1; */
        if (message.veId !== "0")
            writer.tag(1, WireType.Varint).uint64(message.veId);
        /* string initial_balance = 2; */
        if (message.initialBalance !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.initialBalance);
        /* string shares_dst = 3; */
        if (message.sharesDst !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.sharesDst);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeRedelegationEntryShares
 */
export const VeRedelegationEntryShares = new VeRedelegationEntryShares$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VeTokens$Type extends MessageType<VeTokens> {
    constructor() {
        super("merlion.staking.v1.VeTokens", [
            { no: 1, name: "ve_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/ },
            { no: 2, name: "tokens", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<VeTokens>): VeTokens {
        const message = { veId: "0", tokens: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<VeTokens>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VeTokens): VeTokens {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 ve_id */ 1:
                    message.veId = reader.uint64().toString();
                    break;
                case /* string tokens */ 2:
                    message.tokens = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VeTokens, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 ve_id = 1; */
        if (message.veId !== "0")
            writer.tag(1, WireType.Varint).uint64(message.veId);
        /* string tokens = 2; */
        if (message.tokens !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.tokens);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.staking.v1.VeTokens
 */
export const VeTokens = new VeTokens$Type();