// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "evmos/incentives/v1/query.proto" (package "evmos.incentives.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from '@protobuf-ts/runtime-rpc'
import type { ServiceInfo } from '@protobuf-ts/runtime-rpc'
import { Query } from './query'
import type { QueryParamsResponse } from './query'
import type { QueryParamsRequest } from './query'
import type { QueryAllocationMeterResponse } from './query'
import type { QueryAllocationMeterRequest } from './query'
import type { QueryAllocationMetersResponse } from './query'
import type { QueryAllocationMetersRequest } from './query'
import type { QueryGasMeterResponse } from './query'
import type { QueryGasMeterRequest } from './query'
import type { QueryGasMetersResponse } from './query'
import type { QueryGasMetersRequest } from './query'
import type { QueryIncentiveResponse } from './query'
import type { QueryIncentiveRequest } from './query'
import { stackIntercept } from '@protobuf-ts/runtime-rpc'
import type { QueryIncentivesResponse } from './query'
import type { QueryIncentivesRequest } from './query'
import type { UnaryCall } from '@protobuf-ts/runtime-rpc'
import type { RpcOptions } from '@protobuf-ts/runtime-rpc'
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service evmos.incentives.v1.Query
 */
export interface IQueryClient {
  /**
   * Incentives retrieves registered incentives
   *
   * @generated from protobuf rpc: Incentives(evmos.incentives.v1.QueryIncentivesRequest) returns (evmos.incentives.v1.QueryIncentivesResponse);
   */
  incentives(
    input: QueryIncentivesRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryIncentivesRequest, QueryIncentivesResponse>
  /**
   * Incentive retrieves a registered incentive
   *
   * @generated from protobuf rpc: Incentive(evmos.incentives.v1.QueryIncentiveRequest) returns (evmos.incentives.v1.QueryIncentiveResponse);
   */
  incentive(
    input: QueryIncentiveRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryIncentiveRequest, QueryIncentiveResponse>
  /**
   * GasMeters retrieves active gas meters for a given contract
   *
   * @generated from protobuf rpc: GasMeters(evmos.incentives.v1.QueryGasMetersRequest) returns (evmos.incentives.v1.QueryGasMetersResponse);
   */
  gasMeters(
    input: QueryGasMetersRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryGasMetersRequest, QueryGasMetersResponse>
  /**
   * GasMeter Retrieves a active gas meter
   *
   * @generated from protobuf rpc: GasMeter(evmos.incentives.v1.QueryGasMeterRequest) returns (evmos.incentives.v1.QueryGasMeterResponse);
   */
  gasMeter(
    input: QueryGasMeterRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryGasMeterRequest, QueryGasMeterResponse>
  /**
   * AllocationMeters retrieves active allocation meters for a given
   * denomination
   *
   * @generated from protobuf rpc: AllocationMeters(evmos.incentives.v1.QueryAllocationMetersRequest) returns (evmos.incentives.v1.QueryAllocationMetersResponse);
   */
  allocationMeters(
    input: QueryAllocationMetersRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryAllocationMetersRequest, QueryAllocationMetersResponse>
  /**
   * AllocationMeter Retrieves a active gas meter
   *
   * @generated from protobuf rpc: AllocationMeter(evmos.incentives.v1.QueryAllocationMeterRequest) returns (evmos.incentives.v1.QueryAllocationMeterResponse);
   */
  allocationMeter(
    input: QueryAllocationMeterRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryAllocationMeterRequest, QueryAllocationMeterResponse>
  /**
   * Params retrieves the incentives module params
   *
   * @generated from protobuf rpc: Params(evmos.incentives.v1.QueryParamsRequest) returns (evmos.incentives.v1.QueryParamsResponse);
   */
  params(
    input: QueryParamsRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryParamsRequest, QueryParamsResponse>
}
/**
 * Query defines the gRPC querier service.
 *
 * @generated from protobuf service evmos.incentives.v1.Query
 */
export class QueryClient implements IQueryClient, ServiceInfo {
  typeName = Query.typeName
  methods = Query.methods
  options = Query.options
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Incentives retrieves registered incentives
   *
   * @generated from protobuf rpc: Incentives(evmos.incentives.v1.QueryIncentivesRequest) returns (evmos.incentives.v1.QueryIncentivesResponse);
   */
  incentives(
    input: QueryIncentivesRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryIncentivesRequest, QueryIncentivesResponse> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryIncentivesRequest, QueryIncentivesResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * Incentive retrieves a registered incentive
   *
   * @generated from protobuf rpc: Incentive(evmos.incentives.v1.QueryIncentiveRequest) returns (evmos.incentives.v1.QueryIncentiveResponse);
   */
  incentive(
    input: QueryIncentiveRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryIncentiveRequest, QueryIncentiveResponse> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryIncentiveRequest, QueryIncentiveResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * GasMeters retrieves active gas meters for a given contract
   *
   * @generated from protobuf rpc: GasMeters(evmos.incentives.v1.QueryGasMetersRequest) returns (evmos.incentives.v1.QueryGasMetersResponse);
   */
  gasMeters(
    input: QueryGasMetersRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryGasMetersRequest, QueryGasMetersResponse> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryGasMetersRequest, QueryGasMetersResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * GasMeter Retrieves a active gas meter
   *
   * @generated from protobuf rpc: GasMeter(evmos.incentives.v1.QueryGasMeterRequest) returns (evmos.incentives.v1.QueryGasMeterResponse);
   */
  gasMeter(
    input: QueryGasMeterRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryGasMeterRequest, QueryGasMeterResponse> {
    const method = this.methods[3],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryGasMeterRequest, QueryGasMeterResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
  /**
   * AllocationMeters retrieves active allocation meters for a given
   * denomination
   *
   * @generated from protobuf rpc: AllocationMeters(evmos.incentives.v1.QueryAllocationMetersRequest) returns (evmos.incentives.v1.QueryAllocationMetersResponse);
   */
  allocationMeters(
    input: QueryAllocationMetersRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryAllocationMetersRequest, QueryAllocationMetersResponse> {
    const method = this.methods[4],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<
      QueryAllocationMetersRequest,
      QueryAllocationMetersResponse
    >('unary', this._transport, method, opt, input)
  }
  /**
   * AllocationMeter Retrieves a active gas meter
   *
   * @generated from protobuf rpc: AllocationMeter(evmos.incentives.v1.QueryAllocationMeterRequest) returns (evmos.incentives.v1.QueryAllocationMeterResponse);
   */
  allocationMeter(
    input: QueryAllocationMeterRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryAllocationMeterRequest, QueryAllocationMeterResponse> {
    const method = this.methods[5],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<
      QueryAllocationMeterRequest,
      QueryAllocationMeterResponse
    >('unary', this._transport, method, opt, input)
  }
  /**
   * Params retrieves the incentives module params
   *
   * @generated from protobuf rpc: Params(evmos.incentives.v1.QueryParamsRequest) returns (evmos.incentives.v1.QueryParamsResponse);
   */
  params(
    input: QueryParamsRequest,
    options?: RpcOptions,
  ): UnaryCall<QueryParamsRequest, QueryParamsResponse> {
    const method = this.methods[6],
      opt = this._transport.mergeOptions(options)
    return stackIntercept<QueryParamsRequest, QueryParamsResponse>(
      'unary',
      this._transport,
      method,
      opt,
      input,
    )
  }
}
