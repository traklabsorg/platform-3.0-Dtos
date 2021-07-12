import { DtoBase } from "submodules/platform-3.0-Dtos/submodules/platform-3.0-Common/common/DtoBase";
export default class NuveproTeamDto extends DtoBase {
  name: string;
  nuveproTeamId: number;
  description: string;
  plan: number;
}
