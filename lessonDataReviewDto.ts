import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { SectionDto } from "./sectionDto";
import { UserDto } from "./userDto";
import { LessonDataDto } from "./lessonDataDto";

export class LessonDataReviewDto extends DtoBase {
  reviewDetails?: string;
  reviewStatus?: string;
  userId?: number;
  lessonDataId?: number;
  user?: UserDto;
  lessonData?: LessonDataDto;
}
