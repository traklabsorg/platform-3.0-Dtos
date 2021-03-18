import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";


export class NotificationDto extends DtoBase{
  notificationType?: NotificationType;
  notificationData?: any;
  userId?: number;
  isRead?: boolean; 
  dateTime?: Date;
  label?: Label;
 // notificationPurpose?: NotificationPurpose;
  notificationStatus?: NotificationStatus;
}

enum NotificationType{
  email = "email",
  sms = "sms",
  web = "web", 
  mobile = "mobile"
}

enum Label{
  accountCreation = "accountcreation",
  webinarInvent = "webinarinvent",
  countReview = "countreview",
  inviteMember = "invitemember",
  memberCreated = "membercreated",
  webinarInvite = "webinarinvite",
  webinarRegistration = "webinarregistration",
  groupAdded = "groupadded",
  channelAdded = "channeladded"

}
export enum NotificationStatus{
  success = "success",
  failure = "failure"
}

// enum NotificationPurpose{
//   inviteMember = "inviteMember",
//   groupAdded = "groupAdded",
//   channelAdded = "channelAdded"
// }


// const entityJson = {
//     notificationType : "notificationType?",
//     notificationData : "notificationData?",
//   };
  
//   const dtoJson = {
//     notificationTypeDto : "notificationTypeDto?",
//     notificationDataDto : "notificationDataDto?",
//   };
  
//   const entityToDtoJson = {
//     notificationTypeDto : "notificationType?",
//     notificationDataDto : "notificationData?",
//   };
  
//   const dtoToEntityJson= {
//     notificationType : "notificationTypeDto?",
//     notificationData : "notificationDataDto?",
//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;