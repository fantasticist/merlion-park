// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ibc/applications/transfer/v1/tx.proto" (package "ibc.applications.transfer.v1", syntax proto3)
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
import { Height } from "../../../core/client/v1/client";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 *
 * @generated from protobuf message ibc.applications.transfer.v1.MsgTransfer
 */
export interface MsgTransfer {
    /**
     * the port on which the packet will be sent
     *
     * @generated from protobuf field: string source_port = 1;
     */
    sourcePort: string;
    /**
     * the channel by which the packet will be sent
     *
     * @generated from protobuf field: string source_channel = 2;
     */
    sourceChannel: string;
    /**
     * the tokens to be transferred
     *
     * @generated from protobuf field: cosmos.base.v1beta1.Coin token = 3;
     */
    token?: Coin;
    /**
     * the sender address
     *
     * @generated from protobuf field: string sender = 4;
     */
    sender: string;
    /**
     * the recipient address on the destination chain
     *
     * @generated from protobuf field: string receiver = 5;
     */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     *
     * @generated from protobuf field: ibc.core.client.v1.Height timeout_height = 6;
     */
    timeoutHeight?: Height;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     *
     * @generated from protobuf field: uint64 timeout_timestamp = 7;
     */
    timeoutTimestamp: string;
}
/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 *
 * @generated from protobuf message ibc.applications.transfer.v1.MsgTransferResponse
 */
export interface MsgTransferResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class MsgTransfer$Type extends MessageType<MsgTransfer> {
    constructor() {
        super("ibc.applications.transfer.v1.MsgTransfer", [
            { no: 1, name: "source_port", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"source_port\"" } },
            { no: 2, name: "source_channel", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.moretags": "yaml:\"source_channel\"" } },
            { no: 3, name: "token", kind: "message", T: () => Coin, options: { "gogoproto.nullable": false } },
            { no: 4, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "receiver", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "timeout_height", kind: "message", T: () => Height, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"timeout_height\"" } },
            { no: 7, name: "timeout_timestamp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"timeout_timestamp\"" } }
        ], { "gogoproto.goproto_getters": false, "gogoproto.equal": false });
    }
    create(value?: PartialMessage<MsgTransfer>): MsgTransfer {
        const message = { sourcePort: "", sourceChannel: "", sender: "", receiver: "", timeoutTimestamp: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgTransfer>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgTransfer): MsgTransfer {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string source_port */ 1:
                    message.sourcePort = reader.string();
                    break;
                case /* string source_channel */ 2:
                    message.sourceChannel = reader.string();
                    break;
                case /* cosmos.base.v1beta1.Coin token */ 3:
                    message.token = Coin.internalBinaryRead(reader, reader.uint32(), options, message.token);
                    break;
                case /* string sender */ 4:
                    message.sender = reader.string();
                    break;
                case /* string receiver */ 5:
                    message.receiver = reader.string();
                    break;
                case /* ibc.core.client.v1.Height timeout_height */ 6:
                    message.timeoutHeight = Height.internalBinaryRead(reader, reader.uint32(), options, message.timeoutHeight);
                    break;
                case /* uint64 timeout_timestamp */ 7:
                    message.timeoutTimestamp = reader.uint64().toString();
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
    internalBinaryWrite(message: MsgTransfer, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string source_port = 1; */
        if (message.sourcePort !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.sourcePort);
        /* string source_channel = 2; */
        if (message.sourceChannel !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.sourceChannel);
        /* cosmos.base.v1beta1.Coin token = 3; */
        if (message.token)
            Coin.internalBinaryWrite(message.token, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* string sender = 4; */
        if (message.sender !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.sender);
        /* string receiver = 5; */
        if (message.receiver !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.receiver);
        /* ibc.core.client.v1.Height timeout_height = 6; */
        if (message.timeoutHeight)
            Height.internalBinaryWrite(message.timeoutHeight, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint64 timeout_timestamp = 7; */
        if (message.timeoutTimestamp !== "0")
            writer.tag(7, WireType.Varint).uint64(message.timeoutTimestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.applications.transfer.v1.MsgTransfer
 */
export const MsgTransfer = new MsgTransfer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MsgTransferResponse$Type extends MessageType<MsgTransferResponse> {
    constructor() {
        super("ibc.applications.transfer.v1.MsgTransferResponse", []);
    }
    create(value?: PartialMessage<MsgTransferResponse>): MsgTransferResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MsgTransferResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MsgTransferResponse): MsgTransferResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: MsgTransferResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.applications.transfer.v1.MsgTransferResponse
 */
export const MsgTransferResponse = new MsgTransferResponse$Type();
/**
 * @generated ServiceType for protobuf service ibc.applications.transfer.v1.Msg
 */
export const Msg = new ServiceType("ibc.applications.transfer.v1.Msg", [
    { name: "Transfer", options: {}, I: MsgTransfer, O: MsgTransferResponse }
]);
