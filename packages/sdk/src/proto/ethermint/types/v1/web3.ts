// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ethermint/types/v1/web3.proto" (package "ethermint.types.v1", syntax proto3)
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
 * @generated from protobuf message ethermint.types.v1.ExtensionOptionsWeb3Tx
 */
export interface ExtensionOptionsWeb3Tx {
    /**
     * typed data chain id used only in EIP712 Domain and should match
     * Ethereum network ID in a Web3 provider (e.g. Metamask).
     *
     * @generated from protobuf field: uint64 typed_data_chain_id = 1;
     */
    typedDataChainId: string;
    /**
     * fee payer is an account address for the fee payer. It will be validated
     * during EIP712 signature checking.
     *
     * @generated from protobuf field: string fee_payer = 2;
     */
    feePayer: string;
    /**
     * fee payer sig is a signature data from the fee paying account,
     * allows to perform fee delegation when using EIP712 Domain.
     *
     * @generated from protobuf field: bytes fee_payer_sig = 3;
     */
    feePayerSig: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class ExtensionOptionsWeb3Tx$Type extends MessageType<ExtensionOptionsWeb3Tx> {
    constructor() {
        super("ethermint.types.v1.ExtensionOptionsWeb3Tx", [
            { no: 1, name: "typed_data_chain_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, options: { "gogoproto.customname": "TypedDataChainID", "gogoproto.jsontag": "typedDataChainID,omitempty" } },
            { no: 2, name: "fee_payer", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "gogoproto.jsontag": "feePayer,omitempty" } },
            { no: 3, name: "fee_payer_sig", kind: "scalar", T: 12 /*ScalarType.BYTES*/, options: { "gogoproto.jsontag": "feePayerSig,omitempty" } }
        ], { "gogoproto.goproto_getters": false });
    }
    create(value?: PartialMessage<ExtensionOptionsWeb3Tx>): ExtensionOptionsWeb3Tx {
        const message = { typedDataChainId: "0", feePayer: "", feePayerSig: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExtensionOptionsWeb3Tx>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExtensionOptionsWeb3Tx): ExtensionOptionsWeb3Tx {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 typed_data_chain_id */ 1:
                    message.typedDataChainId = reader.uint64().toString();
                    break;
                case /* string fee_payer */ 2:
                    message.feePayer = reader.string();
                    break;
                case /* bytes fee_payer_sig */ 3:
                    message.feePayerSig = reader.bytes();
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
    internalBinaryWrite(message: ExtensionOptionsWeb3Tx, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 typed_data_chain_id = 1; */
        if (message.typedDataChainId !== "0")
            writer.tag(1, WireType.Varint).uint64(message.typedDataChainId);
        /* string fee_payer = 2; */
        if (message.feePayer !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.feePayer);
        /* bytes fee_payer_sig = 3; */
        if (message.feePayerSig.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.feePayerSig);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ethermint.types.v1.ExtensionOptionsWeb3Tx
 */
export const ExtensionOptionsWeb3Tx = new ExtensionOptionsWeb3Tx$Type();
