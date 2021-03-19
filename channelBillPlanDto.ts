
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { ChannelDto } from "./channelDto";
import { PlanDto } from "./planDto";
import { SubscriptionDto } from "./subscriptionDto";


export class ChannelBillPlanDto extends DtoBase{
  additionalDetails?: AdditionalDetails;
  channelBillPlanDetails?: string;
  planStartDate?: Date;
  planEndDate?: Date;
  channelId?: number;
  planId?: number;
  channel?: ChannelDto;
  plan?: PlanDto;
  subscription?: SubscriptionDto[];
}

export class AdditionalDetails{
  price?: number;
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