import { KPDataType } from "../../features/FormItems/ui/types/types";

type FormRadioType = {
  value: string;
  KP_name: string;
};

export const formRadioData: FormRadioType[] = [
  { value: "1", KP_name: "1" },
  { value: "2", KP_name: "2" },
  { value: "3", KP_name: "3" },
  { value: "4", KP_name: "4" },
];

type FormType = {
  KP_name: string;
  email: string;
};

export const formData: FormType[] = [
  {
    KP_name: "Василий Васильевич Васильев",
    email: "1@example.com",
  },
  {
    KP_name: "Петр Петрович Петров",
    email: "2@example.com",
  },
  {
    KP_name: "Семен Семенович Семенов",
    email: "3@example.com",
  },
  {
    KP_name: "Иван Иванович Иванов",
    email: "4@example.com",
  },
  {
    KP_name: "Артур Артурович Артуров",
    email: "5@example.com",
  },
  {
    KP_name: "Никита Никитович Никитов",
    email: "6@example.com",
  },
  {
    KP_name: "Даниил Даниилович Даниилов",
    email: "7@example.com",
  },
  {
    KP_name: "Олег Олегович Олегов",
    email: "8@example.com",
  },
];

export const KP_data: KPDataType[] = [
  {
    KP_id: 1,
    KP_code: "КП №1",
    KP_name: "Проверка достоверности ...",
    KP_description: "Ответственный представитель ...",
    KP_type: "Выявляющая",
    KP_frequency: "По мере необходимости",
    KP_conductingMethod: "Ручной",
  },
  {
    KP_id: 2,
    KP_code: "КП №2",
    KP_name: "Проверка корректности ...",
    KP_description: "Ответственный представитель ...",
    KP_type: "Выявляющая",
    KP_frequency: "По мере необходимости",
    KP_conductingMethod: "Ручной",
  },
  {
    KP_id: 3,
    KP_code: "КП №3",
    KP_name: "Проверка полноты ...",
    KP_description: "Ответственный представитель ...",
    KP_type: "Предупреждающая",
    KP_frequency: "По мере необходимости",
    KP_conductingMethod: "ИТ-зависимый",
  },
  {
    KP_id: 4,
    KP_code: "КП №4",
    KP_name: "Проверка достоверности",
    KP_description: "Ответственный представитель ...",
    KP_type: "Выявляющая",
    KP_frequency: "По мере необходимости",
    KP_conductingMethod: "Ручной",
  },
  {
    KP_id: 5,
    KP_code: "КП №5",
    KP_name: "Проверка достоверности",
    KP_description: "Ответственный представитель ...",
    KP_type: "Выявляющая",
    KP_frequency: "По мере необходимости",
    KP_conductingMethod: "Ручной",
  },
];
