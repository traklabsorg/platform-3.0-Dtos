import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { UserDto } from "./userDto";

export class LessonDataReviewDto extends DtoBase{
    reviewDetails?: reviewData;
    reviewStatus?: boolean;
    userId?: number;
    lessonDataId?: number;
    user?: UserDto;
    lessonData?: LessonDataDto;
}

export interface reviewData {
    comment?: string;
}
