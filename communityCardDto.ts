import { CommunityDto } from "./communityDto";
import { GroupDto } from "./groupDto";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class CommunityCardDto extends DtoBase {
    nameOnCard?: string;
    cardType?: string;
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    cardImage?: string;
    isActive?: boolean;
    additionalData?: AdditionalData;
    community: CommunityDto[];
    isDefault: boolean
}

export class AdditionalData {
    paymentMethod?: any;
    billingDetails?: any;

}

export class UpdateCommunityCardDto extends DtoBase {
    nameOnCard?: string;
    cardType?: string;
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    cardImage?: string;
    isActive?: boolean;
    additionalData?: string;
}