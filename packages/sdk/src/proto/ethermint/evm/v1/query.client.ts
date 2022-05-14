// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ethermint/evm/v1/query.proto" (package "ethermint.evm.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Query } from "./query";
import type { QueryTraceBlockResponse } from "./query";
import type { QueryTraceBlockRequest } from "./query";
import type { QueryTraceTxResponse } from "./query";
import type { QueryTraceTxRequest } from "./query";
import type { EstimateGasResponse } from "./query";
import type { MsgEthereumTxResponse } from "./tx";
import type { EthCallRequest } from "./query";
import type { QueryParamsResponse } from "./query";
import type { QueryParamsRequest } from "./query";
import type { QueryCodeResponse } from "./query";
import type { QueryCodeRequest } from "./query";
import type { QueryStorageResponse } from "./query";
import type { QueryStorageRequest } from "./query";
import type { QueryBalanceResponse } from "./query";
import type { QueryBalanceRequest } from "./query";
import type { QueryValidatorAccountResponse } from "./query";
import type { QueryValidatorAccountRequest } from "./query";
import type { QueryCosmosAccountResponse } from "./query";
import type { QueryCosmosAccountRequest } from "./query";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { QueryAccountResponse } from "./query";
import type { QueryAccountRequest } from "./query";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service ethermint.evm.v1.Query
 */
