// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/slashing/v1beta1/tx.proto" (package "cosmos.slashing.v1beta1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
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
 * MsgUnjail defines the Msg/Unjail request type
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.MsgUnjail
 */
export interface MsgUnjail {
    /**
     * @generated from protobuf field: string validator_addr = 1;
     */
    validatorAddr: string;
}
/**
 * MsgUnjailResponse defines the Msg/Unjail response type
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.MsgUnjailResponse
 */
export interface MsgUnjailResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class MsgUnjail$Type extends MessageType<MsgUnjail> {
    constructor() {
        super("cosmos.slashing.v1beta1.MsgUnjail", [
            { no: 1, name: "validator_addr", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.jsontag": "address", "gogoproto.moretags": "yaml:\"address\"" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.goproto_stringer": true });
    }
    create(value?: PartialMessage<MsgUnjail>): MsgUnjail {
        const message = { validatorAddr: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgUnjail>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgUnjail): MsgUnjail {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string validator_addr */ 1:
                    message.validatorAddr = reader.string();
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
    internalBinaryWrite(message: MsgUnjail, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string validator_addr = 1; */
        if (message.validatorAddr !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.validatorAddr);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.MsgUnjail
 */
export const MsgUnjail = new MsgUnjail$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgUnjailResponse$Type extends MessageType<MsgUnjailResponse> {
    constructor() {
        super("cosmos.slashing.v1beta1.MsgUnjailResponse", []);
    }
    create(value?: PartialMessage<MsgUnjailResponse>): MsgUnjailResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgUnjailResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgUnjailResponse): MsgUnjailResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgUnjailResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.MsgUnjailResponse
 */
export const MsgUnjailResponse = new MsgUnjailResponse$Type();
/**
 * @generated ServiceType for protobuf service cosmos.slashing.v1beta1.Msg
 */
export const Msg = new ServiceType("cosmos.slashing.v1beta1.Msg", [
    { name: "Unjail", options: {}, I: MsgUnjail, O: MsgUnjailResponse }
]);
