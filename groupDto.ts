// import { Tenant } from "app/platform-3.0-Entities/tenant";
import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { ChannelDto } from "./channelDto";
import { CommunityDto } from "./communityDto";
import { GroupUserDto } from "./groupUserDto";

export class GroupDto extends DtoBase{
  groupName: string;
  groupType: string;
  groupDetails: string;
  groupPayerType: string;
  channels: ChannelDto[];
  groupUsers : GroupUserDto[]
  community : CommunityDto;
}

// const entityJson = {
//   group_id : "group_id?",
//   groupName : "groupName?",
//   groupType : "groupType?",
//   groupDetails : "groupDetails?",
//   tenantId : "tenantId?"
// };

// const dtoJson = {
//   group_idDto : "group_idDto?",
// groupNameDto : "groupNameDto?",
// groupTypeDto : "groupTypeDto?",
// groupDetailsDto : "groupDetailsDto?",
// tenantIdDto : "tenantIdDto"
// };

// const entityToDtoJson = {
//   group_idDto : "group_id?",
// groupNameDto : "groupName?",
// groupTypeDto : "groupType?",
// groupDetailsDto : "groupDetails?",
// tenantIdDto : "tenantId?"
// };

// const dtoToEntityJson= {
//   group_id : "group_idDto?",
// groupName : "groupNameDto?",
// groupType : "groupTypeDto?",
// groupDetails : "groupDetailsDto?",
// tenantId : "tenantIdDto?",
// };

// module.exports.entityJson = entityJson;
// module.exports.dtoJson = dtoJson;
// module.exports.entityToDtoJson = entityToDtoJson;
// module.exports.dtoToEntityJson = dtoToEntityJson;