export interface IQueryClient {
    /**
     * Account queries an Ethereum account.
     *
     * @generated from protobuf rpc: Account(ethermint.evm.v1.QueryAccountRequest) returns (ethermint.evm.v1.QueryAccountResponse);
     */
    account(input: QueryAccountRequest, options?: RpcOptions): UnaryCall<QueryAccountRequest, QueryAccountResponse>;
    /**
     * CosmosAccount queries an Ethereum account's Cosmos Address.
     *
     * @generated from protobuf rpc: CosmosAccount(ethermint.evm.v1.QueryCosmosAccountRequest) returns (ethermint.evm.v1.QueryCosmosAccountResponse);
     */
    cosmosAccount(input: QueryCosmosAccountRequest, options?: RpcOptions): UnaryCall<QueryCosmosAccountRequest, QueryCosmosAccountResponse>;
    /**
     * ValidatorAccount queries an Ethereum account's from a validator consensus
     * Address.
     *
     * @generated from protobuf rpc: ValidatorAccount(ethermint.evm.v1.QueryValidatorAccountRequest) returns (ethermint.evm.v1.QueryValidatorAccountResponse);
     */
    validatorAccount(input: QueryValidatorAccountRequest, options?: RpcOptions): UnaryCall<QueryValidatorAccountRequest, QueryValidatorAccountResponse>;
    /**
     * Balance queries the balance of a the EVM denomination for a single
     * EthAccount.
     *
     * @generated from protobuf rpc: Balance(ethermint.evm.v1.QueryBalanceRequest) returns (ethermint.evm.v1.QueryBalanceResponse);
     */
    balance(input: QueryBalanceRequest, options?: RpcOptions): UnaryCall<QueryBalanceRequest, QueryBalanceResponse>;
    /**
     * Storage queries the balance of all coins for a single account.
     *
     * @generated from protobuf rpc: Storage(ethermint.evm.v1.QueryStorageRequest) returns (ethermint.evm.v1.QueryStorageResponse);
     */
    storage(input: QueryStorageRequest, options?: RpcOptions): UnaryCall<QueryStorageRequest, QueryStorageResponse>;
    /**
     * Code queries the balance of all coins for a single account.
     *
     * @generated from protobuf rpc: Code(ethermint.evm.v1.QueryCodeRequest) returns (ethermint.evm.v1.QueryCodeResponse);
     */
    code(input: QueryCodeRequest, options?: RpcOptions): UnaryCall<QueryCodeRequest, QueryCodeResponse>;
    /**
     * Params queries the parameters of x/evm module.
     *
     * @generated from protobuf rpc: Params(ethermint.evm.v1.QueryParamsRequest) returns (ethermint.evm.v1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse>;
    /**
     * EthCall implements the `eth_call` rpc api
     *
     * @generated from protobuf rpc: EthCall(ethermint.evm.v1.EthCallRequest) returns (ethermint.evm.v1.MsgEthereumTxResponse);
     */
    ethCall(input: EthCallRequest, options?: RpcOptions): UnaryCall<EthCallRequest, MsgEthereumTxResponse>;
    /**
     * EstimateGas implements the `eth_estimateGas` rpc api
     *
     * @generated from protobuf rpc: EstimateGas(ethermint.evm.v1.EthCallRequest) returns (ethermint.evm.v1.EstimateGasResponse);
     */
    estimateGas(input: EthCallRequest, options?: RpcOptions): UnaryCall<EthCallRequest, EstimateGasResponse>;
    /**
     * TraceTx implements the `debug_traceTransaction` rpc api
     *
     * @generated from protobuf rpc: TraceTx(ethermint.evm.v1.QueryTraceTxRequest) returns (ethermint.evm.v1.QueryTraceTxResponse);
     */
    traceTx(input: QueryTraceTxRequest, options?: RpcOptions): UnaryCall<QueryTraceTxRequest, QueryTraceTxResponse>;
    /**
     * TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api
     *
     * @generated from protobuf rpc: TraceBlock(ethermint.evm.v1.QueryTraceBlockRequest) returns (ethermint.evm.v1.QueryTraceBlockResponse);
     */
    traceBlock(input: QueryTraceBlockRequest, options?: RpcOptions): UnaryCall<QueryTraceBlockRequest, QueryTraceBlockResponse>;
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service ethermint.evm.v1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
    typeName = Query.typeName;
    methods = Query.methods;
    options = Query.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Account queries an Ethereum account.
     *
     * @generated from protobuf rpc: Account(ethermint.evm.v1.QueryAccountRequest) returns (ethermint.evm.v1.QueryAccountResponse);
     */
    account(input: QueryAccountRequest, options?: RpcOptions): UnaryCall<QueryAccountRequest, QueryAccountResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryAccountRequest, QueryAccountResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * CosmosAccount queries an Ethereum account's Cosmos Address.
     *
     * @generated from protobuf rpc: CosmosAccount(ethermint.evm.v1.QueryCosmosAccountRequest) returns (ethermint.evm.v1.QueryCosmosAccountResponse);
     */
    cosmosAccount(input: QueryCosmosAccountRequest, options?: RpcOptions): UnaryCall<QueryCosmosAccountRequest, QueryCosmosAccountResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryCosmosAccountRequest, QueryCosmosAccountResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ValidatorAccount queries an Ethereum account's from a validator consensus
     * Address.
     *
     * @generated from protobuf rpc: ValidatorAccount(ethermint.evm.v1.QueryValidatorAccountRequest) returns (ethermint.evm.v1.QueryValidatorAccountResponse);
     */
    validatorAccount(input: QueryValidatorAccountRequest, options?: RpcOptions): UnaryCall<QueryValidatorAccountRequest, QueryValidatorAccountResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryValidatorAccountRequest, QueryValidatorAccountResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Balance queries the balance of a the EVM denomination for a single
     * EthAccount.
     *
     * @generated from protobuf rpc: Balance(ethermint.evm.v1.QueryBalanceRequest) returns (ethermint.evm.v1.QueryBalanceResponse);
     */
    balance(input: QueryBalanceRequest, options?: RpcOptions): UnaryCall<QueryBalanceRequest, QueryBalanceResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryBalanceRequest, QueryBalanceResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Storage queries the balance of all coins for a single account.
     *
     * @generated from protobuf rpc: Storage(ethermint.evm.v1.QueryStorageRequest) returns (ethermint.evm.v1.QueryStorageResponse);
     */
    storage(input: QueryStorageRequest, options?: RpcOptions): UnaryCall<QueryStorageRequest, QueryStorageResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryStorageRequest, QueryStorageResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Code queries the balance of all coins for a single account.
     *
     * @generated from protobuf rpc: Code(ethermint.evm.v1.QueryCodeRequest) returns (ethermint.evm.v1.QueryCodeResponse);
     */
    code(input: QueryCodeRequest, options?: RpcOptions): UnaryCall<QueryCodeRequest, QueryCodeResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryCodeRequest, QueryCodeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Params queries the parameters of x/evm module.
     *
     * @generated from protobuf rpc: Params(ethermint.evm.v1.QueryParamsRequest) returns (ethermint.evm.v1.QueryParamsResponse);
     */
    params(input: QueryParamsRequest, options?: RpcOptions): UnaryCall<QueryParamsRequest, QueryParamsResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryParamsRequest, QueryParamsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * EthCall implements the `eth_call` rpc api
     *
     * @generated from protobuf rpc: EthCall(ethermint.evm.v1.EthCallRequest) returns (ethermint.evm.v1.MsgEthereumTxResponse);
     */
    ethCall(input: EthCallRequest, options?: RpcOptions): UnaryCall<EthCallRequest, MsgEthereumTxResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<EthCallRequest, MsgEthereumTxResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * EstimateGas implements the `eth_estimateGas` rpc api
     *
     * @generated from protobuf rpc: EstimateGas(ethermint.evm.v1.EthCallRequest) returns (ethermint.evm.v1.EstimateGasResponse);
     */
    estimateGas(input: EthCallRequest, options?: RpcOptions): UnaryCall<EthCallRequest, EstimateGasResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<EthCallRequest, EstimateGasResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * TraceTx implements the `debug_traceTransaction` rpc api
     *
     * @generated from protobuf rpc: TraceTx(ethermint.evm.v1.QueryTraceTxRequest) returns (ethermint.evm.v1.QueryTraceTxResponse);
     */
    traceTx(input: QueryTraceTxRequest, options?: RpcOptions): UnaryCall<QueryTraceTxRequest, QueryTraceTxResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryTraceTxRequest, QueryTraceTxResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * TraceBlock implements the `debug_traceBlockByNumber` and `debug_traceBlockByHash` rpc api
     *
     * @generated from protobuf rpc: TraceBlock(ethermint.evm.v1.QueryTraceBlockRequest) returns (ethermint.evm.v1.QueryTraceBlockResponse);
     */
    traceBlock(input: QueryTraceBlockRequest, options?: RpcOptions): UnaryCall<QueryTraceBlockRequest, QueryTraceBlockResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<QueryTraceBlockRequest, QueryTraceBlockResponse>("unary", this._transport, method, opt, input);
    }
}
