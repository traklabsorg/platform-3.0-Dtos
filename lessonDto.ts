import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { SectionDto } from "./sectionDto";

export class LessonDto extends DtoBase {
  contentType?: string;
  contentTemplateId?: number;
  contentDetails?: ContentDetails;
  sequence?: string;
  publishDate?: string;
  isMandatorySequence?: string;
  sectionId?: number;
  section?: SectionDto;
  lessonDatas?: LessonDataDto[];
}

class ContentDetails {
  isPublished?: boolean;
  profileImage?: string;
  title?: string;
  isFeatured?: boolean;
}
