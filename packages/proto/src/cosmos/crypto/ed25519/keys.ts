// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "cosmos/crypto/ed25519/keys.proto" (package "cosmos.crypto.ed25519", syntax proto3)
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
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 *
 * @generated from protobuf message cosmos.crypto.ed25519.PubKey
 */
export interface PubKey {
    /**
     * @generated from protobuf field: bytes key = 1;
     */
    key: Uint8Array;
}
/**
 * Deprecated: PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 *
 * @generated from protobuf message cosmos.crypto.ed25519.PrivKey
 */
export interface PrivKey {
    /**
     * @generated from protobuf field: bytes key = 1;
     */
    key: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class PubKey$Type extends MessageType<PubKey> {
    constructor() {
        super("cosmos.crypto.ed25519.PubKey", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "crypto/ed25519.PublicKey" } }
        ], { "gogoproto.goproto_stringer": false });
    }
    create(value?: PartialMessage<PubKey>): PubKey {
        const message = { key: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PubKey>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PubKey): PubKey {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes key */ 1:
                    message.key = reader.bytes();
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
    internalBinaryWrite(message: PubKey, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.crypto.ed25519.PubKey
 */
export const PubKey = new PubKey$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PrivKey$Type extends MessageType<PrivKey> {
    constructor() {
        super("cosmos.crypto.ed25519.PrivKey", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.casttype": "crypto/ed25519.PrivateKey" } }
        ]);
    }
    create(value?: PartialMessage<PrivKey>): PrivKey {
        const message = { key: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PrivKey>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PrivKey): PrivKey {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes key */ 1:
                    message.key = reader.bytes();
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
    internalBinaryWrite(message: PrivKey, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.crypto.ed25519.PrivKey
 */
export const PrivKey = new PrivKey$Type();
