// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/mint/v1beta1/mint.proto" (package "cosmos.mint.v1beta1", syntax proto3)
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
 * Minter represents the minting state.
 *
 * @generated from protobuf message cosmos.mint.v1beta1.Minter
 */
export interface Minter {
    /**
     * current annual inflation rate
     *
     * @generated from protobuf field: string inflation = 1;
     */
    inflation: string;
    /**
     * current annual expected provisions
     *
     * @generated from protobuf field: string annual_provisions = 2;
     */
    annualProvisions: string;
}
/**
 * Params holds parameters for the mint module.
 *
 * @generated from protobuf message cosmos.mint.v1beta1.Params
 */
export interface Params {
    /**
     * type of coin to mint
     *
     * @generated from protobuf field: string mint_denom = 1;
     */
    mintDenom: string;
    /**
     * maximum annual change in inflation rate
     *
     * @generated from protobuf field: string inflation_rate_change = 2;
     */
    inflationRateChange: string;
    /**
     * maximum inflation rate
     *
     * @generated from protobuf field: string inflation_max = 3;
     */
    inflationMax: string;
    /**
     * minimum inflation rate
     *
     * @generated from protobuf field: string inflation_min = 4;
     */
    inflationMin: string;
    /**
     * goal of percent bonded atoms
     *
     * @generated from protobuf field: string goal_bonded = 5;
     */
    goalBonded: string;
    /**
     * expected blocks per year
     *
     * @generated from protobuf field: uint64 blocks_per_year = 6;
     */
    blocksPerYear: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Minter$Type extends MessageType<Minter> {
    constructor() {
        super("cosmos.mint.v1beta1.Minter", [
            { no: 1, name: "inflation", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec" } },
            { no: 2, name: "annual_provisions", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"annual_provisions\"" } }
        ]);
    }
    create(value?: PartialMessage<Minter>): Minter {
        const message = { inflation: "", annualProvisions: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Minter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Minter): Minter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string inflation */ 1:
                    message.inflation = reader.string();
                    break;
                case /* string annual_provisions */ 2:
                    message.annualProvisions = reader.string();
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
    internalBinaryWrite(message: Minter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string inflation = 1; */
        if (message.inflation !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.inflation);
        /* string annual_provisions = 2; */
        if (message.annualProvisions !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.annualProvisions);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.mint.v1beta1.Minter
 */
export const Minter = new Minter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
    constructor() {
        super("cosmos.mint.v1beta1.Params", [
            { no: 1, name: "mint_denom", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "inflation_rate_change", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"inflation_rate_change\"" } },
            { no: 3, name: "inflation_max", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"inflation_max\"" } },
            { no: 4, name: "inflation_min", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"inflation_min\"" } },
            { no: 5, name: "goal_bonded", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"goal_bonded\"" } },
            { no: 6, name: "blocks_per_year", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"blocks_per_year\"" } }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value?: PartialMessage<Params>): Params {
        const message = { mintDenom: "", inflationRateChange: "", inflationMax: "", inflationMin: "", goalBonded: "", blocksPerYear: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Params>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string mint_denom */ 1:
                    message.mintDenom = reader.string();
                    break;
                case /* string inflation_rate_change */ 2:
                    message.inflationRateChange = reader.string();
                    break;
                case /* string inflation_max */ 3:
                    message.inflationMax = reader.string();
                    break;
                case /* string inflation_min */ 4:
                    message.inflationMin = reader.string();
                    break;
                case /* string goal_bonded */ 5:
                    message.goalBonded = reader.string();
                    break;
                case /* uint64 blocks_per_year */ 6:
                    message.blocksPerYear = reader.uint64().toString();
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
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string mint_denom = 1; */
        if (message.mintDenom !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.mintDenom);
        /* string inflation_rate_change = 2; */
        if (message.inflationRateChange !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.inflationRateChange);
        /* string inflation_max = 3; */
        if (message.inflationMax !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.inflationMax);
        /* string inflation_min = 4; */
        if (message.inflationMin !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.inflationMin);
        /* string goal_bonded = 5; */
        if (message.goalBonded !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.goalBonded);
        /* uint64 blocks_per_year = 6; */
        if (message.blocksPerYear !== "0")
            writer.tag(6, WireType.Varint).uint64(message.blocksPerYear);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.mint.v1beta1.Params
 */
export const Params = new Params$Type();
