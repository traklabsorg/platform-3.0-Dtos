import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { SectionDto } from "./sectionDto";

export class LessonDto extends DtoBase{
    contentType: string;
    contentTemplateId: number;
    contentDetails: string;
    sectionId: number;
    section: SectionDto;
    lessonData: LessonDataDto[];
}