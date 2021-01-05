
import { DtoBase } from "./DtoBase";
import { BusinessEventSubscriberDto } from "./businessEventSubscriberDto";
import { DdEntityDto } from "./ddEntitiesDto";
// import { DtoBase } from "./DtoBase";

export class BusinessEventDto extends DtoBase{
    eventName?: string;
    eventDetails?: string;
    operationName?: string;
    publicDetails?: string;
    ddEntityId?: number;
    ddEntity?: DdEntityDto;
    businessEventSubscriber?: BusinessEventSubscriberDto[];
}

// const entityJson = {
//     eventName : "eventName?",
//     eventDetails : "eventDetails?",
//     operationName : "operationName?",
//     publicDetails : "publicDetails?",
//     ddEntityId : "ddEntityId?",
//     businessEventSubscriber : "businessEventSubscriber?"
//   };
  
//   const Json = {
//     eventName : "eventName?",
//     eventDetails : "eventDetails?",
//     operationName : "operationName?",
//     publicDetails : "publicDetails?",
//     ddEntityId : "ddEntityId?",
//     businessEventSubscriber : "businessEventSubscriber?"
//   };
  
//   const entityToJson = {
//     eventName : "eventName?",
//     eventDetails : "eventDetails?",
//     operationName : "operationName?",
//     publicDetails : "publicDetails?",
//     ddEntityId : "ddEntityId?",
//     businessEventSubscriber : "businessEventSubscriber?"
//   };
  
//   const ToEntityJson= {
//     eventName : "eventName?",
//     eventDetails : "eventDetails?",
//     operationName : "operationName?",
//     publicDetails : "publicDetails?",
//     ddEntityId : "ddEntityId?",
//     businessEventSubscriber : "businessEventSubscriber?",
//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.Json = Json;
//   module.exports.entityToJson = entityToJson;
//   module.exports.ToEntityJson = ToEntityJson;