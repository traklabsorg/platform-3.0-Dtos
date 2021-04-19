import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class ReceiptsInfoDto extends DtoBase {
	groupName?: string;
	userName?: string;
	billAmt?: number;
	cuttOff?: number;
	channelName?: string;
	totalPay?: number;
	totalRecords?: number;
}

export class PaymentReceiptDto {
	"Timestamp"?: string;
	"Transaction ID"?: string;
	"Stripe Transaction ID"?: string;
	"Email"?: string;
	"Username"?: string;
	"First Name"?: string;
	"Last Name"?: string;
	"Group"?: string;
	"Channel"?: string;
	"Charging Type"?: string;
	"Channel Fee"?: number;
	"Amount Collected"?: number;
	"Net Payout"?: number;
	"Platform Fee"?: number;
	"Stripe Fees Currency"?: string;
	"Invoice URL"?: string;
}