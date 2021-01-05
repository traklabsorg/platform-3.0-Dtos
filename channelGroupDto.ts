import { ChannelDto } from "./channelDto";
import { DtoBase } from "./DtoBase";
import { GroupDto } from "./groupDto";

export class ChannelGroupDto extends DtoBase{
  //channel_id??: number;
  channelId?:number;
  groupId?:number;
  planId?: string;
  channel?: ChannelDto;
  group?: GroupDto;

}