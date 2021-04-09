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
    additionalData?: string;
    community: CommunityDto[];
    group: GroupDto;
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