// import { ChannelBillPlan } from "app/platform-3.0-Entities/channelBillPlan";
// import { SubscriptionOrder } from "app/platform-3.0-Entities/subscriptionOrder";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { ChannelBillPlanDto } from "./channelBillPlanDto";
import { SubscriptionOrderDto } from "./subscriptionOrderDto";

export class SubscriptionDto extends DtoBase {
    subscriptionDetails?: string;
    isAutoRenew?: boolean;
    isActive?: boolean;
    subscriptionType?: string;
    startDateTime?: Date;
    endDateTime?: Date;
    transactionDateTime?: Date;
    channelBillPlanId?: number;
    //    channelBillPlanId?: ChannelBillPlanDto;
    channelBillPlan?: ChannelBillPlanDto;
    subscriptionOrder?: SubscriptionOrderDto[];
}

// const entityJson = {
//     subscriptionDetails : "subscriptionDetails?",
//     isAutoRenew : "isAutoRenew?",
//     isActive : "isActive?",
//     subscriptionType : "subscriptionType?",
//     startDateTime : "startDateTime?",
//     endDateTime : "endDateTime?",
//     transactionDateTime : "transactionDateTime?",
//     channelBillPlanId : "channelBillPlanId?",
//     subscriptionOrders : "subscriptionOrders?",
//   };

//   const dtoJson = {
//     subscriptionDetailsDto : "subscriptionDetailsDto?",
//     isAutoRenewDto : "isAutoRenewDto?",
//     isActiveDto : "isActiveDto?",
//     subscriptionTypeDto : "subscriptionTypeDto?",
//     startDateTimeDto : "startDateTimeDto?",
//     endDateTimeDto : "endDateTimeDto?",
//     transactionDateTimeDto : "transactionDateTimeDto?",
//     channelBillPlanIdDto : "channelBillPlanIdDto?",
//     subscriptionOrdersDto : "subscriptionOrdersDto?",
//   };

//   const entityToDtoJson = {
//     subscriptionDetailsDto : "subscriptionDetails?",
//     isAutoRenewDto : "isAutoRenew?",
//     isActiveDto : "isActive?",
//     subscriptionTypeDto : "subscriptionType?",
//     startDateTimeDto : "startDateTime?",
//     endDateTimeDto : "endDateTime?",
//     transactionDateTimeDto : "transactionDateTime?",
//     channelBillPlanIdDto : "channelBillPlanId?",
//     subscriptionOrdersDto : "subscriptionOrders?",
//   };

//   const dtoToEntityJson= {
//     subscriptionDetails : "subscriptionDetailsDto?",
//     isAutoRenew : "isAutoRenewDto?",
//     isActive : "isActiveDto?",
//     subscriptionType : "subscriptionTypeDto?",
//     startDateTime : "startDateTimeDto?",
//     endDateTime : "endDateTimeDto?",
//     transactionDateTime : "transactionDateTimeDto?",
//     channelBillPlanId : "channelBillPlanIdDto?",
//     subscriptionOrders : "subscriptionOrdersDto?",
//   };

//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;