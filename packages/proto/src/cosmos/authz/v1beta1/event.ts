// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "cosmos/authz/v1beta1/event.proto" (package "cosmos.authz.v1beta1", syntax proto3)
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
 * EventGrant is emitted on Msg/Grant
 *
 * @generated from protobuf message cosmos.authz.v1beta1.EventGrant
 */
export interface EventGrant {
    /**
     * Msg type URL for which an autorization is granted
     *
     * @generated from protobuf field: string msg_type_url = 2;
     */
    msgTypeUrl: string;
    /**
     * Granter account address
     *
     * @generated from protobuf field: string granter = 3;
     */
    granter: string;
    /**
     * Grantee account address
     *
     * @generated from protobuf field: string grantee = 4;
     */
    grantee: string;
}
/**
 * EventRevoke is emitted on Msg/Revoke
 *
 * @generated from protobuf message cosmos.authz.v1beta1.EventRevoke
 */
export interface EventRevoke {
    /**
     * Msg type URL for which an autorization is revoked
     *
     * @generated from protobuf field: string msg_type_url = 2;
     */
    msgTypeUrl: string;
    /**
     * Granter account address
     *
     * @generated from protobuf field: string granter = 3;
     */
    granter: string;
    /**
     * Grantee account address
     *
     * @generated from protobuf field: string grantee = 4;
     */
    grantee: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class EventGrant$Type extends MessageType<EventGrant> {
    constructor() {
        super("cosmos.authz.v1beta1.EventGrant", [
            { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "granter", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "grantee", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<EventGrant>): EventGrant {
        const message = { msgTypeUrl: "", granter: "", grantee: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EventGrant>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EventGrant): EventGrant {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string msg_type_url */ 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case /* string granter */ 3:
                    message.granter = reader.string();
                    break;
                case /* string grantee */ 4:
                    message.grantee = reader.string();
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
    internalBinaryWrite(message: EventGrant, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string msg_type_url = 2; */
        if (message.msgTypeUrl !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.msgTypeUrl);
        /* string granter = 3; */
        if (message.granter !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.granter);
        /* string grantee = 4; */
        if (message.grantee !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.grantee);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.EventGrant
 */
export const EventGrant = new EventGrant$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EventRevoke$Type extends MessageType<EventRevoke> {
    constructor() {
        super("cosmos.authz.v1beta1.EventRevoke", [
            { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "granter", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "grantee", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<EventRevoke>): EventRevoke {
        const message = { msgTypeUrl: "", granter: "", grantee: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<EventRevoke>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EventRevoke): EventRevoke {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string msg_type_url */ 2:
                    message.msgTypeUrl = reader.string();
                    break;
                case /* string granter */ 3:
                    message.granter = reader.string();
                    break;
                case /* string grantee */ 4:
                    message.grantee = reader.string();
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
    internalBinaryWrite(message: EventRevoke, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string msg_type_url = 2; */
        if (message.msgTypeUrl !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.msgTypeUrl);
        /* string granter = 3; */
        if (message.granter !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.granter);
        /* string grantee = 4; */
        if (message.grantee !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.grantee);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.authz.v1beta1.EventRevoke
 */
export const EventRevoke = new EventRevoke$Type();
