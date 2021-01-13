// import { Section } from "app/platform-3.0-Entities/section";
import { DtoBase } from "./submodules/platform-3.0-Common/common/DtoBase";
import { SectionDto } from "./sectionDto";


export class ContentDto extends DtoBase{
    contentType: string;
    contentTemplateId: number;
    contentDetails: string;
    sectionId: SectionDto;
}

// const entityJson = {
//     contentType : "contentType?",
//     contentTemplateId : "contentTemplateId?",
//     contentDetails : "contentDetails?",
//     sectionId : "sectionId?",
//   };
  
//   const dtoJson = {
//     contentTypeDto : "contentTypeDto?",
//     contentTemplateIdDto : "contentTemplateIdDto?",
//     contentDetailsDto : "contentDetailsDto?",
//     sectionIdDto : "sectionIdDto?",
//   };
  
//   const entityToDtoJson = {
//     contentTypeDto : "contentType?",
//     contentTemplateIdDto : "contentTemplateId?",
//     contentDetailsDto : "contentDetails?",
//     sectionIdDto : "sectionId?",    
//   };
  
//   const dtoToEntityJson= {
//     contentType : "contentTypeDto?",
//     contentTemplateId : "contentTemplateIdDto?",
//     contentDetails : "contentDetailsDto?",
//     sectionId : "sectionIdDto?",
//   };
  
//   module.exports.entityJson = entityJson;
//   module.exports.dtoJson = dtoJson;
//   module.exports.entityToDtoJson = entityToDtoJson;
//   module.exports.dtoToEntityJson = dtoToEntityJson;