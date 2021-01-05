// import { BusinessEventSubscriber } from "app/platform-3.0-Entities/businessEventSubscriber";
// import { DdEntity } from "app/platform-3.0-Entities/ddEntities";
import { DtoBase } from "./DtoBase";
import { PaymentCouponDto } from "./paymentCouponDto";
import { SubscriptionOrderDto } from "./subscriptionOrderDto";

export class PaymentDto extends DtoBase{
  paymentStatus?: string;
  paymentMethod?: string;
  paymentCurrency?: string;
  paymentAmount?: number;
  transactionDateTime?: Date;
  paymentDetails?: string;
  subscriptionOrderId?: number;
  subscriptionOrder?: SubscriptionOrderDto;
  paymentCoupons?: PaymentCouponDto[];
}

// const entityJson = {
//     eventName : "eventName?",
//     eventDetails : "eventDetails?",
//     operationName : "operationName?",
//     publicDetails : "publicDetails?",
//     ddEntityId : "ddEntityId?",
//     businessEventSubscriber : "businessEventSubscriber?"
//   };
  
//   const dtoJson = {
//     eventNameDto : "eventNameDto?",
//     eventDetailsDto : "eventDetailsDto?",
//     operationNameDto : "operationNameDto?",
//     publicDetailsDto : "publicDetailsDto?",
//     ddEntityIdDto : "ddEntityIdDto?",
//     businessEventSubscriberDto : "businessEventSubscriberDto?"
//   };
  
//   const entityToDtoJson = {
//     eventNameDto : "eventName?",
//     eventDetailsDto : "eventDetails?",
//     operationNameDto : "operationName?",
//     publicDetailsDto : "publicDetails?",
//     ddEntityIdDto : "ddEntityId?",
//     businessEventSubscriberDto : "businessEventSubscriber?"
//   };
  
//   const dtoToEntityJson= {
//     eventName : "eventNameDto?",
//     eventDetails : "eventDetailsDto?",
//     operationName : "operationNameDto?",
//     publicDetails : "publicDetailsDto?",
//     ddEntityId : "ddEntityIdDto?",
//     businessEventSubscriber : "businessEventSubscriberDto?",
//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;