import { Tenant } from "app/entities/tenant";
import { DtoBase } from "framework/entities/DtoBase"

export class UserDto extends DtoBase{
  user_idDto?: number;
  groupNameDto?: string;
  groupTypeDto?: string;
  groupDetailsDto?: string;
  tenantIdDto?: Tenant;
  
}

const entityJson = {
  user_id : "user_id?",
  groupName : "groupName?",
  groupType : "groupType?",
  groupDetails : "groupDetails?",
  tenantId : "tenantId?"
};

const dtoJson = {
  user_idDto : "user_idDto?",
groupNameDto : "groupNameDto?",
groupTypeDto : "groupTypeDto?",
groupDetailsDto : "groupDetailsDto?",
tenantIdDto : "tenantIdDto?"
};

const entityToDtoJson = {
  user_idDto : "user_id?",
groupNameDto : "groupName?",
groupTypeDto : "groupType?",
groupDetailsDto : "groupDetails?",
tenantIdDto : "tenantId?"
};

const dtoToEntityJson= {
  user_id : "user_idDto?",
groupName : "groupNameDto?",
groupType : "groupTypeDto?",
groupDetails : "groupDetailsDto?",
tenantId : "tenantIdDto?"
};

module.exports.entityJson = entityJson;
module.exports.dtoJson = dtoJson;
module.exports.entityToDtoJson = entityToDtoJson;
module.exports.dtoToEntityJson = dtoToEntityJson;