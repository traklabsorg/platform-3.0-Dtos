import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
export default class NuveproUserDto extends DtoBase {
  nuveproId: number;
  userId: number;
  // userName: string;
  password: string;
  // firstName: string;
  // lastName: string;
  loginId: string;
  teamIds: number[];
  subscriptions: NuveproSubscription[];
}

class NuveproSubscription {
  teamId: string;
  subscriptionId: string;
}
