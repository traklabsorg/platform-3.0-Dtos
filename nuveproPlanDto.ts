import { DtoBase } from "submodules/platform-3.0-Dtos/submodules/platform-3.0-Common/common/DtoBase";
export default class PlanDto extends DtoBase {
  name: string;
  price: string;
  description: string;
  nuveproPlanId: string;
}
