
import { ChannelBillPlanDto } from "./channelBillPlanDto";
import { ChannelGroupDto } from "./channelGroupDto";
import { CommunityDto } from "./communityDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { GroupDto } from "./groupDto";
import { LessonDataUserDto } from "./lessonDataUserDto";
import { SectionDto } from "./sectionDto";

export class ChannelDto extends DtoBase{
//channel_id?: number;;
  title?: string;
  channelType?: string;
  channelDetails?: string;
//groupId?: GroupDto;
  isDraft?: string;
  communityId?: number;
  community?:CommunityDto;
  channelBillPlans?: ChannelBillPlanDto[];
  sections?: SectionDto[];
  lessonDataUsers?: LessonDataUserDto[];
  channelGroups?: ChannelGroupDto[];

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
