// import { Channel } from "app/platform-3.0-Entities/channel";
// import { LiveContent } from "app/platform-3.0-Entities/liveContent";
import { DtoBase } from "./DtoBase";
import { ChannelDto } from "./channelDto";
import { LessonDataReviewDto } from "./lessonDataReviewDto";
import { LessonDto } from "./lessonDto";

export class SectionDto extends DtoBase {
  title?: string;
  sectionDetails?: string;
  sectionType?: string;
  channelId?: number;
  channel?: ChannelDto;
  //  lessons: LessonDto[];
  lessonDataReview?: LessonDataReviewDto;
}

// const entityJson = {
//     title : "title?",
//     channelId : "channelId?",
//     contents : "contents?",
//     liveContents : "liveContents?",
//   };

//   const dtoJson = {
//     titleDto : "titleDto?",
//     channelIdDto : "channelIdDto?",
//     contentsDto : "contentsDto?",
//     liveContentsDto : "liveContentsDto?",
//   };

//   const entityToDtoJson = {
//     titleDto : "title?",
//     channelIdDto : "channelId?",
//     contentsDto : "contents?",
//     liveContentsDto : "liveContents?",
//   };

//   const dtoToEntityJson= {
//     title : "titleDto?",
//     channelId : "channelIdDto?",
//     contents : "contentsDto?",
//     liveContents : "liveContentsDto?",
//   };

//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;
