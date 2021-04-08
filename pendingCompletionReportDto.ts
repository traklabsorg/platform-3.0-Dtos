import { DtoBase } from './submodules/platform-3.0-Common/common/DtoBase';
export class PendingCompletionReportDto extends DtoBase {
  userId?: number;
  groupName?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  accountStatus?: string;
  channelName?: string;
  courseTitle?: string;
  incompletedLessonTitles?: string;
  totalRecords?: number;
}