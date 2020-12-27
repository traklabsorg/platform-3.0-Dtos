
import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { GroupDto } from "./groupDto";

export class ChannelDto extends DtoBase{
//channel_id?: number;
  title?: string;
  channelType?: string;
  channelDetails?: string;
//groupId?: GroupDto;
  isDraft?: string;
  tenantId?: number;
  community?:Community;
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