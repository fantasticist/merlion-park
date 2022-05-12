// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/base/tendermint/v1beta1/query.proto" (package "cosmos.base.tendermint.v1beta1", syntax proto3)
// tslint:disable
import type { RpcTransport } from '@protobuf-ts/runtime-rpc'
import type { ServiceInfo } from '@protobuf-ts/runtime-rpc'
import { Service } from './query'
import type { GetValidatorSetByHeightResponse } from './query'
import type { GetValidatorSetByHeightRequest } from './query'
import type { GetLatestValidatorSetResponse } from './query'
import type { GetLatestValidatorSetRequest } from './query'
import type { GetBlockByHeightResponse } from './query'
import type { GetBlockByHeightRequest } from './query'
import type { GetLatestBlockResponse } from './query'
import type { GetLatestBlockRequest } from './query'
import type { GetSyncingResponse } from './query'
import type { GetSyncingRequest } from './query'
import { stackIntercept } from '@protobuf-ts/runtime-rpc'
import type { GetNodeInfoResponse } from './query'
import type { GetNodeInfoRequest } from './query'
import type { UnaryCall } from '@protobuf-ts/runtime-rpc'
import type { RpcOptions } from '@protobuf-ts/runtime-rpc'
/**
 * Service defines the gRPC querier service for tendermint queries.
 *
 * @generated from protobuf service cosmos.base.tendermint.v1beta1.Service
 */
export interface IServiceClient {
  /**
   * GetNodeInfo queries the current node info.
   *
   * @generated from protobuf rpc: GetNodeInfo(cosmos.base.tendermint.v1beta1.GetNodeInfoRequest) returns (cosmos.base.tendermint.v1beta1.GetNodeInfoResponse);
   */
  getNodeInfo(
    input: GetNodeInfoRequest,
    options?: RpcOptions,
  ): UnaryCall<GetNodeInfoRequest, GetNodeInfoResponse>
  /**
   * GetSyncing queries node syncing.
   *
   * @generated from protobuf rpc: GetSyncing(cosmos.base.tendermint.v1beta1.GetSyncingRequest) returns (cosmos.base.tendermint.v1beta1.GetSyncingResponse);
   */
  getSyncing(
    input: GetSyncingRequest,
    options?: RpcOptions,
  ): UnaryCall<GetSyncingRequest, GetSyncingResponse>
  /**
   * GetLatestBlock returns the latest block.
   *
   * @generated from protobuf rpc: GetLatestBlock(cosmos.base.tendermint.v1beta1.GetLatestBlockRequest) returns (cosmos.base.tendermint.v1beta1.GetLatestBlockResponse);
   */
  getLatestBlock(
    input: GetLatestBlockRequest,
    options?: RpcOptions,
  ): UnaryCall<GetLatestBlockRequest, GetLatestBlockResponse>
  /**
   * GetBlockByHeight queries block for given height.
   *
   * @generated from protobuf rpc: GetBlockByHeight(cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest) returns (cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse);
   */
  getBlockByHeight(
    input: GetBlockByHeightRequest,
    options?: RpcOptions,
  ): UnaryCall<GetBlockByHeightRequest, GetBlockByHeightResponse>
  /**
   * GetLatestValidatorSet queries latest validator-set.
   *
   * @generated from protobuf rpc: GetLatestValidatorSet(cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest) returns (cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse);
   */
  getLatestValidatorSet(
    input: GetLatestValidatorSetRequest,
    options?: RpcOptions,
  ): UnaryCall<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>
  /**
   * GetValidatorSetByHeight queries validator-set at a given height.
   *
   * @generated from protobuf rpc: GetValidatorSetByHeight(cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest) returns (cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse);
   */
  getValidatorSetByHeight(
    input: GetValidatorSetByHeightRequest,
    options?: RpcOptions,
  ): UnaryCall<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>
}
/**
 * Service defines the gRPC querier service for tendermint queries.
 *
 * @generated from protobuf service cosmos.base.tendermint.v1beta1.Service
 */
export class ServiceClient implements IServiceClient, ServiceInfo {
  typeName = Service.typeName
  methods = Service.methods
  options = Service.options
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * GetNodeInfo queries the current node info.
   *
   * @generated from protobuf rpc: GetNodeInfo(cosmos.base.tendermint.v1beta1.GetNodeInfoRequest) returns (cosmos.base.tendermint.v1beta1.GetNodeInfoResponse);
   */
  getNodeInfo(
    input: GetNodeInfoRequest,
    options?: RpcOptions,
  ): UnaryCall<GetNodeInfoRequest, GetNodeInfoResponse> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<GetNodeInfoRequest, GetNodeInfoResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * GetSyncing queries node syncing.
   *
   * @generated from protobuf rpc: GetSyncing(cosmos.base.tendermint.v1beta1.GetSyncingRequest) returns (cosmos.base.tendermint.v1beta1.GetSyncingResponse);
   */
  getSyncing(
    input: GetSyncingRequest,
    options?: RpcOptions,
  ): UnaryCall<GetSyncingRequest, GetSyncingResponse> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<GetSyncingRequest, GetSyncingResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * GetLatestBlock returns the latest block.
   *
   * @generated from protobuf rpc: GetLatestBlock(cosmos.base.tendermint.v1beta1.GetLatestBlockRequest) returns (cosmos.base.tendermint.v1beta1.GetLatestBlockResponse);
   */
  getLatestBlock(
    input: GetLatestBlockRequest,
    options?: RpcOptions,
  ): UnaryCall<GetLatestBlockRequest, GetLatestBlockResponse> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<GetLatestBlockRequest, GetLatestBlockResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * GetBlockByHeight queries block for given height.
   *
   * @generated from protobuf rpc: GetBlockByHeight(cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest) returns (cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse);
   */
  getBlockByHeight(
    input: GetBlockByHeightRequest,
    options?: RpcOptions,
  ): UnaryCall<GetBlockByHeightRequest, GetBlockByHeightResponse> {
    const method = this.methods[3],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<GetBlockByHeightRequest, GetBlockByHeightResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * GetLatestValidatorSet queries latest validator-set.
   *
   * @generated from protobuf rpc: GetLatestValidatorSet(cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest) returns (cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse);
   */
  getLatestValidatorSet(
    input: GetLatestValidatorSetRequest,
    options?: RpcOptions,
  ): UnaryCall<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse> {
    const method = this.methods[4],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<
      GetLatestValidatorSetRequest,
      GetLatestValidatorSetResponse
    >('unary', this._transport, method, opt, input)
  }
  /**
   * GetValidatorSetByHeight queries validator-set at a given height.
   *
   * @generated from protobuf rpc: GetValidatorSetByHeight(cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest) returns (cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse);
   */
  getValidatorSetByHeight(
    input: GetValidatorSetByHeightRequest,
    options?: RpcOptions,
  ): UnaryCall<
    GetValidatorSetByHeightRequest,
    GetValidatorSetByHeightResponse
  > {
    const method = this.methods[5],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<
      GetValidatorSetByHeightRequest,
      GetValidatorSetByHeightResponse
    >('unary', this._transport, method, opt, input)
  }
}
