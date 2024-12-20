// Тип для заголовка КП, пункты 2-10
export type KPDataType = {
  KP_id: number; // id КП в базе
  KP_code: string; // код КП
  KP_name: string; // название КП
  KP_description: string; // описание
  KP_type: string; // тип
  KP_frequency: string; // частота проверки
  KP_conductingMethod: string; // способ проведения
  KP_number?: number; // количество проверок
  KP_errorsNumber?: number; // количество ошибок
};

// Тип для тела КП, п. 11-20
export type KPContentType = {
  KP_date: string; // дата выполнения КП
  KP_check_number: number; // количество проверок
  KP_results_description: string; // результаты выполнения КП
  KP_errors_number: number; // количество выявленных ошибок
  KP_information: string; // сведения об объекте контроля
  KP_contracts_total_number: number; // общее количество договоров
  KP_checked_contracts_number: number; // количество проверенных договоров
  KP_first_accounting_documents_number: number; // общее количество первичных учетных документов
  KP_checked_first_accounting_documents_number: number; // количество проверенных первичных учетных документов
  KP_operations_number: number; // общее количество операций
  KP_checked_operations_number: number; // количество проверенных операций
};

// Тип для таблицы чек-листов
export type CheckListType = {
  CHL_id: string;
  CHL_status: string;
  CHL_filial: string;
  CHL_responsibleDepartment?: string;
  // CHL_controlObject: string;
  CHL_createDate: Date;
  CHL_editDate: Date;
  CHL_executor: string;
};
