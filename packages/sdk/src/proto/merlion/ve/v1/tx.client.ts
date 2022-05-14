// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "merlion/ve/v1/tx.proto" (package "merlion.ve.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Msg } from "./tx";
import type { MsgWithdrawResponse } from "./tx";
import type { MsgWithdraw } from "./tx";
import type { MsgMergeResponse } from "./tx";
import type { MsgMerge } from "./tx";
import type { MsgExtendTimeResponse } from "./tx";
import type { MsgExtendTime } from "./tx";
import type { MsgDepositResponse } from "./tx";
import type { MsgDeposit } from "./tx";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { MsgCreateResponse } from "./tx";
import type { MsgCreate } from "./tx";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Msg defines the ve Msg service.
 *
 * @generated from protobuf service merlion.ve.v1.Msg
 */
export interface IMsgClient {
    /**
     * Create creates a veNFT.
     *
     * @generated from protobuf rpc: Create(merlion.ve.v1.MsgCreate) returns (merlion.ve.v1.MsgCreateResponse);
     */
    create(input: MsgCreate, options?: RpcOptions): UnaryCall<MsgCreate, MsgCreateResponse>;
    /**
     * Deposit deposits some coin amount for a veNFT.
     *
     * @generated from protobuf rpc: Deposit(merlion.ve.v1.MsgDeposit) returns (merlion.ve.v1.MsgDepositResponse);
     */
    deposit(input: MsgDeposit, options?: RpcOptions): UnaryCall<MsgDeposit, MsgDepositResponse>;
    /**
     * ExtendTime extends locking duration for a veNFT.
     *
     * @generated from protobuf rpc: ExtendTime(merlion.ve.v1.MsgExtendTime) returns (merlion.ve.v1.MsgExtendTimeResponse);
     */
    extendTime(input: MsgExtendTime, options?: RpcOptions): UnaryCall<MsgExtendTime, MsgExtendTimeResponse>;
    /**
     * Merge merges a veNFT (burn it) to another veNFT.
     *
     * @generated from protobuf rpc: Merge(merlion.ve.v1.MsgMerge) returns (merlion.ve.v1.MsgMergeResponse);
     */
    merge(input: MsgMerge, options?: RpcOptions): UnaryCall<MsgMerge, MsgMergeResponse>;
    /**
     * Withdraw withdraws all coin amount of a veNFT.
     *
     * @generated from protobuf rpc: Withdraw(merlion.ve.v1.MsgWithdraw) returns (merlion.ve.v1.MsgWithdrawResponse);
     */
    withdraw(input: MsgWithdraw, options?: RpcOptions): UnaryCall<MsgWithdraw, MsgWithdrawResponse>;
}
/**
 * Msg defines the ve Msg service.
 *
 * @generated from protobuf service merlion.ve.v1.Msg
 */
export class MsgClient implements IMsgClient, ServiceInfo {
    typeName = Msg.typeName;
    methods = Msg.methods;
    options = Msg.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Create creates a veNFT.
     *
     * @generated from protobuf rpc: Create(merlion.ve.v1.MsgCreate) returns (merlion.ve.v1.MsgCreateResponse);
     */
    create(input: MsgCreate, options?: RpcOptions): UnaryCall<MsgCreate, MsgCreateResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgCreate, MsgCreateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Deposit deposits some coin amount for a veNFT.
     *
     * @generated from protobuf rpc: Deposit(merlion.ve.v1.MsgDeposit) returns (merlion.ve.v1.MsgDepositResponse);
     */
    deposit(input: MsgDeposit, options?: RpcOptions): UnaryCall<MsgDeposit, MsgDepositResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgDeposit, MsgDepositResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * ExtendTime extends locking duration for a veNFT.
     *
     * @generated from protobuf rpc: ExtendTime(merlion.ve.v1.MsgExtendTime) returns (merlion.ve.v1.MsgExtendTimeResponse);
     */
    extendTime(input: MsgExtendTime, options?: RpcOptions): UnaryCall<MsgExtendTime, MsgExtendTimeResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgExtendTime, MsgExtendTimeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Merge merges a veNFT (burn it) to another veNFT.
     *
     * @generated from protobuf rpc: Merge(merlion.ve.v1.MsgMerge) returns (merlion.ve.v1.MsgMergeResponse);
     */
    merge(input: MsgMerge, options?: RpcOptions): UnaryCall<MsgMerge, MsgMergeResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgMerge, MsgMergeResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Withdraw withdraws all coin amount of a veNFT.
     *
     * @generated from protobuf rpc: Withdraw(merlion.ve.v1.MsgWithdraw) returns (merlion.ve.v1.MsgWithdrawResponse);
     */
    withdraw(input: MsgWithdraw, options?: RpcOptions): UnaryCall<MsgWithdraw, MsgWithdrawResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<MsgWithdraw, MsgWithdrawResponse>("unary", this._transport, method, opt, input);
    }
}
