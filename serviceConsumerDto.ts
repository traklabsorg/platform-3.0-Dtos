// import { BusinessEventSubscriber } from "app/platform-3.0-Entities/businessEventSubscriber";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { BusinessEventSubscriberDto } from "./businessEventSubscriberDto";

export class ServiceConsumerDto extends DtoBase{
    serviceConsumerName?: string;
    serviceConsumerType?: string;
    serviceConsumerDetails?: string;
    businessEventSubscribers?: BusinessEventSubscriberDto[];
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