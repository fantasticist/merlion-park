// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/slashing/v1beta1/query.proto" (package "cosmos.slashing.v1beta1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { PageResponse } from "../../base/query/v1beta1/pagination";
import { PageRequest } from "../../base/query/v1beta1/pagination";
import { ValidatorSigningInfo } from "./slashing";
import { Params } from "./slashing";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
    /**
     * @generated from protobuf field: cosmos.slashing.v1beta1.Params params = 1;
     */
    params?: Params;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export interface QuerySigningInfoRequest {
    /**
     * cons_address is the address to query signing info of
     *
     * @generated from protobuf field: string cons_address = 1;
     */
    consAddress: string;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export interface QuerySigningInfoResponse {
    /**
     * val_signing_info is the signing info of requested val cons address
     *
     * @generated from protobuf field: cosmos.slashing.v1beta1.ValidatorSigningInfo val_signing_info = 1;
     */
    valSigningInfo?: ValidatorSigningInfo;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export interface QuerySigningInfosRequest {
    /**
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 *
 * @generated from protobuf message cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export interface QuerySigningInfosResponse {
    /**
     * info is the signing info of all validators
     *
     * @generated from protobuf field: repeated cosmos.slashing.v1beta1.ValidatorSigningInfo info = 1;
     */
    info: ValidatorSigningInfo[];
    /**
     * @generated from protobuf field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
}
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsRequest$Type extends MessageType<QueryParamsRequest> {
    constructor() {
        super("cosmos.slashing.v1beta1.QueryParamsRequest", []);
    }
    create(value?: PartialMessage<QueryParamsRequest>): QueryParamsRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsRequest): QueryParamsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: QueryParamsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = new QueryParamsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QueryParamsResponse$Type extends MessageType<QueryParamsResponse> {
    constructor() {
        super("cosmos.slashing.v1beta1.QueryParamsResponse", [
            { no: 1, name: "params", kind: "message", T: () => Params, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<QueryParamsResponse>): QueryParamsResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QueryParamsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QueryParamsResponse): QueryParamsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.slashing.v1beta1.Params params */ 1:
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
    internalBinaryWrite(message: QueryParamsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* cosmos.slashing.v1beta1.Params params = 1; */
        if (message.params)
            Params.internalBinaryWrite(message.params, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = new QueryParamsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuerySigningInfoRequest$Type extends MessageType<QuerySigningInfoRequest> {
    constructor() {
        super("cosmos.slashing.v1beta1.QuerySigningInfoRequest", [
            { no: 1, name: "cons_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<QuerySigningInfoRequest>): QuerySigningInfoRequest {
        const message = { consAddress: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuerySigningInfoRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuerySigningInfoRequest): QuerySigningInfoRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string cons_address */ 1:
                    message.consAddress = reader.string();
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
    internalBinaryWrite(message: QuerySigningInfoRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string cons_address = 1; */
        if (message.consAddress !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.consAddress);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export const QuerySigningInfoRequest = new QuerySigningInfoRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuerySigningInfoResponse$Type extends MessageType<QuerySigningInfoResponse> {
    constructor() {
        super("cosmos.slashing.v1beta1.QuerySigningInfoResponse", [
            { no: 1, name: "val_signing_info", kind: "message", T: () => ValidatorSigningInfo, options: { "gogoproto.nullable": false } }
        ]);
    }
    create(value?: PartialMessage<QuerySigningInfoResponse>): QuerySigningInfoResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuerySigningInfoResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuerySigningInfoResponse): QuerySigningInfoResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.slashing.v1beta1.ValidatorSigningInfo val_signing_info */ 1:
                    message.valSigningInfo = ValidatorSigningInfo.internalBinaryRead(reader, reader.uint32(), options, message.valSigningInfo);
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
    internalBinaryWrite(message: QuerySigningInfoResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* cosmos.slashing.v1beta1.ValidatorSigningInfo val_signing_info = 1; */
        if (message.valSigningInfo)
            ValidatorSigningInfo.internalBinaryWrite(message.valSigningInfo, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export const QuerySigningInfoResponse = new QuerySigningInfoResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuerySigningInfosRequest$Type extends MessageType<QuerySigningInfosRequest> {
    constructor() {
        super("cosmos.slashing.v1beta1.QuerySigningInfosRequest", [
            { no: 1, name: "pagination", kind: "message", T: () => PageRequest }
        ]);
    }
    create(value?: PartialMessage<QuerySigningInfosRequest>): QuerySigningInfosRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuerySigningInfosRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuerySigningInfosRequest): QuerySigningInfosRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* cosmos.base.query.v1beta1.PageRequest pagination */ 1:
                    message.pagination = PageRequest.internalBinaryRead(reader, reader.uint32(), options, message.pagination);
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
    internalBinaryWrite(message: QuerySigningInfosRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* cosmos.base.query.v1beta1.PageRequest pagination = 1; */
        if (message.pagination)
            PageRequest.internalBinaryWrite(message.pagination, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export const QuerySigningInfosRequest = new QuerySigningInfosRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class QuerySigningInfosResponse$Type extends MessageType<QuerySigningInfosResponse> {
    constructor() {
        super("cosmos.slashing.v1beta1.QuerySigningInfosResponse", [
            { no: 1, name: "info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ValidatorSigningInfo, options: { "gogoproto.nullable": false } },
            { no: 2, name: "pagination", kind: "message", T: () => PageResponse }
        ]);
    }
    create(value?: PartialMessage<QuerySigningInfosResponse>): QuerySigningInfosResponse {
        const message = { info: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<QuerySigningInfosResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: QuerySigningInfosResponse): QuerySigningInfosResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated cosmos.slashing.v1beta1.ValidatorSigningInfo info */ 1:
                    message.info.push(ValidatorSigningInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* cosmos.base.query.v1beta1.PageResponse pagination */ 2:
                    message.pagination = PageResponse.internalBinaryRead(reader, reader.uint32(), options, message.pagination);
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
    internalBinaryWrite(message: QuerySigningInfosResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated cosmos.slashing.v1beta1.ValidatorSigningInfo info = 1; */
        for (let i = 0; i < message.info.length; i++)
            ValidatorSigningInfo.internalBinaryWrite(message.info[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* cosmos.base.query.v1beta1.PageResponse pagination = 2; */
        if (message.pagination)
            PageResponse.internalBinaryWrite(message.pagination, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export const QuerySigningInfosResponse = new QuerySigningInfosResponse$Type();
/**
 * @generated ServiceType for protobuf service cosmos.slashing.v1beta1.Query
 */
export const Query = new ServiceType("cosmos.slashing.v1beta1.Query", [
    { name: "Params", options: { "google.api.http": { get: "/cosmos/slashing/v1beta1/params" } }, I: QueryParamsRequest, O: QueryParamsResponse },
    { name: "SigningInfo", options: { "google.api.http": { get: "/cosmos/slashing/v1beta1/signing_infos/{cons_address}" } }, I: QuerySigningInfoRequest, O: QuerySigningInfoResponse },
    { name: "SigningInfos", options: { "google.api.http": { get: "/cosmos/slashing/v1beta1/signing_infos" } }, I: QuerySigningInfosRequest, O: QuerySigningInfosResponse }
]);
