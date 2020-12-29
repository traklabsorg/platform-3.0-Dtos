import { DtoBase } from "../platform-3.0-Framework/submodules/platform-3.0-Common/common/DtoBase";
import { UserMeetingProviderDto } from "./userMeetingProviderDto";

export class MeetingProviderDto extends DtoBase{
  providerName?: string;
  providerDetails?: string;
//  userMeetingProviders : UserMeetingProviderDto[];
}

// const entityJson = {
//   meeting_provider_id : "meeting_provider_id?",
//   providerName : "providerName?",
//   providerDetails : "providerDetails?"
// };

// const dtoJson = {
//   meeting_provider_idDto : "meeting_provider_idDto?",
// providerNameDto : "providerNameDto?",
// providerDetailsDto : "providerDetailsDto?"
// };

// const entityToDtoJson = {
//   meeting_provider_idDto : "meeting_provider_id?",
// providerNameDto : "providerName?",
// providerDetailsDto : "providerDetails?"
// };

// const dtoToEntityJson= {
//   meeting_provider_id : "meeting_provider_idDto?",
// providerName : "providerNameDto?",
// providerDetails : "providerDetailsDto?"
// };

// module.exports.entityJson = entityJson;
// module.exports.dtoJson = dtoJson;
// module.exports.entityToDtoJson = entityToDtoJson;
// module.exports.dtoToEntityJson = dtoToEntityJson;