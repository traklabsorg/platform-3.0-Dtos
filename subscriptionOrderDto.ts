// import { ChannelBillPlan } from "app/platform-3.0-Entities/channelBillPlan";
import { DtoBase } from "../platform-3.0-Framework/submodules/platform-3.0-Common/common/DtoBase";
// import { Subscription } from "rxjs";
import { ChannelBillPlanDto } from "./channelBillPlanDto";
import { SubscriptionDto } from "./subscriptionDto";

export class SubscriptionOrderDto extends DtoBase{
    orderStatus?: string;
    orderDateTime?: Date;
    orderDetails?: string;
    subscriptionId?: number;
    subscription?: SubscriptionDto;
//    title: string;
//    channelType: string;
//    channelDetails: string;
//    subscriptionId: SubscriptionDto;
//    channelBillPlans: ChannelBillPlanDto[];
}

// const entityJson = {
//     title : "title?",
//     channelType : "channelType?",
//     channelDetails : "channelDetails?",
//     subscriptionId : "subscriptionId?",
//     channelBillPlans : "channelBillPlans?",
//   };
  
//   const dtoJson = {
//     titleDto : "titleDto?",
//     channelTypeDto : "channelTypeDto?",
//     channelDetailsDto : "channelDetailsDto?",
//     subscriptionIdDto : "subscriptionIdDto?",
//     channelBillPlansDto : "channelBillPlansDto?",
//   };
  
//   const entityToDtoJson = {
//     titleDto : "title?",
//     channelTypeDto : "channelType?",
//     channelDetailsDto : "channelDetails?",
//     subscriptionIdDto : "subscriptionId?",
//     channelBillPlansDto : "channelBillPlans?",
//   };
  
//   const dtoToEntityJson= {
//     title : "titleDto?",
//     channelType : "channelTypeDto?",
//     channelDetails : "channelDetailsDto?",
//     subscriptionId : "subscriptionIdDto?",
//     channelBillPlans : "channelBillPlansDto?",

//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;