import { DtoBase } from "../platform-3.0-Framework/submodules/platform-3.0-Common/common/DtoBase";
import { ChannelDto } from "./channelDto";
import { LessonDataDto } from "./lessonDataDto";
import { UserDto } from "./userDto";

export class LessonDataUserDto extends DtoBase{
    additonalDetails?: string;
    userId?: number;
    contentId?: number;
    user?: UserDto;
    channel?: ChannelDto;
    lessonData?: LessonDataDto;
//    content: LessonDataDto;
}