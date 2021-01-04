import { DtoBase } from "./DtoBase";
import { LiveContentDto } from "./liveContentDto";
import { UserDto } from "./userDto";

export class LiveContentUserDto extends DtoBase {
  additionalDetails?: string;
  liveContentId?: number;
  userId?: number;
  liveContent?: LiveContentDto;
  user?: UserDto;
}
