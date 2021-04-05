import { DtoBase } from "submodules/platform-3.0-Entities/submodules/platform-3.0-Framework/submodules/platform-3.0-Common/common/DtoBase";

export class PollReportDto extends DtoBase{
    userId?: number;
    groupName? : string; 
    userName? : string; 
    firstName? : string;
    lastName? : string;
    accountStatus? : string;
    channelName? : string;
    courseId? : number;
    courseTitle? : string;
    publicationId? : number;
    lessonId : number;
    lessonTitle? : string;
    questionText? : string;
	optionSelected? : string;
	pollTimestamp? : string;
  } 