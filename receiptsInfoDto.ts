import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class ReceiptsInfoDto extends DtoBase {
	groupName?: number;
	userName?: number;
	billAmt?: number;
	cuttOff?: number;
	channelName?: string;
	totalPay?: number;
	totalRecords?: number;
	firstname?: string;
	lastname?: string;
	timestamp?: string;
	transactionId?: number;
	stripeTransactionId?: number;
	email?: string;
	chargingType?: string;
	channelFee?: number;
	amountCollected?: number;
	netPayout?: number;
	platformFee?: number;
	stripeFees?: number;
	currency?: string;
	invoiceUrl?: string;
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