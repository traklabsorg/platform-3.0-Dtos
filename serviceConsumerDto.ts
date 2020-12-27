// import { BusinessEventSubscriber } from "app/platform-3.0-Entities/businessEventSubscriber";
import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { BusinessEventSubscriberDto } from "./businessEventSubscriberDto";

export class ServiceConsumerDto extends DtoBase{
    eventName?: string;
    eventDetails?: string;
    serviceConsumerDetails?: string;
//    businessEventSubscriber: BusinessEventSubscriberDto[];
}

// const entityJson = {
//     eventName : "eventName?",
//     eventDetails : "eventDetails?",
//     serviceConsumerDetails : "serviceConsumerDetails?",
//     businessEventSubscriber : "businessEventSubscriber?",
//   };
  
//   const dtoJson = {
//     eventNameDto : "eventNameDto?",
//     eventDetailsDto : "eventDetailsDto?",
//     serviceConsumerDetailsDto : "serviceConsumerDetailsDto?",
//     businessEventSubscriberDto : "businessEventSubscriberDto?",
//   };
  
//   const entityToDtoJson = {
//     eventNameDto : "eventName?",
//     eventDetailsDto : "eventDetails?",
//     serviceConsumerDetailsDto : "serviceConsumerDetails?",
//     businessEventSubscriberDto : "businessEventSubscriber?",    
//   };
  
//   const dtoToEntityJson= {
//     eventName : "eventNameDto?",
//     eventDetails : "eventDetailsDto?",
//     serviceConsumerDetails : "serviceConsumerDetailsDto?",
//     businessEventSubscriber : "businessEventSubscriberDto?",    
//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;