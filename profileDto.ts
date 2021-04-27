import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class ProfileDto extends DtoBase {
  userId?: number;
  publishedCourses?: number;
  publishedLessons?: number;
  publishedWebinars?: number;
  consumedCourses?: number;
  consumedLessons?: number;
  consumedWebinars?: number;
  groupRank?: number;
  totalMemberInGroup?: number;
  totalPoints?: number;
  channelPointsData?: ChannelData[];
}

export class ChannelData {
  channel_id?: number;
  title?: string;
  points?: number;
  rank?: string;
  user_id?: number;
  profile_image_url?: string;
  total_member?: number;
}
