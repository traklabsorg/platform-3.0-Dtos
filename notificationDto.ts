import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";


export class NotificationDto extends DtoBase{
  notificationType?: NotificationType;
  notificationData?: NotificationData;
  userId?: number;
  userEmail?: string;
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
  accountCreation = "Account Creation",
  webinarInvent = "Webinar Invent",
  countReview = "Count Review",
  inviteMember = "Invite Member",
  memberCreated = "Member Created",
  webinarInvite = "Webinar Invite",
  webinarRegistration = "Webinar Registration",
  groupAdded = "Group Added",
  channelAdded = "Channel Added",
  inviteCollaborator = "Invite Collaborator",
  lessonRejected = "Lesson Rejected",
  courseRejected = "Course Rejected",
  newCourse = "New Course",
  newLesson = "New Lesson",
  createCommunity = "Create Community",
  createGroupAdmin = "Create Group Admin",
  lessonPublished =  "Lesson Published",
  lessonSubmitted =  "Lesson Submitted",
  courseSubmitted =  "Course Submitted",
  coursePublished = "Course Published",
  lessonFeatured = "Lesson Featured",
  coursFeatured = "Course Featured",
  userRoleChange = "User Role Change"
}
export enum NotificationStatus{
  success = "success",
  failure = "failure"
}



export interface INotificationData{}

export interface InviteMember extends INotificationData{
   communityId? : number; 
   communityAdmin? : string;
   link? : string;
}

export interface MemberCreated extends INotificationData{
  communityId? : number;
  name? : string;
  communityUrl? : string;
}

export interface WebinarInvite extends INotificationData{
  invitedUserName? : string;
  liveContentId? : number;
  webinarTitle? : string;
  webinarPageLink? : string;
  zoomLink? : string;
}

export interface WebinarRegistration extends INotificationData{
  liveContentId? : number;
  zoomLink? : string;
}

export interface GroupAdded extends INotificationData{
  groupId? : number;
  groupName? : string;
  createdBy? : string;
}

export interface ChannelAdded extends INotificationData{
  channelId? : number;
  channelName? : string;
  createdBy? : string;
}

export interface LessonSubmitted extends INotificationData{
  lessonId? : number; 
  learnerName? : string;
  lessonTitle? : string;
  lessonLink? : string;
}

export interface LessonPublished extends INotificationData{
  lessonId? : number;
  lessonTitle? : string;
  channelName? : string;
  lessonLink? : string;
}

export interface NewLesson extends INotificationData{
  lessonId? : number;
  lessonTitle? : string;
  streamName? : string;
  channelName? : string;
}

export interface LessonRejected extends INotificationData{
  lessonId? : number;
  lessonTitle? : string;
  lessonLink? : string;
}

export interface CourseSubmitted extends INotificationData{
  courseId? : number;
  learnerName? : string;
  courseTitle? : string;
  courseLink? : string;
}

export interface CoursePublished extends INotificationData{
  courseId? : number;
  courseTitle? : string;
  channelName? : string;
  courseLink? : string;
}

export interface NewCourse extends INotificationData{
  courseId? : number;
  courseTitle? : string;
  channelName? : string;
  courseLink? : string;
}

export interface CourseRejected extends INotificationData{
  courseId? : number;
  courseTitle? : string;
  courseLink? : string;
}

export interface CreateCommunityAdmin extends INotificationData{
//  communityId? : number;
  communityUrl? : string;
  
}

export interface MadeGroupAdmin extends INotificationData{
  groupId? : number;
  groupName? : string;
  
}

export interface InviteCollaborator extends INotificationData{
  lessonOrCourseId? : number;
  authorName? : string;
  lessonOrCourseName? : string;
}

export interface LessonFeatured extends INotificationData{
  lessonId? : number;
  lessonTitle? : string;
  channelName? : string;
  lessonLink? : string;
}

export interface CourseFeatured extends INotificationData{
  courseId? : number;
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
  webinarTitle?:string;
  notificationEmailMessage?:string;
  communityAdmin?: string;
  link?: string;
  name?: string;
  communityUrl?: string;
  invitedUserName?: string;
  liveContentId?: number;
  webinarPageLink?: string;
  webinarTitle?: string;
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
  communityId? : number; 
  courseId? : number;
  groupId? : number;
  channelId? : number; 
  lessonId? : number;
  lessonOrCourseId? : number; 
  notificationMessage? : string;
  notificationEmailMessage? : string;
  
  
}

export class UpdateNotificationDto extends DtoBase{
  isRead?: boolean; 
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