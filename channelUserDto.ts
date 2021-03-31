import { ChannelDto } from "./channelDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { UserDto } from "./userDto";

export class ChannelUserDto extends DtoBase {
  //channel_id??: number;
  isActive?: string;
  channelId?: number;
  userId?: number;
  channelUserAdditionalDetails?: ChannelUserAdditionalDetails;
  user?: UserDto;
  channel?: ChannelDto;
}

export class ChannelUserAdditionalDetails {
  message?: string;
}
