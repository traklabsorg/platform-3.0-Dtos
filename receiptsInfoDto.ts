import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class ReceiptsInfoDto extends DtoBase {
	groupName?: string;
	userName?: string;
	billAmt?: number;
	cuttOff?: number;
	channelName?: string;
	totalPay?: number;
	totalRecords?: number;
	firstName?: string;
	lastName?: string;
	timestamp?: string;
	transactionId?: number;
	stripeTransactionId?: string;
	email?: string;
	chargingType?: string;
	channelFee?: number;
	amountCollected?: number;
	netPayout?: number;
	feeDetails?: any;
	currency?: string;
	invoiceUrl?: string;
	channelImage?: string; 
}

export class PaymentReceiptDto {
	"Timestamp"?: string;
	"Transaction ID"?: number;
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
	"Stripe Fees"?: number;
	"Currency"?: string;
	"Invoice URL"?: string;
}