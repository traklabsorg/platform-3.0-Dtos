import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { UserMeetingProviderDto } from "./userMeetingProviderDto";

export class UserMeetingProviders_MeetingDto extends DtoBase{
  meetingDetail: string;
  meetingStartDateTime: Date;
  meetingEndDateTime: Date;
  meetingType: string;
  meetingProviderId: number;
  userMeetingProvider: UserMeetingProviderDto;
}

// const entityJson = {

// };

// const dtoJson = {
  
// };

// const entityToDtoJson = {
  
// };

// const dtoToEntityJson= {
  
// };

// module.exports.entityJson = entityJson;
// module.exports.dtoJson = dtoJson;
// module.exports.entityToDtoJson = entityToDtoJson;
// module.exports.dtoToEntityJson = dtoToEntityJson;