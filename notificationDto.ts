import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";


export class NotificationDto extends DtoBase{
  notificationType?: NotificationType;
  notificationData?: string;
  userId?: string;
  isRead?: boolean; 
  dateTime?: Date;
}

enum NotificationType{
  email = "email",
  sms = "sms",
  web = "web",
  mobile = "mobile"
}


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