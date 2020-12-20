

//Entity('logs')
export class Log{

  //Column({ name: 'issue_category_id',nullable:true })
  issueCategoryId: string;

  //Column({ name: 'issue_type_id',nullable:true })
  issueTypeId: string;
  //Column({ name: 'exception_message',nullable:true })
  exceptionMessage: string;
  //Column({ name: 'user_message',nullable:true })
  userMessage: string;
  //Column({ name: 'exception_type',nullable:true })
  exceptionType: string;
  //Column({ name: 'log_parameter_list',nullable:true })
  logParametreList: string;
  //Column({ name: 'stack_trace',nullable:true })
  stackTrace: string;
  //Column({ name: 'machine_name',nullable:true })
  machineName: string;
  //Column({ name: 'login_name',nullable:true })
  loginName: string;
  //Column({ name: 'error_class',nullable:true })
  errorClass: string;
  //Column({ name: 'error_method',nullable:true })
  errorMethod: string;
  //Column({ name: 'tenant_id',nullable:true })
  tenantId: number;
  //Column({ name: 'user_id',nullable:true })
  userId: number;
  //Column({ name: 'request_guid',nullable:true })
  requestGuid: string;
  //Column({ name: 'assembly_name',nullable:true })
  assemblyName: string;
  //Column({ name: 'request_model',nullable:true })
  requestModel: string;
  
  //CreateDateColumn({name:'creation_date',nullable:false, type: "timestamp with time zone", default: () => "CURRENT_TIMESTAMP" })
  CreationDate: Date;
  
  //Column({ name: 'application_id',nullable:true })
  applicationId: number;

  //Column({ name: 'inner_exctieption',nullable:true })
  innerException: string;



  
}