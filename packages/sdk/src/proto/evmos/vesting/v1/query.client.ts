// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "evmos/vesting/v1/query.proto" (package "evmos.vesting.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from '@protobuf-ts/runtime-rpc'
import type { ServiceInfo } from '@protobuf-ts/runtime-rpc'
import { Query } from './query'
import { stackIntercept } from '@protobuf-ts/runtime-rpc'
import type { QueryBalancesResponse } from './query'
import type { QueryBalancesRequest } from './query'
import type { UnaryCall } from '@protobuf-ts/runtime-rpc'
import type { RpcOptions } from '@protobuf-ts/runtime-rpc'
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service evmos.vesting.v1.Query
 */
export interface IQueryClient {
  /**
   * Retrieves the unvested, vested and locked tokens for a vesting account
   *
   * @generated from protobuf rpc: Balances(evmos.vesting.v1.QueryBalancesRequest) returns (evmos.vesting.v1.QueryBalancesResponse);
   */
  balances(
    input: QueryBalancesRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryBalancesRequest, QueryBalancesResponse>
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service evmos.vesting.v1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
  typeName = Query.typeName
  methods = Query.methods
  options = Query.options
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Retrieves the unvested, vested and locked tokens for a vesting account
   *
   * @generated from protobuf rpc: Balances(evmos.vesting.v1.QueryBalancesRequest) returns (evmos.vesting.v1.QueryBalancesResponse);
   */
  balances(
    input: QueryBalancesRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryBalancesRequest, QueryBalancesResponse> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryBalancesRequest, QueryBalancesResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
}
