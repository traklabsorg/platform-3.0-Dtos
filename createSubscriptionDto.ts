import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
export default class CreateSubscriptionDto extends DtoBase {
  subscriptionId: number;
  userId: string;
  companyId: number;
  planId: string;
  teamId: number;
  action: string;
  status: string;
  userAccess: UserAccess[];
}

class UserAccess {
  key: string;
  value: string
}
