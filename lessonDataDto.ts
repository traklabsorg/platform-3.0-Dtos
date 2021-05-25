import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataUserDto } from "./lessonDataUserDto";
import { LessonDto } from "./lessonDto";
import { LessonDataReviewDto } from "./lessonDataReviewDto";

export class LessonDataDto extends DtoBase {
  contentType?: string;
  url?: string;
  isReviewed?: boolean;
  isSubmitted?: boolean;
  isDraft?: boolean;
  lessonDetails?: LessonDetails;
  lessonId?: number;
  totalPoints?: number;
  lesson?: LessonDto;
  lessonDataUser?: LessonDataUserDto[];
  lessonDataReview?: LessonDataReviewDto[];
  sequenceIndex?: number;
}


export enum ContentTypeDataField {
  Text = "text",
  Image = "image",
  Video = "video",
  Pdf = "files",
  Link = "links",
  Poll = "poll",
  Quiz = "quiz",
}

export class LessonDetails {
  content?: any;

}

export class UpdateLessonDataDto extends DtoBase {
  lessonDetails?: LessonDetails;
}