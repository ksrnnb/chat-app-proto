import * as jspb from 'google-protobuf'



export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): Message;

  getSenderId(): string;
  setSenderId(value: string): Message;

  getReceiverId(): string;
  setReceiverId(value: string): Message;

  getMessage(): string;
  setMessage(value: string): Message;

  getSentAt(): string;
  setSentAt(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    senderId: string,
    receiverId: string,
    message: string,
    sentAt: string,
  }
}

export class CreateMessageRequest extends jspb.Message {
  getMessage(): Message | undefined;
  setMessage(value?: Message): CreateMessageRequest;
  hasMessage(): boolean;
  clearMessage(): CreateMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageRequest): CreateMessageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageRequest;
  static deserializeBinaryFromReader(message: CreateMessageRequest, reader: jspb.BinaryReader): CreateMessageRequest;
}

export namespace CreateMessageRequest {
  export type AsObject = {
    message?: Message.AsObject,
  }
}

export class CreateMessageResponse extends jspb.Message {
  getMessage(): Message | undefined;
  setMessage(value?: Message): CreateMessageResponse;
  hasMessage(): boolean;
  clearMessage(): CreateMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageResponse): CreateMessageResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageResponse;
  static deserializeBinaryFromReader(message: CreateMessageResponse, reader: jspb.BinaryReader): CreateMessageResponse;
}

export namespace CreateMessageResponse {
  export type AsObject = {
    message?: Message.AsObject,
  }
}

