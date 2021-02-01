import { ChannelDto } from "./channelDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { UserDto } from "./userDto";

export class LessonDataUserDto extends DtoBase{
    additonalDetails?: string;
    userId?: number;
    lessonDataId?: number;
    user?: UserDto;
    // channel?: ChannelDto;
    lessonData?: LessonDataDto;
//    content: LessonDataDto;
}