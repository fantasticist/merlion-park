// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/authz/v1beta1/authz.proto" (package "cosmos.authz.v1beta1", syntax proto3)
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
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 *
 * @generated from protobuf message cosmos.authz.v1beta1.GenericAuthorization
 */
export interface GenericAuthorization {
    /**
     * Msg, identified by it's type URL, to grant unrestricted permissions to execute
     *
     * @generated from protobuf field: string msg = 1;
     */
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 *
 * @generated from protobuf message cosmos.authz.v1beta1.Grant
 */
export interface Grant {
    /**
     * @generated from protobuf field: google.protobuf.Any authorization = 1;
     */
    authorization?: Any;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expiration = 2;
     */
    expiration?: Timestamp;
}
// @generated message type with reflection information, may provide speed optimized methods
class GenericAuthorization$Type extends MessageType<GenericAuthorization> {
    constructor() {
        super("cosmos.authz.v1beta1.GenericAuthorization", [
            { no: 1, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ], { "cosmos_proto.implements_interface": "Authorization" });
    }
    create(value?: PartialMessage<GenericAuthorization>): GenericAuthorization {
        const message = { msg: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GenericAuthorization>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenericAuthorization): GenericAuthorization {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string msg */ 1:
                    message.msg = reader.string();
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
    internalBinaryWrite(message: GenericAuthorization, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string msg = 1; */
        if (message.msg !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.msg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.GenericAuthorization
 */
export const GenericAuthorization = new GenericAuthorization$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Grant$Type extends MessageType<Grant> {
    constructor() {
        super("cosmos.authz.v1beta1.Grant", [
            { no: 1, name: "authorization", kind: "message", T: () => Any, options: { "cosmos_proto.accepts_interface": "Authorization" } },
            { no: 2, name: "expiration", kind: "message", T: () => Timestamp, options: { "gogoproto.nullable": false, "gogoproto.stdtime": true } }
        ]);
    }
    create(value?: PartialMessage<Grant>): Grant {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Grant>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Grant): Grant {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Any authorization */ 1:
                    message.authorization = Any.internalBinaryRead(reader, reader.uint32(), options, message.authorization);
                    break;
                case /* google.protobuf.Timestamp expiration */ 2:
                    message.expiration = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.expiration);
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
    internalBinaryWrite(message: Grant, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.Any authorization = 1; */
        if (message.authorization)
            Any.internalBinaryWrite(message.authorization, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp expiration = 2; */
        if (message.expiration)
            Timestamp.internalBinaryWrite(message.expiration, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.Grant
 */
export const Grant = new Grant$Type();
