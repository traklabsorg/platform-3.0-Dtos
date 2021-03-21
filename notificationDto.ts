import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";


export class NotificationDto extends DtoBase{
  notificationType?: NotificationType;
  notificationData?: NotificationData;
  userId?: number;
  isRead?: boolean; 
  dateTime?: Date;
  label?: Label;
 // notificationPurpose?: NotificationPurpose;
  notificationStatus?: NotificationStatus;
}

export enum NotificationType{
  email = "email",
  sms = "sms",
  web = "web", 
  mobile = "mobile"
}

export enum Label{
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



export interface INotificationData{}

export interface InviteMember extends INotificationData{
   communityAdmin? : string;
   link? : string;
}

export interface MemberCreated extends INotificationData{
  name? : string;
  communityUrl? : string;
}

export interface WebinarInvite extends INotificationData{
  invitedUserName? : string;
  liveContentId? : string;
  webinarPageLink? : string;
}

export interface WebinarRegistration extends INotificationData{
  liveContentId? : string;
  zoomLink? : string;
}

export interface GroupAdded extends INotificationData{
  groupName? : string;
  createdBy? : string;
}

export interface ChannelAdded extends INotificationData{
  channelName? : string;
  createdBy? : string;
}

export interface LessonSubmitted extends INotificationData{
  learnerName? : string;
  lessonTitle? : string;
  lessonLink? : string;
}

export interface LessonPublished extends INotificationData{
  lessonTitle? : string;
  channelName? : string;
  lessonLink? : string;
}

export interface NewLesson extends INotificationData{
  lessonTitle? : string;
  streamName? : string;
  channelName? : string;
}

export interface LessonRejected extends INotificationData{
  lessonTitle? : string;
  lessonLink? : string;
}

export interface CourseSubmitted extends INotificationData{
  learnerName? : string;
  courseTitle? : string;
  courseLink? : string;
}

export interface CoursePublished extends INotificationData{
  courseTitle? : string;
  channelName? : string;
  courseLink? : string;
}

export interface NewCourse extends INotificationData{
  courseTitle? : string;
  channelName? : string;
  courseLink? : string;
}

export interface CourseRejected extends INotificationData{
  courseTitle? : string;
  courseLink? : string;
}

export interface CreateCommunityAdmin extends INotificationData{
  communityUrl? : string;
  
}

export interface MadeGroupAdmin extends INotificationData{
  groupName? : string;
  
}

export interface InviteCollaborator extends INotificationData{
  authorName? : string;
  lessonOrCourseName? : string;
}

export interface LessonFeatured extends INotificationData{
  lessonTitle? : string;
  channelName? : string;
  lessonLink? : string;
}

export interface CourseFeatured extends INotificationData{
  courseTitle? : string;
  channelName? : string;
  courseLink? : string;
}

export interface CommunityBillMonthly extends INotificationData{
  month? : string;
  billingPageUrl? : string;
}

export interface LearnerBill extends INotificationData{
  month? : string;
  billingPageUrl? : string;
}

export interface CardExpiry extends INotificationData{
  
}

export interface NotificationData extends INotificationData{
  communityAdmin?: string;
  link?: string;
  name?: string;
  communityUrl?: string;
  invitedUserName?: string;
  liveContentId?: string;
  webinarPageLink?: string;
  zoomLink?: string;
  groupName?: string;
  createdBy?: string;
  channelName?: string;
  learnerName?: string;
  lessonTitle?: string;
  lessonLink?: string;
  streamName?: string;
  courseTitle?: string;
  courseLink?: string;
  authorName?: string;
  lessonOrCourseName?: string;
  month?: string;
  billingPageUrl?: string;
  
  
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