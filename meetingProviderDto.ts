import { DtoBase } from "framework/entities/DtoBase"

export class MeetingProviderDto extends DtoBase{
  meeting_provider_idDto?: number;
  providerNameDto?: string;
  providerDetailsDto?: string;


}

const entityJson = {
  meeting_provider_id : "meeting_provider_id?",
  providerName : "providerName?",
  providerDetails : "providerDetails?"
};

const dtoJson = {
  meeting_provider_idDto : "meeting_provider_idDto?",
providerNameDto : "providerNameDto?",
providerDetailsDto : "providerDetailsDto?"
};

const entityToDtoJson = {
  meeting_provider_idDto : "meeting_provider_id?",
providerNameDto : "providerName?",
providerDetailsDto : "providerDetails?"
};

const dtoToEntityJson= {
  meeting_provider_id : "meeting_provider_idDto?",
providerName : "providerNameDto?",
providerDetails : "providerDetailsDto?"
};

module.exports.entityJson = entityJson;
module.exports.dtoJson = dtoJson;
module.exports.entityToDtoJson = entityToDtoJson;
module.exports.dtoToEntityJson = dtoToEntityJson;