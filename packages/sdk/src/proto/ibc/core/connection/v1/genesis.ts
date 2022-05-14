// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ibc/core/connection/v1/genesis.proto" (package "ibc.core.connection.v1", syntax proto3)
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
import { Params } from "./connection";
import { ConnectionPaths } from "./connection";
import { IdentifiedConnection } from "./connection";
/**
 * GenesisState defines the ibc connection submodule's genesis state.
 *
 * @generated from protobuf message ibc.core.connection.v1.GenesisState
 */
export interface GenesisState {
    /**
     * @generated from protobuf field: repeated ibc.core.connection.v1.IdentifiedConnection connections = 1;
     */
    connections: IdentifiedConnection[];
    /**
     * @generated from protobuf field: repeated ibc.core.connection.v1.ConnectionPaths client_connection_paths = 2;
     */
    clientConnectionPaths: ConnectionPaths[];
    /**
     * the sequence for the next generated connection identifier
     *
     * @generated from protobuf field: uint64 next_connection_sequence = 3;
     */
    nextConnectionSequence: string;
    /**
     * @generated from protobuf field: ibc.core.connection.v1.Params params = 4;
     */
    params?: Params;
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("ibc.core.connection.v1.GenesisState", [
            { no: 1, name: "connections", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IdentifiedConnection, options: { "gogoproto.nullable": false } },
            { no: 2, name: "client_connection_paths", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ConnectionPaths, options: { "gogoproto.nullable": false, "gogoproto.moretags": "yaml:\"client_connection_paths\"" } },
            { no: 3, name: "next_connection_sequence", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.moretags": "yaml:\"next_connection_sequence\"" } },
            { no: 4, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { connections: [], clientConnectionPaths: [], nextConnectionSequence: "0" };
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
                case /* repeated ibc.core.connection.v1.IdentifiedConnection connections */ 1:
                    message.connections.push(IdentifiedConnection.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ibc.core.connection.v1.ConnectionPaths client_connection_paths */ 2:
                    message.clientConnectionPaths.push(ConnectionPaths.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint64 next_connection_sequence */ 3:
                    message.nextConnectionSequence = reader.uint64().toString();
                    break;
                case /* ibc.core.connection.v1.Params params */ 4:
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
        /* repeated ibc.core.connection.v1.IdentifiedConnection connections = 1; */
        for (let i = 0; i < message.connections.length; i++)
            IdentifiedConnection.internalBinaryWrite(message.connections[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated ibc.core.connection.v1.ConnectionPaths client_connection_paths = 2; */
        for (let i = 0; i < message.clientConnectionPaths.length; i++)
            ConnectionPaths.internalBinaryWrite(message.clientConnectionPaths[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint64 next_connection_sequence = 3; */
        if (message.nextConnectionSequence !== "0")
            writer.tag(3, WireType.Varint).uint64(message.nextConnectionSequence);
        /* ibc.core.connection.v1.Params params = 4; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ibc.core.connection.v1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
