// import { BusinessEvent } from "app/entities/businessEvent";
import { BusinessEventSubscriber } from "app/entities/businessEventSubscriber";
import { DdEntity } from "app/entities/ddEntities";
import { DtoBase } from "framework/entities/DtoBase";

export class BusinessEventDto extends DtoBase{
    eventName: string;
    eventDetails: string;
    operationName: string;
    publicDetails: string;
    ddEntityId: DdEntity;
    businessEventSubscriber: BusinessEventSubscriber[];
}

const entityJson = {
    eventName : "eventName?",
    eventDetails : "eventDetails?",
    operationName : "operationName?",
    publicDetails : "publicDetails?",
    ddEntityId : "ddEntityId?",
    businessEventSubscriber : "businessEventSubscriber?"
  };
  
  const dtoJson = {
    eventNameDto : "eventNameDto?",
    eventDetailsDto : "eventDetailsDto?",
    operationNameDto : "operationNameDto?",
    publicDetailsDto : "publicDetailsDto?",
    ddEntityIdDto : "ddEntityIdDto?",
    businessEventSubscriberDto : "businessEventSubscriberDto?"
  };
  
  const entityToDtoJson = {
    eventNameDto : "eventName?",
    eventDetailsDto : "eventDetails?",
    operationNameDto : "operationName?",
    publicDetailsDto : "publicDetails?",
    ddEntityIdDto : "ddEntityId?",
    businessEventSubscriberDto : "businessEventSubscriber?"
  };
  
  const dtoToEntityJson= {
    eventName : "eventNameDto?",
    eventDetails : "eventDetailsDto?",
    operationName : "operationNameDto?",
    publicDetails : "publicDetailsDto?",
    ddEntityId : "ddEntityIdDto?",
    businessEventSubscriber : "businessEventSubscriberDto?",
  };
  
  module.exports.entityJson = entityJson;
  module.exports.dtoJson = dtoJson;
  module.exports.entityToDtoJson = entityToDtoJson;
  module.exports.dtoToEntityJson = dtoToEntityJson;