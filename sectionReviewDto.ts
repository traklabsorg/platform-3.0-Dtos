import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { SectionDto } from "./sectionDto";
import { UserDto } from "./userDto";

export class SectionReviewDto extends DtoBase {
    sectionId?: number;
    userId?: number;
    reviewDetails?: ReviewData;
    reviewStatus?: boolean;
    section?: SectionDto;
    user?: UserDto;
  }

  export class ReviewData{
    comment?: string;
  }
