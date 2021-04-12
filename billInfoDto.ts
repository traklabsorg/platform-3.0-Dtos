import { DtoBase } from './submodules/platform-3.0-Common/common/DtoBase';

export class BillInfoDto extends DtoBase {
    billId? : number;
    billDate? : string;
    title? : string;
    description? : string;
    totalUsers? : number;
    perUserFee? : number;
    currency? : string;
    tax? : number;
    totalCharges? : number;
    totalrecords? : number;
}

