import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";


export class ProfileDto extends DtoBase{
  publishedCourses?: number;
  publishedLessons?: number;
  publishedWebinars?: number;
  consumeCourses?: number;
  consumedLessons?: number;
  consumedWebinars?: number;
  channelPointsData?: string;
}
