import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { CommunityDto } from "./communityDto";
import { LiveContentUserDto } from "./liveContentUserDto";
import { UserMeetingProviderDto } from "./userMeetingProviderDto";
import { UserDto } from "./userDto";
import { MeetingProviderDto } from "./meetingProviderDto";

export class LiveContentDto extends DtoBase {
  updateExternal?: boolean;
  url?: string;
  startDateTime?: Date;
  duration?: number;
  user?: UserDto;
  externalMeetingProviderUserId?: string;
  userId?: number;
  communityId?: number;
  recordingURL?: string;
  hostUsers?: string;
  contentDetails?: ContentDetails;
  webinarDetails?: WebinarDetails;
  typeOfRegistration?: TypeOfRegistration;
  meetingProviderId?: number;
  meetingProvider?: MeetingProviderDto;
  liveContentUser?: LiveContentUserDto[];
}

export class WebinarDetails {
  id: number;
  agenda: string;
  created_at: string;
  duration: number;
  host_email: string;
  host_id: string;
  join_url: string;
  settings: any;
  start_time: string;
  start_url: string;
  status: string;
  timezone: string;
  topic: string;
  type: number;
  uuid: string;
}

export class ContentDetails {
  webinarCoverImage: string;
  topic: string;
  description: string;
  date: string;
  time: string;
  timeZone: string;
  durationHours: string;
  durationMinutes: string;
  numberOfInvitees: string;
  registrationType: TypeOfRegistration;
  isMeetingSecure: boolean;
  password: string;
  isWaitingRoomEnabled: boolean;
  hostVideo: HostVideo;
  hostAudio: HostAudio;
  participantVideo: ParticipantVideo;
  allowParticipantsToJoinAnytime: boolean;
  showAllParticipantsName: boolean;
  muteParticipantsUponEntry: boolean;
  requireAuthenticationToJoin: boolean;
  automaticallyRecordMeeting: boolean;
  recordingType: RecordingType;
  alternativeHosts: string;
  selectedMemberOrGroupList: Member[];
  selectedMembers: Member[];
}

export interface Member {
  id?: number;
  groupId: number;
  name?: string;
  image: string;
  isGroup: boolean;
  isSelected?: boolean;
  groupName?: string;
  count: number;
  email?: string;
}

export enum NumberOfInvitees {
  upToHundred = "1-100",
  upToFiveHundred = "101-500",
  upToThousand = "501-1000",
}

export enum TypeOfRegistration {
  public = "public",
  private = "private",
}

export enum HostVideo {
  on = "on",
  off = "off",
}

export enum ParticipantVideo {
  on = "on",
  off = "off",
}

export enum HostAudio {
  telephone = "telephony",
  computerAudio = "voip",
  both = "both",
}

export enum RecordingType {
  cloud = "cloud",
  local = "local",
}


export class WebinarDetailsReportDto extends DtoBase{
  userId?: number;
  groupName? : string; 
  userName? : string; 
  firstName? : string;
  lastName? : string;
  accountStatus? : string;
  webinarId : number;
	scheduledDateTime : string;
	numberOfAttendees : number;
	webinarType : string;
} 


export class TopWebinarsDto extends DtoBase{
  title? : string;
  coverImage? : string;
  noOfAttendees? : number;
  totalRecords? : number; 
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
