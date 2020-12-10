// import { Injectable } from "@nestjs/common";
// import { ModulesContainer } from "@nestjs/core";
import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
// import { DtoBase } from "framework/entities/DtoBase"

export class TenantDto extends DtoBase{
  tenant_idDto?: number;
  communityNameDto?: string;
  addressDto?: string;
  communityAdminIdDto?: number;
  payment_infoDto?: string;
  subsciptionStartDateDto?: Date;
  subsciptionEndDateDto?: Date;

}

// const entityJson = {
//   tenant_id : "tenant_id?",
//   communityName : "communityName?",
//   address : "address?",
//   communityAdminId : "communityAdminId?",
//   payment_info : "payment_info?",
//   subsciptionStartDate : "subsciptionStartDate?",
//   subsciptionEndDate : "subsciptionEndDate?"
// };

// const dtoJson = {
//   tenant_idDto : "tenant_idDto?",
//   communityNameDto : "communityNameDto?",
//   addressDto : "addressDto?",
//   communityAdminIdDto : "communityAdminIdDto?",
//   payment_infoDto : "payment_infoDto?",
//   subsciptionStartDateDto : "subsciptionStartDateDto?",
//   subsciptionEndDateDto : "subsciptionEndDateDto?"
// };

// const entityToDtoJson = {
//   tenant_idDto : "tenant_id?",
//   communityNameDto : "communityName?",
//   addressDto : "address?",
//   communityAdminIdDto : "communityAdminId?",
//   payment_infoDto : "payment_info?",
//   subsciptionStartDateDto : "subsciptionStartDate?",
//   subsciptionEndDateDto : "subsciptionEndDate?"
// };

// const dtoToEntityJson= {
//   tenant_id : "tenant_idDto?",
//   communityName : "communityNameDto?",
//   address : "addressDto?",
//   communityAdminId : "communityAdminIdDto?",
//   payment_info : "payment_infoDto?",
//   subsciptionStartDate : "subsciptionStartDateDto?",
//   subsciptionEndDate : "subsciptionEndDateDto?"
// };

// module.exports.entityJson = entityJson;
// module.exports.dtoJson = dtoJson;
// module.exports.entityToDtoJson = entityToDtoJson;
// module.exports.dtoToEntityJson = dtoToEntityJson;
// export const Maps {
  
  
  
  

  // constructor() {
  //   this.entityJson = 
  //   this.dtoJson = 
  //   this.entityToDtoJson = 
  //   this.dtoToEntityJson = 

  // }

// }