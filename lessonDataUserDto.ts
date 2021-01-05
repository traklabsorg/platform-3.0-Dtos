import { ChannelDto } from "./channelDto";
import { DtoBase } from "./DtoBase";
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