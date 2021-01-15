import { ChannelDto } from "./channelDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { GroupDto } from "./groupDto";
import { UserDto } from "./userDto";

export class CommunityDto extends DtoBase {
  communityName?: string;
  communityAdminId?: number;
  address?: string;
  paymentInfo?: string;
  subscriptionStartDate?: Date;
  subscriptionEndDate?: Date;
  userQuotas?: string;
  communityAdditionalData?: CommunityAdditionalDataType;
  communityUrl?: string;
  externalTenantId?: number;
  externalTenantAppId?: number;
  users?: UserDto[];
  groups?: GroupDto[];
  channels?: ChannelDto[];
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
