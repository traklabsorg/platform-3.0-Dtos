import { DtoBase } from "../platform-3.0-Framework/submodules/platform-3.0-Common/common/DtoBase";
import { LiveContentDto } from "./liveContentDto";
import { UserDto } from "./userDto";

export class LiveContentUserDto extends DtoBase{
    additionalDetails?: string;
    liveContentId?: number;
    userId?: number;
    liveContent?: LiveContentDto;
    user?: UserDto;
}