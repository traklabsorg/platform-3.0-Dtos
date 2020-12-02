import { Channel } from "app/entities/channel";
import { Plan } from "app/entities/plan";
import { DtoBase } from "framework/entities/DtoBase";

export class ChannelBillPlanDto extends DtoBase{
  additionalDetailsDto ?: string;
  channelBillPlanDetailsDto ?: string;
  planStartDateDto ?: Date;
  planEndDateDto ?: Date;
  channelIdDto ?: Channel;
  planIdDto ?: Plan;
}


const entityJson = {
  additionalDetails : "additionalDetails?",
channelBillPlanDetails : "channelBillPlanDetails?",
planStartDate : "planStartDate?",
planEndDate : "planEndDate?",
channelId : "channelId?",
planId : "planId?"
};

const dtoJson = {
  additionalDetailsDto : "additionalDetailsDto?",
channelBillPlanDetailsDto : "channelBillPlanDetailsDto?",
planStartDateDto : "planStartDateDto?",
planEndDateDto : "planEndDateDto?",
channelIdDto : "channelIdDto?",
planIdDto : "planIdDto?"
};

const entityToDtoJson = {
  additionalDetailsDto : "additionalDetails?",
channelBillPlanDetailsDto : "channelBillPlanDetails?",
planStartDateDto : "planStartDate?",
planEndDateDto : "planEndDate?",
channelIdDto : "channelId?",
planIdDto : "planId?"
};

const dtoToEntityJson= {
  additionalDetails : "additionalDetailsDto?",
channelBillPlanDetails : "channelBillPlanDetailsDto?",
planStartDate : "planStartDateDto?",
planEndDate : "planEndDateDto?",
channelId : "channelIdDto?",
planId : "planIdDto?"
};

module.exports.entityJson = entityJson;
module.exports.dtoJson = dtoJson;
module.exports.entityToDtoJson = entityToDtoJson;
module.exports.dtoToEntityJson = dtoToEntityJson;