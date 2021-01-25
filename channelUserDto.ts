import { ChannelDto } from "./channelDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { UserDto } from "./userDto";

export class ChannelUserDto extends DtoBase{
  //channel_id??: number;
  isActive?:string;
  channelId?:number;
  userId?: number;
  user?: UserDto;
  channel?: ChannelDto;

}
