import { Group } from "app/entities/group";
import { DtoBase } from "framework/entities/DtoBase";

export class ChannelDto extends DtoBase{
  // channel_id?: number;
  title: string;
  channelType: string;
  channelDetails?: string;
  groupId: number;

  constructor(){
    super();
    this.channelDetails='';
    this.title='';
    this.channelType='';
    this.groupId=0;
  }
}

// const entityJson = {
//   channel_id : "channel_id?",
//   title : "title?",
//   channelType : "channelType?",
//   channelDetails : "channelDetails?",
//   groupId : "groupId?"
// };

// const dtoJson = {
//   channel_idDto : "channel_idDto?",
// titleDto : "titleDto?",
// channelTypeDto : "channelTypeDto?",
// channelDetailsDto : "channelDetailsDto?",
// groupIdDto : "groupIdDto?"
// };

// const entityToDtoJson = {
//   channel_idDto : "channel_id?",
// titleDto : "title?",
// channelTypeDto : "channelType?",
// channelDetailsDto : "channelDetails?",
// groupIdDto : "groupId?"
// };

// const dtoToEntityJson= {
//   channel_id : "channel_idDto?",
// title : "titleDto?",
// channelType : "channelTypeDto?",
// channelDetails : "channelDetailsDto?",
// groupId : "groupIdDto?"
// };

// module.exports.entityJson = entityJson;
// module.exports.dtoJson = dtoJson;
// module.exports.entityToDtoJson = entityToDtoJson;
// module.exports.dtoToEntityJson = dtoToEntityJson;