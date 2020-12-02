import { ChannelBillPlan } from "app/entities/channelBillPlan";
import { Subscription } from "app/entities/subscription";
import { DtoBase } from "framework/entities/DtoBase";

export class SubscriptionOrderDto extends DtoBase{
    title: string;
    channelType: string;
    channelDetails: string;
    subscriptionId: Subscription;
    channelBillPlans: ChannelBillPlan[];
}

const entityJson = {
    title : "title?",
    channelType : "channelType?",
    channelDetails : "channelDetails?",
    subscriptionId : "subscriptionId?",
    channelBillPlans : "channelBillPlans?",
  };
  
  const dtoJson = {
    titleDto : "titleDto?",
    channelTypeDto : "channelTypeDto?",
    channelDetailsDto : "channelDetailsDto?",
    subscriptionIdDto : "subscriptionIdDto?",
    channelBillPlansDto : "channelBillPlansDto?",
  };
  
  const entityToDtoJson = {
    titleDto : "title?",
    channelTypeDto : "channelType?",
    channelDetailsDto : "channelDetails?",
    subscriptionIdDto : "subscriptionId?",
    channelBillPlansDto : "channelBillPlans?",
  };
  
  const dtoToEntityJson= {
    title : "titleDto?",
    channelType : "channelTypeDto?",
    channelDetails : "channelDetailsDto?",
    subscriptionId : "subscriptionIdDto?",
    channelBillPlans : "channelBillPlansDto?",

  };
  
  module.exports.entityJson = entityJson;
  module.exports.dtoJson = dtoJson;
  module.exports.entityToDtoJson = entityToDtoJson;
  module.exports.dtoToEntityJson = dtoToEntityJson;