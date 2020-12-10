// import { Channel } from "app/platform-3.0-Entities/channel";
// import { LiveContent } from "app/platform-3.0-Entities/liveContent";
import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { ChannelDto } from "./channelDto";
import { LessonDto } from "./lessonDto";


export class SectionDto extends DtoBase{
  title: string;
  channelId: number;
  channel: ChannelDto;
  lessons: LessonDto[];
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