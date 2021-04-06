import { ChannelBillPlanDto } from "./channelBillPlanDto";
import { ChannelGroupDto } from "./channelGroupDto";
import { CommunityDto } from "./communityDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { GroupDto } from "./groupDto";
import { LessonDataUserDto } from "./lessonDataUserDto";
import { SectionDto } from "./sectionDto";
import { ChannelUserDto } from "./channelUserDto";

export class ChannelDto extends DtoBase {
  //channel_id?: number;;
  title?: string;
  channelType?: string;
  channelDetails?: ChannelDetails;
  //groupId?: GroupDto;
  communityId?: number;
  isDraft?: string;
  channelSequenceId?: number;
  community?: CommunityDto;
  channelBillPlan?: ChannelBillPlanDto[];
  section?: SectionDto[];
  channelGroup?: ChannelGroupDto[];
  channelUser?: ChannelUserDto[];
}

export class ChannelDetails {
  description?: string;
  chargingType?: ChargingType;
  profileImage?: string;
  coverImage?: string;
}

export enum ChargingType {
  FIXED = "fixed",
  SUBSCRIPTION = "subscription"
}

export class Channel extends DtoBase {
  title?: string;
  channelType?: string;
  channelDetails?: ChannelDetails;
  communityId?: number;
  isDraft?: string;
  community?: CommunityDto;
  channelBillPlan?: ChannelBillPlanDto[];
  section?: SectionDto[];
  channelGroup?: ChannelGroupDto[];
  channelUser?: ChannelUserDto[];
  lessonCount?: number;
  sectionCount?: number;
  isUserJoined?: boolean;
}

export class ChannelDetailsReportDto extends DtoBase {
  userId?: number;
  groupName?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  accountStatus?: string;
  channelName?: string;
  channelCreationTimestamp: string;
  channelStatus: string;
  numberOfLessons: number;
  numberOfCourses: number;
}

// const entityJson = {
//   channel_id : "channel_id?",
//   title : "title?",
//   channelType : "channelType?",
//   channelDetails : "channelDetails?",
//   groupId : "groupId?"
// };

// const Json = {
//   channel_id : "channel_id?",
// title : "title?",
// channelType : "channelType?",
// channelDetails : "channelDetails?",
// groupId : "groupId?"
// };

// const entityToJson = {
//   channel_id : "channel_id?",
// title : "title?",
// channelType : "channelType?",
// channelDetails : "channelDetails?",
// groupId : "groupId?"
// };

// const ToEntityJson= {
//   channel_id : "channel_id?",
// title : "title?",
// channelType : "channelType?",
// channelDetails : "channelDetails?",
// groupId : "groupId?"
// };

// module.exports.entityJson = entityJson;
// module.exports.Json = Json;
// module.exports.entityToJson = entityToJson;
// module.exports.ToEntityJson = ToEntityJson;
