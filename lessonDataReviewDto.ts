import { DtoBase } from "../platform-3.0-Framework/submodules/platform-3.0-Common/common/DtoBase";
import { SectionDto } from "./sectionDto";
import { UserDto } from "./userDto";

export class LessonDataReviewDto extends DtoBase{
    reviewDetails?: string;
    reviewStatus?: string;
    userId?: number;
    sectionId?: number;
    user?: UserDto;
    section?: SectionDto;
}