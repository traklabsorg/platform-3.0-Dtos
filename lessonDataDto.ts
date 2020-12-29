import { DtoBase } from "../platform-3.0-Framework/submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataUserDto } from "./lessonDataUserDto";
import { LessonDto } from "./lessonDto";

export class LessonDataDto extends DtoBase{
    contentType?: string;
    url?: string;
    isReviewed?: string;
    isSubmitted?: string;
    isDraft?: string;
    lessonDetails?: string;
    contentId?: number;
    content?: LessonDto;
//    lessonDataUsers: LessonDataUserDto[];
}