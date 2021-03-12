import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class ProfileDto extends DtoBase {
  publishedCourses?: number;
  publishedLessons?: number;
  publishedWebinars?: number;
  consumedCourses?: number;
  consumedLessons?: number;
  consumedWebinars?: number;
  channelPointsData?: ChannelPointsData;
}

export class ChannelPointsData {
  groupRank?: string;
  totalPoints?: string;
  ChannelData?: ChannelData[];
}

export class ChannelData {
  channelId?: number;
  channelImage?: string;
  channelName?: string;
  points?: number;
  rank?: string;
}
