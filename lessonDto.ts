import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { LessonDataDto } from "./lessonDataDto";
import { SectionDto } from "./sectionDto";
import { LessonReviewDto } from "./lessonReviewDto";

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
  lessonComment?: string[];
  lessonTotalPoint?: number;
}

class ContentDetails {
  isPublished?: boolean;
  coverImage?: CoverImage;
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
  coverImage? : string;
  noOfViews? : number; 
  completionRate? : number; 
  totalRecords? : number;
}

export class TopLessonDaywiseDto extends DtoBase{
  contextDate? : string;
	title? : string; 
	noOfViews? : number; 
	completionRate?: number;
	completedNumbers?: number;
  openedNumbers: number;
	totalLessonPublished? : number;
	totalrecords? : number; 
}

export class LessonDailyEngagementDto extends DtoBase{
  hourValue?: number;
  noOfUniqueAccesses?: number; 
	totalrecords? : number; 
}

export class LessonWeeklyEngagementDto extends DtoBase{
  weekValueInString?: string;
  noOfUniqueAccesses?: number; 
	totalrecords? : number; 
}

export class UpdateLessonDto extends DtoBase{
  lessonComment?: string[];
}