// import { BusinessEvent } from "app/platform-3.0-Entities/businessEvent";
import { DtoBase } from "./DtoBase";
import { BusinessEventDto } from "./businessEventDto";
import { BusinessEventSubscriberDto } from "./businessEventSubscriberDto";

export class DdEntityDto extends DtoBase {
  title?: string;
  entityDetails?: string;
  //  businessEvents: BusinessEventDto[];
  //  businessEventSubscribers: BusinessEventSubscriberDto[];
}

// const entityJson = {
//     title : "title?",
//     entityDetails : "entityDetails?",
//     businessEventId : "businessEventId?",
//     businessEventSubscriber : "businessEventSubscriber?",
//   };

//   const dtoJson = {
//     titleDto : "titleDto?",
//     entityDetailsDto : "entityDetailsDto?",
//     businessEventIdDto : "businessEventIdDto?",
//     businessEventSubscriberDto : "businessEventSubscriberDto?",
//   };

//   const entityToDtoJson = {
//     titleDto : "title?",
//     entityDetailsDto : "entityDetails?",
//     businessEventIdDto : "businessEventId?",
//     businessEventSubscriberDto : "businessEventSubscriber?",
//   };

//   const dtoToEntityJson= {
//     title : "titleDto?",
//     entityDetails : "entityDetailsDto?",
//     businessEventId : "businessEventIdDto?",
//     businessEventSubscriber : "businessEventSubscriberDto?",
//   };

//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;
