import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class FeaturedContentDto extends DtoBase {
    section_id?: number;
    lesson_id?: number;
    sectionType?: string;
    section_cover_image?: string;
    lesson_cover_image?: string;
    lesson_title?: string;
    lesson_count?: string;
    section_title?: string;
    section_creator_image?: string;
    lesson_creator_image?: string;
    channel_title?: string;
    section_creator_user_name?: string;
  }