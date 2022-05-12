// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "cosmos/evidence/v1beta1/tx.proto" (package "cosmos.evidence.v1beta1", syntax proto3)
// tslint:disable
import { ServiceType } from '@protobuf-ts/runtime-rpc'
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import type { PartialMessage } from '@protobuf-ts/runtime'
import { reflectionMergePartial } from '@protobuf-ts/runtime'
import { MESSAGE_TYPE } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'
import { Any } from '../../../google/protobuf/any'
/**
 * MsgSubmitEvidence represents a messages that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 *
 * @generated from protobuf messages cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export interface MsgSubmitEvidence {
  /**
   * @generated from protobuf field: string submitter = 1;
   */
  submitter: string
  /**
   * @generated from protobuf field: google.protobuf.Any evidence = 2;
   */
  evidence?: Any
}
/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 *
 * @generated from protobuf messages cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export interface MsgSubmitEvidenceResponse {
  /**
   * hash defines the hash of the evidence.
   *
   * @generated from protobuf field: bytes hash = 4;
   */
  hash: Uint8Array
}
// @generated messages type with reflection information, may provide speed optimized methods
class MsgSubmitEvidence$Type extends MessageType<MsgSubmitEvidence> {
  constructor() {
    super(
      'cosmos.evidence.v1beta1.MsgSubmitEvidence',
      [
        {
          no: 1,
          name: 'submitter',
          kind: 'scalar',
          T: 9 /*ScalarType.STRING*/,
        },
        {
          no: 2,
          name: 'evidence',
          kind: 'message',
          T: () => Any,
          options: { 'cosmos_proto.accepts_interface': 'Evidence' },
        },
      ],
      { 'gogoproto.goproto_getters': false, 'gogoproto.equal': false },
    )
  }
  create(value?: PartialMessage<MsgSubmitEvidence>): MsgSubmitEvidence {
    const message = { submitter: '' }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgSubmitEvidence>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgSubmitEvidence,
  ): MsgSubmitEvidence {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string submitter */ 1:
          message.submitter = reader.string()
          break
        case /* google.protobuf.Any evidence */ 2:
          message.evidence = Any.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.evidence,
          )
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            )
          let d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: MsgSubmitEvidence,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* string submitter = 1; */
    if (message.submitter !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.submitter)
    /* google.protobuf.Any evidence = 2; */
    if (message.evidence)
      Any.internalBinaryWrite(
        message.evidence,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join()
    let u = options.writeUnknownFields
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      )
    return writer
  }
}
/**
 * @generated MessageType for protobuf messages cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export const MsgSubmitEvidence = new MsgSubmitEvidence$Type()
// @generated messages type with reflection information, may provide speed optimized methods
class MsgSubmitEvidenceResponse$Type extends MessageType<MsgSubmitEvidenceResponse> {
  constructor() {
    super('cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse', [
      { no: 4, name: 'hash', kind: 'scalar', T: 12 /*ScalarType.BYTES*/ },
    ])
  }
  create(
    value?: PartialMessage<MsgSubmitEvidenceResponse>,
  ): MsgSubmitEvidenceResponse {
    const message = { hash: new Uint8Array(0) }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<MsgSubmitEvidenceResponse>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: MsgSubmitEvidenceResponse,
  ): MsgSubmitEvidenceResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* bytes hash */ 4:
          message.hash = reader.bytes()
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            )
          let d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: MsgSubmitEvidenceResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* bytes hash = 4; */
    if (message.hash.length)
      writer.tag(4, WireType.LengthDelimited).bytes(message.hash)
    let u = options.writeUnknownFields
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      )
    return writer
  }
}
/**
 * @generated MessageType for protobuf messages cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export const MsgSubmitEvidenceResponse = new MsgSubmitEvidenceResponse$Type()
/**
 * @generated ServiceType for protobuf service cosmos.evidence.v1beta1.Msg
 */
export const Msg = new ServiceType('cosmos.evidence.v1beta1.Msg', [
  {
    name: 'SubmitEvidence',
    options: {},
    I: MsgSubmitEvidence,
    O: MsgSubmitEvidenceResponse,
  },
])
