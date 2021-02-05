import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { UserDto } from "./userDto";
import { LessonDataDto } from "./lessonDataDto";

export class LessonDataReviewDto extends DtoBase{
    reviewDetails?: string;
    reviewStatus?: boolean;
    userId?: number;
    lessonDataId?: number;
    user?: UserDto;
    lessonData?: LessonDataDto;
}
