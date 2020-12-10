import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";


export class NotificationDto extends DtoBase{
  notificationType: string;
  notificationData: string;
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