// import { Channel } from "app/platform-3.0-Entities/channel";
// import { LiveContent } from "app/platform-3.0-Entities/liveContent";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { ChannelDto } from "./channelDto";
import { LessonDto } from "./lessonDto";
import { LessonDataReviewDto } from "./lessonDataReviewDto";
import { SectionReviewDto } from "./sectionReviewDto";

export class SectionDto extends DtoBase {
  title?: string;
  sectionDetails?: SectionDetails;
  sectionType?: string;
  channelId?: number;
  channel?: ChannelDto;
  lesson?: LessonDto[];
  sectionReview?: SectionReviewDto[];
  content?: string[];
  liveContent?: string[];
}

class SectionDetails {
  description?: string;
  isPublished?: boolean;
  isFeatured?: boolean;
  coverimage?: string;
  readingorder?: boolean;
}

export class SectionInteractionReportDto extends DtoBase{
  userId?: number;
  groupName? : string; 
  userName? : string; 
  firstName? : string;
  lastName? : string;
  accountStatus? : string;
  channelName? : string;
  courseId? : number
  publicationId? : number;
  courseTitle? : string;
  timeOpened? : string;
  timeCompleted? : string;
} 

export class SectionPublicationReportDto extends DtoBase{
  userId?: number;
  groupName? : string; 
  userName? : string; 
  firstName? : string;
  lastName? : string;
  accountStatus? : string;
  channelName? : string;
  courseId? : number
  publicationId? : number;
  courseTitle? : string;
  timeSubmitted: string;
	timePublished? : string;
} 


export class TopCoursesDto extends DtoBase{
  title? : string;
  noOfViews? : number; 
  completionRate? : number; 
  totalRecords? : number;
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
