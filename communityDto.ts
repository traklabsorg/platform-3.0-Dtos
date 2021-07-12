import { ChannelDto } from "./channelDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { GroupDto } from "./groupDto";
import { UserDto } from "./userDto";

export class CommunityDto extends DtoBase {
  communityName?: string;
  communityAdminId?: number;
  address?: string;
  paymentInfo?: PaymentInfo;
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;
  userQuotas?: string;
  communityAdditionalData?: CommunityAdditionalDataType;
  idpConfig?:IdentityProvider;
  extraData?: string;
  communityUrl?: string;
  externalTenantId?: number;
  externalTenantAppId?: number;
  isActive?: boolean;
  user?: UserDto[];
  group?: GroupDto[];
  channel?: ChannelDto[];
  communitySettings?: CommunitySettings
}


export class CommunitySettings extends DtoBase {
  constructor() {
    super();
    this.discoverable = true;
    this.enableUserDetailsChange = true;
    this.enableChannelLeaderBoard = false;
    this.enableGroupLeaderBoard = true;
    this.enableEmailNotification = true;
    this.enableLinkSharing = true;
    this.enableChat = true;
    this.enableRewards = false;
    this.enableSignUpViaEmail = false;
    this.accessViaOpenId = false;
    this.enableExternalLink = false;
    this.enablePasswordExpiry = false;
    this.passwordExpirationPeriod = PasswordExpirationPeriod.THREE_MONTHS;
    this.passwordExpiryNotificationTime = PasswordExpiryNotificationTime.ONE_WEEK_BEFORE;
    this.externalLinkConfiguration = new ExternalLinkConfiguration();
    this.updatedFields = []
  }
  updatedFields?: UpdateFields[];
  discoverable?: boolean;
  enableUserDetailsChange?: boolean;
  enableGroupLeaderBoard?: boolean;
  enableChannelLeaderBoard?: boolean;
  enableEmailNotification?: boolean;
  enableLinkSharing?: boolean;
  enableChat?: boolean;
  enableRewards?: boolean;
  rewardsConfiguration?: any;
  enableSignUpViaEmail?: boolean;
  accessViaOpenId?: boolean;
  openIdConfiguration?: boolean;
  enableExternalLink?: boolean;
  externalLinkConfiguration?: ExternalLinkConfiguration;
  enablePasswordExpiry?: any;
  notifyAllCommunityMembers?: boolean;
  passwordExpirationPeriod?: PasswordExpirationPeriod;
  passwordExpiryNotificationTime?: PasswordExpiryNotificationTime;
  coverImage?: string;
  logo?: string;
  defaultLanguage?: string;
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

export enum UpdateFields {
  ExternalLinkConfiguration,
}

export class ExternalLinkConfiguration {
  text?: string;
  route?: any;
  menuIcon?: string;
}

export interface CommunityAdditionalDataType {
  isActive?: boolean;
  client?: string;
  email?: string;
  alias?: string;
  publishedFrom?: string;
  publishedTill?: string;
  mobileAlias?: string;
  description?: string;
  themeName?: string;
  statusName?: string;
  memberCount?: number;
  communityLogo?: string;
  loginPageImage?: string;
}

export class IdentityProvider {
  poolId?:string
  clientID?:string
  authority?:string
  scope?:string
  responseType?:string
  redirectUri?:Array<string>
  logoutUri?:Array<string>
}
export class PaymentInfo {
  stripeAccount?: string;
  platformPercentageFee?: number;
  userFee?: number;
  billingDetails?: BillingDetails;
  stripeCustomerAccount?: any;
}

export class BillingDetails {
  email?: string;
  attention?: string;
  name?: string;
  address?: string;
}

export class UpdateCommunityDto extends DtoBase {
  paymentInfo?: PaymentInfo;
  communitySettings?: CommunitySettings;
}

export class CommunityUpdateDto extends DtoBase {
  paymentInfo?: PaymentInfo;
}

export class Coupon {
  enterpriseCode?: string;
  transactionId?: string;
  numberOfLicense?: number;
  startDate?: Date;
  endDate?: Date;
  ratePerUser?: number;
  discount?: number;
  totalValue?: number;
  paidValue?: number;
}

// const entityJson = {
//     communityName : "communityName?",
//     address : "address?",
//     paymentInfo : "paymentInfo?",
//     subscriptionStartDate : " subscriptionStartDate?",
//     subscriptionEndDate : "subscriptionEndDate?",
//     users : "users?",
//     groups : "groups?",
//   };

//   const Json = {
//     communityName : "communityName?",
//     address : "address?",
//     paymentInfo : "paymentInfo?",
//     subscriptionStartDate : " subscriptionStartDate?",
//     subscriptionEndDate : "subscriptionEndDate?",
//     users : "users?",
//     groups : "groups?",
//   };

//   const entityToJson = {
//     communityName : "communityName?",
//     address : "address?",
//     paymentInfo : "paymentInfo?",
//     subscriptionStartDate : " subscriptionStartDate?",
//     subscriptionEndDate : "subscriptionEndDate?",
//     users : "users?",
//     groups : "groups?",
//   };

//   const ToEntityJson= {
//     communityName : "communityName?",
//     address : "address?",
//     paymentInfo : "paymentInfo?",
//     subscriptionStartDate : " subscriptionStartDate?",
//     subscriptionEndDate : "subscriptionEndDate?",
//     users : "users?",
//     groups : "groups?",

//   };

//   module.exports.entityJson = entityJson;
//   module.exports.Json = Json;
//   module.exports.entityToJson = entityToJson;
//   module.exports.ToEntityJson = ToEntityJson;
