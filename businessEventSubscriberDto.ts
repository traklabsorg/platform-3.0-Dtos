// import { BusinessEvent } from "app/platform-3.0-Entities/businessEvent";
import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { BusinessEventDto } from "./businessEventDto";
// import { BusinessEventDto } from "./communityDto";
import { DdEntityDto } from "./ddEntitiesDto";
import { ServiceConsumerDto } from "./serviceConsumerDto";

export class BusinessEventSubscriberDto extends DtoBase{
    operationName: string;
    subscriptionDetails: string;
    eventId: BusinessEventDto;
    ddEntityId: DdEntityDto;
    serviceConsumerId: ServiceConsumerDto;
}

// const entityJson = {
//     operationName : "operationName?",
//     subscriptionDetails : "subscriptionDetails?",
//     eventId : "eventId?",
//     ddEntityId : "ddEntityId?",
//     serviceConsumerId : "serviceConsumerId?",
//   };
  
//   const Json = {
//     operationName : "operationName?",
//     subscriptionDetails : "subscriptionDetails?",
//     eventId : "eventId?",
//     ddEntityId : "ddEntityId?",
//     serviceConsumerId : "serviceConsumerId?",
//   };
  
//   const entityToJson = {
//     operationName : "operationName?",
//     subscriptionDetails : "subscriptionDetails?",
//     eventId : "eventId?",
//     ddEntityId : "ddEntityId?",
//     serviceConsumerId : "serviceConsumerId?",
//   };
  
//   const ToEntityJson= {
//     operationName : "operationName?",
//     subscriptionDetails : "subscriptionDetails?",
//     eventId : "eventId?",
//     ddEntityId : "ddEntityId?",
//     serviceConsumerId : "serviceConsumerId?",
//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.Json = Json;
//   module.exports.entityToJson = entityToJson;
//   module.exports.ToEntityJson = ToEntityJson;