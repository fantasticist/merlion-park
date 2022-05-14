// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/auth/v1beta1/genesis.proto" (package "cosmos.auth.v1beta1", syntax proto3)
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
import { Any } from "../../../google/protobuf/any";
import { Params } from "./auth";
/**
 * GenesisState defines the auth module's genesis state.
 *
 * @generated from protobuf message cosmos.auth.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * params defines all the paramaters of the module.
     *
     * @generated from protobuf field: cosmos.auth.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * accounts are the accounts present at genesis.
     *
     * @generated from protobuf field: repeated google.protobuf.Any accounts = 2;
     */
    accounts: Any[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("cosmos.auth.v1beta1.GenesisState", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } },
            { no: 2, name: "accounts", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { accounts: [] };
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
                case /* cosmos.auth.v1beta1.Params params */ 1:
                    message.params = Params.internalBinaryRead(reader, reader.uint32(), options, message.params);
                    break;
                case /* repeated google.protobuf.Any accounts */ 2:
                    message.accounts.push(Any.internalBinaryRead(reader, reader.uint32(), options));
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
        /* cosmos.auth.v1beta1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Any accounts = 2; */
        for (let i = 0; i < message.accounts.length; i++)
            Any.internalBinaryWrite(message.accounts[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.auth.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
