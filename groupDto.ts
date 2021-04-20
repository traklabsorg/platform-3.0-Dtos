import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { CommunityDto } from "./communityDto";
import { GroupUserDto } from "./groupUserDto";
import { ChannelGroupDto } from "./channelGroupDto";

export class GroupDto extends DtoBase {
  groupName?: string;
  groupType?: string;
  groupDetails?: GroupDetails;
  groupPayerType?: GroupPayerType;
  communityId?: number;
  isActive?: string;
  community?: CommunityDto;
  channelGroup?: ChannelGroupDto[];

  groupUser: GroupUserDto[];
}

export enum GroupPayerType {
  SELF = "self",
  COMMUNITY = "community"
}

interface CreditCard {
  cardType?: string;
  nameOnCard?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

interface GroupDetails {
  description?: string;
  coverImage?: string;
  profileImage?: string;
  creditCards?: Array<CreditCard>;
}