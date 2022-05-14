// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "merlion/gauge/v1/genesis.proto" (package "merlion.gauge.v1", syntax proto3)
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
 * GenesisState defines the gauge module's genesis state.
 *
 * @generated from protobuf message merlion.gauge.v1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: merlion.gauge.v1.Params params = 1;
     */
    params?: Params;
}
/**
 * Params defines the parameters for the module.
 *
 * @generated from protobuf message merlion.gauge.v1.Params
 */
export interface Params {
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("merlion.gauge.v1.GenesisState", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = {};
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
                case /* merlion.gauge.v1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
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
        /* merlion.gauge.v1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.gauge.v1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
    constructor() {
        super("merlion.gauge.v1.Params", [], { "gogoproto.goproto_stringer": false });
    }
    create(value?: PartialMessage<Params>): Params {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Params>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Params): Params {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Params, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message merlion.gauge.v1.Params
 */
export const Params = new Params$Type();
