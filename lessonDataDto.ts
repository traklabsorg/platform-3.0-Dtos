import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataUserDto } from "./lessonDataUserDto";
import { LessonDto } from "./lessonDto";
import { LessonDataReviewDto } from "./lessonDataReviewDto";

export class LessonDataDto extends DtoBase {
  contentType?: string;
  url?: string;
  isReviewed?: string;
  isSubmitted?: string;
  isDraft?: string;
  lessonDetails?: string;
  lessonId?: number;
  lesson?: LessonDto;
  lessonDataUsers?: LessonDataUserDto[];
  lessonDataReviews?: LessonDataReviewDto[];
}


export enum ContentTypeDataField {
    Text="text",
    Image="image",
    Video="video",
    Pdf="files",
    Link="links",
    Poll="poll",
    Quiz="quiz",
}