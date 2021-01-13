// import { Tenant } from "app/platform-3.0-Entities/tenant";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { CommunityDto } from "./communityDto";
import { EnrolledMeetingDto } from "./enrolledMeetingsDto";
import { GroupUserDto } from "./groupUserDto";
import { LessonDataReviewDto } from "./lessonDataReviewDto";
import { LessonDataUserDto } from "./lessonDataUserDto";
import { LiveContentUserDto } from "./liveContentUserDto";
import { UserMeetingProviderDto } from "./userMeetingProviderDto";
import { LiveContentDto } from "./liveContentDto";

export class UserDto extends DtoBase {
  userName?: string;
  userType?: string;
  userDetails?: string;
  userEmail?: string;
  userImage?: string;
  isActive?: string;
  userAdditionalDetails?: string;
  lastLogonDateTime?: Date;
  liveContentUsers?: LiveContentUserDto[];
  userMeetingProviders?: UserMeetingProviderDto[];
  groupUsers?: GroupUserDto[];
  enrolledMeetings?: EnrolledMeetingDto[];
  lessonDataReviews?: LessonDataReviewDto[];
  lessonDataUsers?: LessonDataUserDto[];
  communityId?: number;
  community?: CommunityDto;
  liveContents?: LiveContentDto;
  externalUserId?: number;
  externalTenantUserId?: number;
  externalTenantUserAppId?: number;
}

// const entityJson = {
//   user_id : "user_id?",
//   groupName : "groupName?",
//   groupType : "groupType?",
//   groupDetails : "groupDetails?",
//   tenantId : "tenantId?"
// };

// const dtoJson = {
//   user_idDto : "user_idDto?",
// groupNameDto : "groupNameDto?",
// groupTypeDto : "groupTypeDto?",
// groupDetailsDto : "groupDetailsDto?",
// tenantIdDto : "tenantIdDto?"
// };

// const entityToDtoJson = {
//   user_idDto : "user_id?",
// groupNameDto : "groupName?",
// groupTypeDto : "groupType?",
// groupDetailsDto : "groupDetails?",
// tenantIdDto : "tenantId?"
// };

// const dtoToEntityJson= {
//   user_id : "user_idDto?",
// groupName : "groupNameDto?",
// groupType : "groupTypeDto?",
// groupDetails : "groupDetailsDto?",
// tenantId : "tenantIdDto?"
// };

// module.exports.entityJson = entityJson;
// module.exports.dtoJson = dtoJson;
// module.exports.entityToDtoJson = entityToDtoJson;
// module.exports.dtoToEntityJson = dtoToEntityJson;
