import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { CommunitiesDto } from "./communitiesDto";
import { LiveContentUserDto } from "./liveContentUserDto";
import { UserMeetingProviderDto } from "./userMeetingProviderDto";

export class LiveContentDto extends DtoBase{
  url: string;
  contentDetails: string;
  startDate: Date;
  endDate: Date;
  userMeetingProviderId: number;
  communityId: CommunitiesDto;
  userMeetingProvider: UserMeetingProviderDto;
  liveContentUsers: LiveContentUserDto[];
}

// const entityJson = {
//     url : "url?",
//     contentDetails : "contentDetails?",
//     liveContentId : "liveContentId?",
//     userMeetingProviderId : "userMeetingProviderId?",
//   };
  
//   const dtoJson = {
//     urlDto : "urlDto?",
//     contentDetailsDto : "contentDetailsDto?",
//     liveContentIdDto : "liveContentIdDto?",
//     userMeetingProviderIdDto : "userMeetingProviderIdDto?",
//   };
  
//   const entityToDtoJson = {
//     urlDto : "url?",
//     contentDetailsDto : "contentDetails?",
//     liveContentIdDto : "liveContentId?",
//     userMeetingProviderIdDto : "userMeetingProviderId?",
//   };
  
//   const dtoToEntityJson= {
//     url : "urlDto?",
//     contentDetails : "contentDetailsDto?",
//     liveContentId : "liveContentIdDto?",
//     userMeetingProviderId : "userMeetingProviderIdDto?",
//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;