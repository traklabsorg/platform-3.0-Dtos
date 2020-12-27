import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { ChannelBillPlanDto } from "./channelBillPlanDto";

export class PlanDto extends DtoBase{
  planName?: string;
  planDetails?: string;
  planDefaultPrice?: string;
  planCurrency?: string;
//  channelBillPlans: ChannelBillPlanDto[];
}

// const entityJson = {
//   plan_id : "plan_id?",
//   planName : "planName?",
//   planDetails : "planDetails?"
// };

// const dtoJson = {
//   plan_idDto : "plan_idDto?",
// planNameDto : "planNameDto?",
// planDetailsDto : "planDetailsDto?"
// };

// const entityToDtoJson = {
//   plan_idDto : "plan_id?",
// planNameDto : "planName?",
// planDetailsDto : "planDetails?"
// };

// const dtoToEntityJson= {
//   plan_id : "plan_idDto?",
// planName : "planNameDto?",
// planDetails : "planDetailsDto?"
// };

// module.exports.entityJson = entityJson;
// module.exports.dtoJson = dtoJson;
// module.exports.entityToDtoJson = entityToDtoJson;
// module.exports.dtoToEntityJson = dtoToEntityJson;