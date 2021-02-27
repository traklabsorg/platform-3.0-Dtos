import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { GroupDto } from "./groupDto";
import { UserDto } from "./userDto";

export class GroupUserDto extends DtoBase {
  groupUserDetails?: GroupUserDetails;
  groupId?: number;
  userId?: number;
  groupImage?: string;
  roleIds?: Array<number>;
  group?: GroupDto;
  user?: UserDto;
  invitationStatus ?: InvitationStatus
}

export class GroupUserDetails{
  groupUserEncryptedData?: GroupUserEncryptedData
}

export class InviteMemberByMailDto extends DtoBase{
  email:string;
  communityId:number;
  groupId:number;
  userId:number;
}




export enum InvitationStatus{
  accepted = "ACCEPTED",
  rejected = "REJECTED",
  pending = "PENDING",
  revoked = "REVOKED"
}


export class GroupUserEncryptedData{
  keyLength?: number;
  key?: any;
  algorithm?: string;
  iv?: any;
  password?: string;
  date?: Date;

  constructor(keyLength?:number,key?:any,algorithm?:string,iv?:any,password?:string,date?:Date)
  {
    this.keyLength = keyLength;
    this.key = key;
    this.algorithm = algorithm;
    this.iv = iv;
    this.password = password;
    this.date = date;
  }
}

// const entityJson = {
//   group_user_id : "group_user_id?",
//   groupUserDetails : "groupUserDetails?",
//   groupId : "groupId?",
//   userId : "userId?"
// };

// const dtoJson = {
//   group_user_idDto : "group_user_idDto?",
// groupUserDetailsDto : "groupUserDetailsDto?",
// groupIdDto : "groupIdDto?",
// userIdDto : "userIdDto?"
// };

// const entityToDtoJson = {
//   group_user_idDto : "group_user_id?",
// groupUserDetailsDto : "groupUserDetails?",
// groupIdDto : "groupId?",
// userIdDto : "userId?"
// };

// const dtoToEntityJson= {
//   group_user_id : "group_user_idDto?",
// groupUserDetails : "groupUserDetailsDto?",
// groupId : "groupIdDto?",
// userId : "userIdDto?"
// };

// module.exports.entityJson = entityJson;
// module.exports.dtoJson = dtoJson;
// module.exports.entityToDtoJson = entityToDtoJson;
// module.exports.dtoToEntityJson = dtoToEntityJson;
