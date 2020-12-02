import { UserMeetingProvider } from "app/entities/userMeetingProvider";
import { DtoBase } from "framework/entities/DtoBase"

export class UserMeetingProviders_MeetingDto extends DtoBase{
  user_meeting_providers_meeting_idDto?: number;
  userMeetingProviderIdDto?: UserMeetingProvider;
  meetingDetailDto?: string;
  meetingStartDateTimeDto?: Date;
  meetingEndDateTimeDto?: Date;
}

const entityJson = {

};

const dtoJson = {
  
};

const entityToDtoJson = {
  
};

const dtoToEntityJson= {
  
};

module.exports.entityJson = entityJson;
module.exports.dtoJson = dtoJson;
module.exports.entityToDtoJson = entityToDtoJson;
module.exports.dtoToEntityJson = dtoToEntityJson;