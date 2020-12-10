import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { UserDto } from "./userDto";
import { UserMeetingProviders_MeetingDto } from "./userMeetingProviders_meetingDto";

export class EnrolledMeetingsDto extends DtoBase{
  enrolledOn: Date;
  userId: number;
  hostUserId: number;
  user: UserDto;
  hostUser: UserDto;
  userMeetingProviderMeetingId: UserMeetingProviders_MeetingDto;
}

// const entityJson = {
//     userId : "userId?",
//     userMeetingProviderId : "userMeetingProviderId?",
//   };
  
//   const dtoJson = {
//     userIdDto : "userIdDto?",
//     userMeetingProviderIdDto : "userMeetingProviderIdDto?",
//   };
  
//   const entityToDtoJson = {
//     userIdDto : "userId?",
//     userMeetingProviderIdDto : "userMeetingProviderId?",
//   };
  
//   const dtoToEntityJson= {
//     userId : "userIdDto?",
//     userMeetingProviderId : "userMeetingProviderIdDto?",

//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;