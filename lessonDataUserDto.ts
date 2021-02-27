import { ChannelDto } from "./channelDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { UserDto } from "./userDto";

export class LessonDataUserDto extends DtoBase {
  additionalDetails?: AdditionalDetails;
  userId?: number;
  lessonDataId?: number;
  user?: UserDto;
  // channel?: ChannelDto;
  lessonData?: LessonDataDto;
  //    content: LessonDataDto;
}

export class AdditionalDetails {
  pointsCovered?: number;
  isViewed?: boolean;
  duration?: number;
  playedSeconds?: number;
  [key: string]: any;
}
