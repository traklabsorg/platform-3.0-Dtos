import { ChannelDto } from "./channelDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { GroupDto } from "./groupDto";

export class ChannelGroupDto extends DtoBase{
  //channel_id??: number;
  channelId?:number;
  groupId?:number;
  channel?: ChannelDto;
  group?: GroupDto;
  channelGroupDetails?: string;
  channelGroupRevokeUsers?: string;

}