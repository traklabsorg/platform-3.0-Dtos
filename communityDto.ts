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
  extraData?: string;
  communityUrl?: string;
  externalTenantId?: number;
  externalTenantAppId?: number;
  isActive?: boolean;
  user?: UserDto[];
  group?: GroupDto[];
  channel?: ChannelDto[];
}

export interface CommunityAdditionalDataType {
  isActive?: boolean;
  client?: string;
  email?: string;
  alias?: string;
  publishedFrom?: string;
  publishedTill?: string;
  identityProviderDetails?: string;
  mobileAlias?: string;
  description?: string;
  themeName?: string;
  statusName?: string;
  memberCount?: number;
  communityLogo?: string;
  loginPageImage?: string;
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
}

export class CommunityUpdateDto extends DtoBase {
  paymentInfo?: PaymentInfo;
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
