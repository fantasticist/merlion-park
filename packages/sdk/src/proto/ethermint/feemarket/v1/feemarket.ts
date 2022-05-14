// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ethermint/feemarket/v1/feemarket.proto" (package "ethermint.feemarket.v1", syntax proto3)
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
 * Params defines the EVM module parameters
 *
 * @generated from protobuf message ethermint.feemarket.v1.Params
 */
export interface Params {
    /**
     * no base fee forces the EIP-1559 base fee to 0 (needed for 0 price calls)
     *
     * @generated from protobuf field: bool no_base_fee = 1;
     */
    noBaseFee: boolean;
    /**
     * base fee change denominator bounds the amount the base fee can change
     * between blocks.
     *
     * @generated from protobuf field: uint32 base_fee_change_denominator = 2;
     */
    baseFeeChangeDenominator: number;
    /**
     * elasticity multiplier bounds the maximum gas limit an EIP-1559 block may
     * have.
     *
     * @generated from protobuf field: uint32 elasticity_multiplier = 3;
     */
    elasticityMultiplier: number;
    /**
     * height at which the base fee calculation is enabled.
     *
     * @generated from protobuf field: int64 enable_height = 5;
     */
    enableHeight: string;
    /**
     * base fee for EIP-1559 blocks.
     *
     * @generated from protobuf field: string base_fee = 6;
     */
    baseFee: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
    constructor() {
        super("ethermint.feemarket.v1.Params", [
            { no: 1, name: "no_base_fee", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "base_fee_change_denominator", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "elasticity_multiplier", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "enable_height", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 6, name: "base_fee", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Int" } }
        ]);
    }
    create(value?: PartialMessage<Params>): Params {
        const message = { noBaseFee: false, baseFeeChangeDenominator: 0, elasticityMultiplier: 0, enableHeight: "0", baseFee: "" };
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
                case /* bool no_base_fee */ 1:
                    message.noBaseFee = reader.bool();
                    break;
                case /* uint32 base_fee_change_denominator */ 2:
                    message.baseFeeChangeDenominator = reader.uint32();
                    break;
                case /* uint32 elasticity_multiplier */ 3:
                    message.elasticityMultiplier = reader.uint32();
                    break;
                case /* int64 enable_height */ 5:
                    message.enableHeight = reader.int64().toString();
                    break;
                case /* string base_fee */ 6:
                    message.baseFee = reader.string();
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
        /* bool no_base_fee = 1; */
        if (message.noBaseFee !== false)
            writer.tag(1, WireType.Varint).bool(message.noBaseFee);
        /* uint32 base_fee_change_denominator = 2; */
        if (message.baseFeeChangeDenominator !== 0)
            writer.tag(2, WireType.Varint).uint32(message.baseFeeChangeDenominator);
        /* uint32 elasticity_multiplier = 3; */
        if (message.elasticityMultiplier !== 0)
            writer.tag(3, WireType.Varint).uint32(message.elasticityMultiplier);
        /* int64 enable_height = 5; */
        if (message.enableHeight !== "0")
            writer.tag(5, WireType.Varint).int64(message.enableHeight);
        /* string base_fee = 6; */
        if (message.baseFee !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.baseFee);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ethermint.feemarket.v1.Params
 */
export const Params = new Params$Type();
