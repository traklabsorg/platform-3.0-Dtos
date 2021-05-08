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
import { ChannelUserDto } from "./channelUserDto";
import { SectionReviewDto } from "./sectionReviewDto";
import { PaymentDto } from "./paymentDto";
import { UserSettings } from "aws-sdk/clients/sagemaker";


export class UserDto extends DtoBase {
  constructor() {
    super();
    this.toResetPassword = false;
  }
  toResetPassword?: boolean;
  userName?: string;
  userType?: string;
  userDetails?: UserDetails;
  userEmail?: string;
  userImage?: string;
  isActive?: string;
  userAdditionalDetails?: string;
  userSettings?: UserSettingsDto;
  lastLogonDateTime?: Date;
  liveContentUser?: LiveContentUserDto[];
  userMeetingProvider?: UserMeetingProviderDto[];
  groupUser?: GroupUserDto[];
  enrolledMeeting?: EnrolledMeetingDto[];
  lessonDataReview?: LessonDataReviewDto[];
  lessonDataUser?: LessonDataUserDto[];
  communityId?: number;
  communityUrl?: string;
  community?: CommunityDto;
  liveContent?: LiveContentDto[];
  externalUserId?: number;
  externalTenantUserId?: number;
  externalTenantUserAppId?: number;
  channelUser?: ChannelUserDto[];
  sectionReview?: SectionReviewDto[];
  payment: PaymentDto[];
  paymentInfo: PaymentInfo;
}

export class UserSettingsDto {
  constructor(){
    this.passwordExpirationPeriod = PasswordExpirationPeriod.THREE_MONTHS;
    this.passwordExpiryNotificationTime = PasswordExpiryNotificationTime.ONE_WEEK_BEFORE;
    this.passwordExpirationDate = null;
  }
  passwordExpirationDate? : string;
  passwordExpirationPeriod? : PasswordExpirationPeriod;
  passwordExpiryNotificationTime? : PasswordExpiryNotificationTime;
}

export enum PasswordExpirationPeriod {
  FORTNIGHT = 14,
  MONTH = 30,
  TWO_MONTHS = 60,
  THREE_MONTHS = 90
}

export enum PasswordExpiryNotificationTime {
  ONE_DAY_BEFORE = 1,
  ONE_WEEK_BEFORE = 7
}

export class PaymentInfo {
  stripeCustomerAccount: any;
}

export class UserDetails {
  firstName?: string;
  lastName?: string;
  password?: string;
  coverImage?: string;
  profileImage?: string;
  encryptedData?: EncryptedData;
}

export class EncryptedData {
  keyLength?: number;
  key?: any;
  algorithm?: string;
  iv?: any;
  password?: string;
  date?: Date;

  constructor(keyLength?: number, key?: any, algorithm?: string, iv?: any, password?: string, date?: Date) {
    this.keyLength = keyLength;
    this.key = key;
    this.algorithm = algorithm;
    this.iv = iv;
    this.password = password;
    this.date = date;
  }
}

export class UserDetailsReportDto extends DtoBase {
  userId?: number;
  groupName: string;
  userName: string;
  firstName: string;
  lastName: string;
  accountStatus: string;
  channelName: string;
  accessRightsLevel: string;
  actionCreationTimestamp: string;
  numberOfJoinedChannels: number;
  joinedChannelIds: string;
  joinedChannelNames: string;
  lastLogin: string;
}

export class UpdateUserDto extends DtoBase {
  paymentInfo: PaymentInfo;
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
