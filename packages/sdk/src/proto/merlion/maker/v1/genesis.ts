// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "merlion/maker/v1/genesis.proto" (package "merlion.maker.v1", syntax proto3)
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
 * GenesisState defines the maker module's genesis state.
 *
 * @generated from protobuf message merlion.maker.v1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: merlion.maker.v1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from protobuf field: string collateral_ratio = 2;
     */
    collateralRatio: string;
}
/**
 * Params defines the parameters for the maker module.
 *
 * @generated from protobuf message merlion.maker.v1.Params
 */
export interface Params {
    /**
     * adjusting collateral step
     *
     * @generated from protobuf field: string collateral_ratio_step = 1;
     */
    collateralRatioStep: string;
    /**
     * price band for adjusting collateral ratio
     *
     * @generated from protobuf field: string collateral_ratio_price_band = 2;
     */
    collateralRatioPriceBand: string;
    /**
     * cooldown period for adjusting collateral ratio
     *
     * @generated from protobuf field: int64 collateral_ratio_cooldown_period = 3;
     */
    collateralRatioCooldownPeriod: string;
    /**
     * mint Mer price bias ratio
     *
     * @generated from protobuf field: string mint_price_bias = 4;
     */
    mintPriceBias: string;
    /**
     * burn Mer price bias ratio
     *
     * @generated from protobuf field: string burn_price_bias = 5;
     */
    burnPriceBias: string;
    /**
     * recollateralization bonus ratio
     *
     * @generated from protobuf field: string recollateralize_bonus = 6;
     */
    recollateralizeBonus: string;
    /**
     * liquidation commission fee ratio
     *
     * @generated from protobuf field: string liquidation_commission_fee = 7;
     */
    liquidationCommissionFee: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("merlion.maker.v1.GenesisState", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } },
            { no: 2, name: "collateral_ratio", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"collateral_ratio\"" } }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { collateralRatio: "" };
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
                case /* merlion.maker.v1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* string collateral_ratio */ 2:
                    message.collateralRatio = reader.string();
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
        /* merlion.maker.v1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string collateral_ratio = 2; */
        if (message.collateralRatio !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.collateralRatio);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.maker.v1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
    constructor() {
        super("merlion.maker.v1.Params", [
            { no: 1, name: "collateral_ratio_step", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"collateral_ratio_step\"" } },
            { no: 2, name: "collateral_ratio_price_band", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"collateral_ratio_price_band\"" } },
            { no: 3, name: "collateral_ratio_cooldown_period", kind: "scalar", T: 3 /*ScalarType.INT64*/, options: { "gogoproto.moretags": "yaml:\"collateral_ration_cooldown_period\"" } },
            { no: 4, name: "mint_price_bias", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"mint_price_bias\"" } },
            { no: 5, name: "burn_price_bias", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"burn_price_bias\"" } },
            { no: 6, name: "recollateralize_bonus", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"recollateralize_bonus\"" } },
            { no: 7, name: "liquidation_commission_fee", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.nullable": false, "gogoproto.customtype": "github.com/cosmos/cosmos-sdk/types.Dec", "gogoproto.moretags": "yaml:\"liquidation_commission_fee\"" } }
        ], { "gogoproto.goproto_stringer": false, "gogoproto.equal": true });
    }
    create(value?: PartialMessage<Params>): Params {
        const message = { collateralRatioStep: "", collateralRatioPriceBand: "", collateralRatioCooldownPeriod: "0", mintPriceBias: "", burnPriceBias: "", recollateralizeBonus: "", liquidationCommissionFee: "" };
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
                case /* string collateral_ratio_step */ 1:
                    message.collateralRatioStep = reader.string();
                    break;
                case /* string collateral_ratio_price_band */ 2:
                    message.collateralRatioPriceBand = reader.string();
                    break;
                case /* int64 collateral_ratio_cooldown_period */ 3:
                    message.collateralRatioCooldownPeriod = reader.int64().toString();
                    break;
                case /* string mint_price_bias */ 4:
                    message.mintPriceBias = reader.string();
                    break;
                case /* string burn_price_bias */ 5:
                    message.burnPriceBias = reader.string();
                    break;
                case /* string recollateralize_bonus */ 6:
                    message.recollateralizeBonus = reader.string();
                    break;
                case /* string liquidation_commission_fee */ 7:
                    message.liquidationCommissionFee = reader.string();
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
        /* string collateral_ratio_step = 1; */
        if (message.collateralRatioStep !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.collateralRatioStep);
        /* string collateral_ratio_price_band = 2; */
        if (message.collateralRatioPriceBand !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.collateralRatioPriceBand);
        /* int64 collateral_ratio_cooldown_period = 3; */
        if (message.collateralRatioCooldownPeriod !== "0")
            writer.tag(3, WireType.Varint).int64(message.collateralRatioCooldownPeriod);
        /* string mint_price_bias = 4; */
        if (message.mintPriceBias !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.mintPriceBias);
        /* string burn_price_bias = 5; */
        if (message.burnPriceBias !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.burnPriceBias);
        /* string recollateralize_bonus = 6; */
        if (message.recollateralizeBonus !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.recollateralizeBonus);
        /* string liquidation_commission_fee = 7; */
        if (message.liquidationCommissionFee !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.liquidationCommissionFee);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.maker.v1.Params
 */
export const Params = new Params$Type();
