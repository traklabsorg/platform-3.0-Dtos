import { MeetingProvider } from "app/entities/meetingProvider";
import { User } from "app/entities/user";
import { DtoBase } from "framework/entities/DtoBase"

export class UserMeetingProviderDto extends DtoBase{
  user_meeting_provider_idDto?: number;
  userIdDto?: User;
  meetingProviderIdDto?: MeetingProvider;
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