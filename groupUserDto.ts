import { DtoBase } from "./DtoBase";
import { GroupDto } from "./groupDto";
import { UserDto } from "./userDto";


export class GroupUserDto extends DtoBase{
  groupUserDetails?: string;
  groupId?: number;
  userId?: number;
  groupImage?: string;
  group?: GroupDto;
  user?: UserDto;
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