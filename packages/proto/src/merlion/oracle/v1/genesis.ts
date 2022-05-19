// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "merlion/oracle/v1/genesis.proto" (package "merlion.oracle.v1", syntax proto3)
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
import { AggregateExchangeRateVote } from "./oracle";
import { AggregateExchangeRatePrevote } from "./oracle";
import { ExchangeRateTuple } from "./oracle";
import { Params } from "./oracle";
/**
 * GenesisState defines the oracle module's genesis state.
 *
 * @generated from protobuf message merlion.oracle.v1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: merlion.oracle.v1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from protobuf field: repeated merlion.oracle.v1.FeederDelegation feeder_delegations = 2;
     */
    feederDelegations: FeederDelegation[];
    /**
     * @generated from protobuf field: repeated merlion.oracle.v1.ExchangeRateTuple exchange_rates = 3;
     */
    exchangeRates: ExchangeRateTuple[];
    /**
     * @generated from protobuf field: repeated merlion.oracle.v1.MissCounter miss_counters = 4;
     */
    missCounters: MissCounter[];
    /**
     * @generated from protobuf field: repeated merlion.oracle.v1.AggregateExchangeRatePrevote aggregate_exchange_rate_prevotes = 5;
     */
    aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[];
    /**
     * @generated from protobuf field: repeated merlion.oracle.v1.AggregateExchangeRateVote aggregate_exchange_rate_votes = 6;
     */
    aggregateExchangeRateVotes: AggregateExchangeRateVote[];
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 *
 * @generated from protobuf message merlion.oracle.v1.FeederDelegation
 */
export interface FeederDelegation {
    /**
     * @generated from protobuf field: string feeder_address = 1;
     */
    feederAddress: string;
    /**
     * @generated from protobuf field: string validator_address = 2;
     */
    validatorAddress: string;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state.
 *
 * @generated from protobuf message merlion.oracle.v1.MissCounter
 */
export interface MissCounter {
    /**
     * @generated from protobuf field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from protobuf field: uint64 miss_counter = 2;
     */
    missCounter: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("merlion.oracle.v1.GenesisState", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } },
            { no: 2, name: "feeder_delegations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => FeederDelegation, options: { "gogoproto.nullable": false } },
            { no: 3, name: "exchange_rates", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExchangeRateTuple, options: { "gogoproto.nullable": false, "gogoproto.castrepeated": "ExchangeRateTuples" } },
            { no: 4, name: "miss_counters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MissCounter, options: { "gogoproto.nullable": false } },
            { no: 5, name: "aggregate_exchange_rate_prevotes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AggregateExchangeRatePrevote, options: { "gogoproto.nullable": false } },
            { no: 6, name: "aggregate_exchange_rate_votes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AggregateExchangeRateVote, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { feederDelegations: [], exchangeRates: [], missCounters: [], aggregateExchangeRatePrevotes: [], aggregateExchangeRateVotes: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GenesisState>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenesisState): GenesisState {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* merlion.oracle.v1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* repeated merlion.oracle.v1.FeederDelegation feeder_delegations */ 2:
                    message.feederDelegations.push(FeederDelegation.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated merlion.oracle.v1.ExchangeRateTuple exchange_rates */ 3:
                    message.exchangeRates.push(ExchangeRateTuple.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated merlion.oracle.v1.MissCounter miss_counters */ 4:
                    message.missCounters.push(MissCounter.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated merlion.oracle.v1.AggregateExchangeRatePrevote aggregate_exchange_rate_prevotes */ 5:
                    message.aggregateExchangeRatePrevotes.push(AggregateExchangeRatePrevote.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated merlion.oracle.v1.AggregateExchangeRateVote aggregate_exchange_rate_votes */ 6:
                    message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GenesisState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* merlion.oracle.v1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated merlion.oracle.v1.FeederDelegation feeder_delegations = 2; */
        for (let i = 0; i < message.feederDelegations.length; i++)
            FeederDelegation.internalBinaryWrite(message.feederDelegations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated merlion.oracle.v1.ExchangeRateTuple exchange_rates = 3; */
        for (let i = 0; i < message.exchangeRates.length; i++)
            ExchangeRateTuple.internalBinaryWrite(message.exchangeRates[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated merlion.oracle.v1.MissCounter miss_counters = 4; */
        for (let i = 0; i < message.missCounters.length; i++)
            MissCounter.internalBinaryWrite(message.missCounters[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated merlion.oracle.v1.AggregateExchangeRatePrevote aggregate_exchange_rate_prevotes = 5; */
        for (let i = 0; i < message.aggregateExchangeRatePrevotes.length; i++)
            AggregateExchangeRatePrevote.internalBinaryWrite(message.aggregateExchangeRatePrevotes[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated merlion.oracle.v1.AggregateExchangeRateVote aggregate_exchange_rate_votes = 6; */
        for (let i = 0; i < message.aggregateExchangeRateVotes.length; i++)
            AggregateExchangeRateVote.internalBinaryWrite(message.aggregateExchangeRateVotes[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FeederDelegation$Type extends MessageType<FeederDelegation> {
    constructor() {
        super("merlion.oracle.v1.FeederDelegation", [
            { no: 1, name: "feeder_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "validator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<FeederDelegation>): FeederDelegation {
        const message = { feederAddress: "", validatorAddress: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<FeederDelegation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FeederDelegation): FeederDelegation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string feeder_address */ 1:
                    message.feederAddress = reader.string();
                    break;
                case /* string validator_address */ 2:
                    message.validatorAddress = reader.string();
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
    internalBinaryWrite(message: FeederDelegation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string feeder_address = 1; */
        if (message.feederAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.feederAddress);
        /* string validator_address = 2; */
        if (message.validatorAddress !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.validatorAddress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.FeederDelegation
 */
export const FeederDelegation = new FeederDelegation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MissCounter$Type extends MessageType<MissCounter> {
    constructor() {
        super("merlion.oracle.v1.MissCounter", [
            { no: 1, name: "validator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "miss_counter", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value?: PartialMessage<MissCounter>): MissCounter {
        const message = { validatorAddress: "", missCounter: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MissCounter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MissCounter): MissCounter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string validator_address */ 1:
                    message.validatorAddress = reader.string();
                    break;
                case /* uint64 miss_counter */ 2:
                    message.missCounter = reader.uint64().toString();
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
    internalBinaryWrite(message: MissCounter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string validator_address = 1; */
        if (message.validatorAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.validatorAddress);
        /* uint64 miss_counter = 2; */
        if (message.missCounter !== "0")
            writer.tag(2, WireType.Varint).uint64(message.missCounter);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.oracle.v1.MissCounter
 */
export const MissCounter = new MissCounter$Type();
