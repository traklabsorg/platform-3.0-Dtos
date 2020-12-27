import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { PaymentCouponDto } from "./paymentCouponDto";

export class CouponDto extends DtoBase{
  couponCode?: string;
  validTill?: Date;
  usageCount?: number;
  description?: string;
  usageLimit?: number;
  couponType?: string;
  isActive?: boolean;
  couponDetails?: string;
//  paymentCoupons: PaymentCouponDto[];
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