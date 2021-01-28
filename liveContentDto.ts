import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { CommunityDto } from "./communityDto";
import { LiveContentUserDto } from "./liveContentUserDto";
import { UserMeetingProviderDto } from "./userMeetingProviderDto";
import { UserDto } from "./userDto";
import { MeetingProviderDto } from "./meetingProviderDto";

export class LiveContentDto extends DtoBase {
  url?: string;
  startDateTime?: Date;
  duration?: number;
  userId?: number;
  user?: UserDto;
  externalMeetingProviderUserId?: string;
  hostUsers?: string;
  contentDetails?: ContentDetails;
  webinarDetails?: string;
  typeOfRegistration: TypeOfRegistration;
  meetingProviderId?: number;
  meetingProvider?: MeetingProviderDto;
  liveContentUsers?: LiveContentUserDto[];

  communityId: CommunityDto;
  userMeetingProvider: UserMeetingProviderDto;
}

export class ContentDetails {
  webinarCoverImage: string;
  topic: string;
  description: string;
  date: Date;
  time: string;
  timeZone: string;
  durationHours: string;
  durationMinutes: string;
  numberOfInvitees: string;
  registrationType: string;
  isMeetingSecure: string;
  password: string;
  isWaitingRoomEnabled: string;
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
