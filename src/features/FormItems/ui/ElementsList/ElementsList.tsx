import React from "react";
import { Form, Col, DatePicker, FormInstance, Row } from "antd";
import { Button } from "../../../../shared/ui/Button/Button";
import { BiPlus } from "react-icons/bi";
import { ElementsListWrapper } from "./ElementsListWrapper";
import InputNumber from "../InputNumber/InputNumber";
import FormItem from "../FormItem/FormItem";
import { colors } from "../../../../shared/assets/colors";
import { InputText } from "../../../../shared/ui/FormItems";
import { KPContentType } from "../types/types";
import { valueType } from "antd/es/statistic/utils";

type Props = {
  formName: string;
  form: FormInstance<any>;
  setErrorsNumber: () => void;
  onChangeLength: () => void;
};

const ElementsList: React.FC<Props> = ({
  formName,
  form,
  setErrorsNumber,
  onChangeLength,
}: Props) => {
  const [element, setElement] = React.useState<KPContentType>(
    {} as KPContentType,
  );

  const onChange = (name: string, value: any) => {
    setElement((prevElement) => ({ ...prevElement, [name]: value }));
    form.setFieldsValue({ [name]: value });
  };

  const handleChangeKPErrors = (value: valueType | null) => {
    if (typeof value !== "number" || !value) return;

    onChange("KP_errors_number", value);
    setErrorsNumber();
  };

  const handleChandeKPNumber = (value: valueType | null) => {
    if (typeof value !== "number" || !value) return;

    onChange("KP_number", value);
    onChangeLength();
  };

  return (
    <ElementsListWrapper>
      <p className="title-1">Периоды контроля</p>
      <Form.List name={formName}>
        {(fields, { add, remove }) => {
          const handleRemove = (name: number) => {
            remove(name);
            setErrorsNumber();
            onChangeLength();
          };

          return (
            <>
              {fields.map(({ key, name }) => (
                <div key={key} className="periodWrapper">
                  <Row
                    align="middle"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      width: "100%",
                    }}
                    key={name + key + "row"}
                  >
                    <Col flex={1} key={name + "col"}>
                      <Row>
                        <Col flex={1}>Дата выполнения КП</Col>
                        <Col flex={5}>
                          <Form.Item
                            name={[name, "KP_date"]}
                            initialValue={element.KP_date}
                          >
                            <DatePicker
                              allowClear
                              translate="yes"
                              lang="ru"
                              format={"DD.MM.YYYY"}
                              value={element.KP_date}
                              style={{ width: "100%" }}
                              placeholder="Дата выполнения КП"
                              onChange={(_, dateString) => {
                                onChange("KP_date", dateString);
                              }}
                            />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row className="title-row">
                        <p className="title-2">
                          Результаты выполнениия выполнения
                        </p>
                        <p className="title-2">контрольных процедур</p>
                      </Row>

                      <FormItem
                        divider
                        title="Количество проверок"
                        name={[name, "KP_check_number"]}
                        initialValue={0}
                      >
                        <InputNumber
                          onChange={handleChandeKPNumber}
                          value={element.KP_check_number}
                          placeholder="Количество проверок"
                        />
                      </FormItem>

                      <FormItem
                        divider
                        title="Результаты выполнения КП"
                        name={[name, "KP_results_description"]}
                      >
                        <InputText
                          autoSize
                          allowClear
                          placeholder="Результаты выполнения КП"
                        />
                      </FormItem>

                      <FormItem
                        divider
                        initialValue={0}
                        title="Количество выявленных ошибок/нарушений"
                        name={[name, "KP_errors_number"]}
                      >
                        <InputNumber
                          placeholder="Количество выявленных ошибок/нарушений"
                          onChange={handleChangeKPErrors}
                        />
                      </FormItem>

                      <FormItem
                        divider
                        title="Сведения об объекте контроля"
                        name={[name, "KP_information"]}
                      >
                        <InputText
                          autoSize
                          allowClear
                          placeholder="Сведения об объекте контроля"
                        />
                      </FormItem>

                      <Row className="title-row">
                        <p className="title-2">
                          Результаты проверки операций и документов
                        </p>
                        <p className="title-2">организации (при наличии)</p>
                      </Row>

                      <FormItem
                        divider
                        tooltip="Общее количество договоров, заключенных за отчетный период"
                        title="Общее количество договоров, заключенных за ОП"
                        name={[name, "KP_contracts_total_number"]}
                        initialValue={0}
                      >
                        <InputNumber placeholder="Общее количество договоров" />
                      </FormItem>

                      <FormItem
                        divider
                        initialValue={0}
                        tooltip="Количество проверенных договоров за отчетный период"
                        title="Количество проверенных договоров за ОП"
                        name={[name, "KP_checked_contracts_number"]}
                      >
                        <InputNumber placeholder="Количество проверенных договоров за отчетный период" />
                      </FormItem>

                      <FormItem
                        divider
                        initialValue={0}
                        tooltip={
                          "Общее количество первичных учетных документов за отчетный период"
                        }
                        title="Общее количество первичных уч. док. за ОП"
                        name={[name, "KP_first_accounting_documents_number"]}
                      >
                        <InputNumber placeholder="Общее количество первичных учетных документов за отчетный период" />
                      </FormItem>

                      <FormItem
                        divider
                        tooltip={
                          "В том числе, количество проверенных первичных учетных документов за отчетный период"
                        }
                        initialValue={0}
                        title="Количество проверенных первичных уч. док. за ОП"
                        name={[
                          name,
                          "KP_checked_first_accounting_documents_number",
                        ]}
                      >
                        <InputNumber placeholder="Количество проверенных первичных учетных документов за отчетный период" />
                      </FormItem>

                      <FormItem
                        divider
                        tooltip={
                          "Общее количество операций, совершенных за отчетный период"
                        }
                        initialValue={0}
                        title="Общее количество операций, совершенных за ОП"
                        name={[name, "KP_operations_number"]}
                      >
                        <InputNumber placeholder="Количество проверенных первичных учетных документов за отчетный период" />
                      </FormItem>

                      <FormItem
                        divider
                        tooltip={
                          "В том числе, количество проверенных операций за отчетный период"
                        }
                        initialValue={0}
                        title="Количество проверенных операций за ОП"
                        name={[name, "KP_checked_operations_number"]}
                      >
                        <InputNumber placeholder="Количество проверенных первичных учетных документов за отчетный период" />
                      </FormItem>

                      <Row className="button-wrapper">
                        <Button
                          title="Удалить"
                          type="primary"
                          buttonColor={colors["light"].color_grey_90}
                          onClick={() => handleRemove(name)}
                        />
                      </Row>
                    </Col>
                  </Row>
                </div>
              ))}

              <Form.Item>
                <Button
                  title="Добавить элемент"
                  className="button-add"
                  icon={<BiPlus size={20} />}
                  onClick={add}
                />
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    </ElementsListWrapper>
  );
};

export default ElementsList;
