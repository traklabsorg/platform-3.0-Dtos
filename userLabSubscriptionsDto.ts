import NuveproPlanDto from './nuveproPlanDto';
import { DtoBase } from './submodules/platform-3.0-Common/common/DtoBase';
export default class UserLabSubscriptionsDto extends DtoBase {
    teamId?: any;
    planDetails?: NuveproPlanDto;
    subscriptionId: number | string
}