// @generated by protobuf-ts 2.6.0 with parameter long_type_string
// @generated from protobuf file "cosmos/genutil/v1beta1/genesis.proto" (package "cosmos.genutil.v1beta1", syntax proto3)
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
 * GenesisState defines the raw genesis transaction in JSON.
 *
 * @generated from protobuf message cosmos.genutil.v1beta1.GenesisState
 */
export interface GenesisState {
    /**
     * gen_txs defines the genesis transactions.
     *
     * @generated from protobuf field: repeated bytes gen_txs = 1;
     */
    genTxs: Uint8Array[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GenesisState$Type extends MessageType<GenesisState> {
    constructor() {
        super("cosmos.genutil.v1beta1.GenesisState", [
            { no: 1, name: "gen_txs", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.jsontag": "gentxs", "gogoproto.moretags": "yaml:\"gentxs\"", "gogoproto.casttype": "encoding/json.RawMessage" } }
        ]);
    }
    create(value?: PartialMessage<GenesisState>): GenesisState {
        const message = { genTxs: [] };
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
                case /* repeated bytes gen_txs */ 1:
                    message.genTxs.push(reader.bytes());
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
        /* repeated bytes gen_txs = 1; */
        for (let i = 0; i < message.genTxs.length; i++)
            writer.tag(1, WireType.LengthDelimited).bytes(message.genTxs[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.genutil.v1beta1.GenesisState
 */
export const GenesisState = new GenesisState$Type();
