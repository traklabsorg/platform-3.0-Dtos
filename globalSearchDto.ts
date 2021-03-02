import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";

export class GlobalSearchDto extends DtoBase {
  fieldId: number;
  fieldValue: number;
  fieldType: number;
  totalRecords: number;
  additionalDetails: AdditionalDetails;
}

export class AdditionalDetails {
  type?: string;
  title?: string;
  groupName?: string;
  topic?: string;
  date?: string;
  channelName?: string;
  totalRecords?: string;
}
