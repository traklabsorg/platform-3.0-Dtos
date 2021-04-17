
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class CommunityBillDto extends DtoBase {
    communityId?:string;
    billDate?:Date;
    title?:string;
    description?:string;
    totalUsers?:number;
    perUserFee?:number;
    tax?:number;
    totalCharges?:number;
    invoiceUrl?:string;
    additionalDetails?:JSON;
    isPaid?:boolean;
}