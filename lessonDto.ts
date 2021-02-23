import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { SectionDto } from "./sectionDto";

export class LessonDto extends DtoBase {
  contentType?: string;
  title?: string;
  contentTemplateId?: number;
  contentDetails?: ContentDetails;
  sequence?: string;
  publishDate?: string;
  isMandatorySequence?: string;
  isFeatured?:boolean;
  sectionId?: number;
  section?: SectionDto;
  collaborators?:number[];
  // collaborators:string[];
  lessonData?: LessonDataDto[];
}




class ContentDetails {
  isPublished?: boolean;
  profileImage?: string;
  isFeatured?: boolean;
}
