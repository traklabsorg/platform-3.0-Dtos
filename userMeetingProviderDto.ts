// import { MeetingProvider } from "app/platform-3.0-Entities/meetingProvider";
// import { User } from "app/platform-3.0-Entities/user";
import { DtoBase } from "./DtoBase";
import { LiveContentDto } from "./liveContentDto";
import { MeetingProviderDto } from "./meetingProviderDto";
import { UserDto } from "./userDto";
import { UserMeetingProviders_MeetingDto } from "./userMeetingProviders_meetingDto";

export class UserMeetingProviderDto extends DtoBase{
  Details?: string;
  userId?: number;
  meetingProviderId?: number;
  userMeetingProvider_meetings?: UserMeetingProviders_MeetingDto[];
  user?: UserDto;
  meetingProvider?: MeetingProviderDto;
//  liveContents?: LiveContentDto[];
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