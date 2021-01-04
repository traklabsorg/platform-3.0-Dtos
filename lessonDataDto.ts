import { DtoBase } from "./DtoBase";
import { LessonDataUserDto } from "./lessonDataUserDto";
import { LessonDto } from "./lessonDto";

export class LessonDataDto extends DtoBase {
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
