import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { SectionDto } from "./sectionDto";

export class LessonDto extends DtoBase {
  contentType?: string;
  title?: string;
  contentTemplateId?: number;
  contentDetails?: ContentDetails;
  sequence?: string;
  publishDate?: string;
  isMandatorySequence?: string;
  isFeatured?: boolean;
  sectionId?: number;
  section?: SectionDto;
  collaborators?: number[];
  lessonData?: LessonDataDto[];
  lessonTotalPoint?: number;
}

class ContentDetails {
  isPublished?: boolean;
  coverImage?: CoverImage;
  isFeatured?: boolean;
}

export interface CoverImage {
  ImageSrc: string;
  text: string;
  [key: string]: string;
}

export class LessonInteractionReportDto extends DtoBase{
      userId?: number;
	  	groupName? : string; 
		 	userName? : string; 
			firstName? : string;
			lastName? : string;
			accountStatus? : string;
			channelName? : string;
			lessonId? : number
			publicationId? : number;
			lessonTitle? : string;
			timeOpened? : string;
			timeCompleted? : string;
} 

export class LessonInteractionOverviewDto extends DtoBase{
  userId?: number;
  groupName? : string; 
  userName? : string; 
  firstName? : string;
  lastName? : string;
  accountStatus? : string;
  channelName? : string;
  lessonsStarted : number;
	lessonsCompleted : number;
	lessonId : number;
	totalLessonPoints : number;
	totalLessonPointsCovered : number;
	totalRecords : number;
} 

export class LessonPublicationReportDto extends DtoBase{
  userId?: number;
  groupName? : string; 
  userName? : string; 
  firstName? : string;
  lastName? : string;
  accountStatus? : string;
  channelName? : string;
  lessonId? : number
  publicationId? : number;
  lessonTitle? : string;
  timeSubmitted: string;
	timePublished? : string;
} 

export class TopLessonDto extends DtoBase{
  title? : string;
  noOfViews? : number; 
  completionRate? : number; 
  totalRecords? : number;
}