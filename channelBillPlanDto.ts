
import { DtoBase } from "../platform-3.0-Framework/entities/DtoBase";
import { ChannelDto } from "./channelDto";
import { PlanDto } from "./planDto";


export class ChannelBillPlanDto extends DtoBase{
  additionalDetails?: string;
  channelBillPlanDetails?: string;
  planStartDate?: Date;
  planEndDate?: Date;
  channelId?: number;
  planId?: number;
  channel?: ChannelDto;
//  planId ?: PlanDto;
  plan?: PlanDto;
}


// const entityJson = {
//   additionalDetails : "additionalDetails?",
// channelBillPlanDetails : "channelBillPlanDetails?",
// planStartDate : "planStartDate?",
// planEndDate : "planEndDate?",
// channelId : "channelId?",
// planId : "planId?"
// };

// const Json = {
//   additionalDetails : "additionalDetails?",
// channelBillPlanDetails : "channelBillPlanDetails?",
// planStartDate : "planStartDate?",
// planEndDate : "planEndDate?",
// channelId : "channelId?",
// planId : "planId?"
// };

// const entityToJson = {
//   additionalDetails : "additionalDetails?",
// channelBillPlanDetails : "channelBillPlanDetails?",
// planStartDate : "planStartDate?",
// planEndDate : "planEndDate?",
// channelId : "channelId?",
// planId : "planId?"
// };

// const ToEntityJson= {
//   additionalDetails : "additionalDetails?",
// channelBillPlanDetails : "channelBillPlanDetails?",
// planStartDate : "planStartDate?",
// planEndDate : "planEndDate?",
// channelId : "channelId?",
// planId : "planId?"
// };

// module.exports.entityJson = entityJson;
// module.exports.Json = Json;
// module.exports.entityToJson = entityToJson;
// module.exports.ToEntityJson = ToEntityJson;