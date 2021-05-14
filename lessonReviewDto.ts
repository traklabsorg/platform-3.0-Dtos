import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";


export class LessonReviewDto extends DtoBase{
    reviewDetails?: ReviewData;
    reviewStatus?: boolean;
    userId?: number;
    lessonId?: number;

    
}

export interface ReviewData {
    comment?: string;
}