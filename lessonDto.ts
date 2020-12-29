import { DtoBase } from "../platform-3.0-Framework/submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { SectionDto } from "./sectionDto";

export class LessonDto extends DtoBase{
    contentType?: string;
    contentTemplateId?: number;
    contentDetails?: string;
    sequence?: string;
    publishDate?: string;
    isMandatorySequence?: string;
    sectionId?: number;
    section?: SectionDto;
//    lessonData: LessonDataDto[];
}