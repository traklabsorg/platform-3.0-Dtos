import { DtoBase } from "./DtoBase";
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
  communityAdditionalData?: string;
  communityUrl?: string;

  isActive: boolean;
  email: string;
  alias: string;
  publishedFrom: string;
  publishedTill: string;
  identityProviderDetails: string;
  mobileAlias: string;
  description: string;
  themeName: string;
  statusName: string;
  client: string;
  memberCount: number;

  users: UserDto[];
  groups: GroupDto[];
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
