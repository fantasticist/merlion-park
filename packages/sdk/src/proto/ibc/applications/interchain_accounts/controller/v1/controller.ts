// @ts-nocheck
// @generated by protobuf-ts 2.5.0 with parameter long_type_string
// @generated from protobuf file "ibc/applications/interchain_accounts/controller/v1/controller.proto" (package "ibc.applications.interchain_accounts.controller.v1", syntax proto3)
// tslint:disable
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
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 *
 * @generated from protobuf messages ibc.applications.interchain_accounts.controller.v1.Params
 */
export interface Params {
  /**
   * controller_enabled enables or disables the controller submodule.
   *
   * @generated from protobuf field: bool controller_enabled = 1;
   */
  controllerEnabled: boolean
}
// @generated messages type with reflection information, may provide speed optimized methods
class Params$Type extends MessageType<Params> {
  constructor() {
    super('ibc.applications.interchain_accounts.controller.v1.Params', [
      {
        no: 1,
        name: 'controller_enabled',
        kind: 'scalar',
        T: 8 /*ScalarType.BOOL*/,
        options: { 'gogoproto.moretags': 'yaml:"controller_enabled"' },
      },
    ])
  }
  create(value?: PartialMessage<Params>): Params {
    const message = { controllerEnabled: false }
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    })
    if (value !== undefined)
      reflectionMergePartial<Params>(this, message, value)
    return message
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Params,
  ): Params {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* bool controller_enabled */ 1:
          message.controllerEnabled = reader.bool()
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
    message: Params,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* bool controller_enabled = 1; */
    if (message.controllerEnabled !== false)
      writer.tag(1, WireType.Varint).bool(message.controllerEnabled)
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
 * @generated MessageType for protobuf messages ibc.applications.interchain_accounts.controller.v1.Params
 */
export const Params = new Params$Type()
