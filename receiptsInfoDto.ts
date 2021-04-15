import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class ReceiptsInfoDto extends DtoBase {
    
    groupName? : number;
	userName? : number; 
	billAmt? : number; 
	cuttOff? : number;
	channelName? : string; 
	totalPay? : number; 
	totalRecords? : number; 
}
  