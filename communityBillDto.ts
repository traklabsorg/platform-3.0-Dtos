import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
export class CommunityBillDto extends DtoBase {
    communityId?:string;
    billDate?:Date;
    title?:string;
    descritption?:string;
    totalUsers?:number;
    perUserFee?:number;
    tax?:string;
    totalCharges?:number;
    additionalDetails?:JSON;
    isPaid?:boolean;
}