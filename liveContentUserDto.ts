import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LiveContentDto } from "./liveContentDto";
import { UserDto } from "./userDto";

export class LiveContentUserDto extends DtoBase {
  invitationType?: InvitationType;
  additionalDetails?: string;
  liveContentId?: number;
  userId?: number;
  liveContent?: LiveContentDto;
  user?: UserDto;
}

export enum InvitationType {
  Invited = "Invited",
  Attending = "Attending",
}
