import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { LessonDataUserDto } from "./lessonDataUserDto";
import { LessonDto } from "./lessonDto";

export class LessonDataDto extends DtoBase{
    contentType: string;
    url: string;
    lessonDetails: string;
    contentId: number;
    content: LessonDto;
    lessonDataUsers: LessonDataUserDto[];
}