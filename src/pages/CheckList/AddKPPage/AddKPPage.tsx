import React from "react";
import AddKPPageWrapper from "./AddKPPageWrapper";
import { Form } from "antd";
import {
  KPContentType,
  KPDataType,
} from "../../../features/FormItems/ui/types/types";
import { KP_data } from "../form.data";
import Layout from "../../../shared/ui/Layout/Layout";
import { ElementsList, FormItem } from "../../../features/FormItems";
import { InputText, Select } from "../../../shared/ui/FormItems";
import { Button } from "../../../shared/ui/Button/Button";
import { colors } from "../../../shared/assets/colors";

const AddKPPage: React.FC = () => {
  const [form] = Form.useForm();
  const [selectedKP, seSelectedKP] = React.useState<KPDataType | undefined>();

  const changeKpErorsNumber = () => {
    const fields = form.getFieldValue("periods");
    let sum = 0;
    fields.forEach((item: KPContentType) => {
      sum += item.KP_errors_number;
    });

    form.setFieldsValue({ KP_errors_number: sum });
  };

  const changeKpNumber = () => {
    const fields = form.getFieldValue("periods");
    let sum = 0;
    fields.forEach((item: KPContentType) => {
      sum += item.KP_check_number;
    });

    form.setFieldsValue({ KP_number: sum });
  };

  const onChooseKP = (value: string) => {
    const selectedKP = KP_data.find((item) => item.KP_code === value);
    console.log(selectedKP);
    seSelectedKP(selectedKP);

    form.setFieldsValue({
      KP_name: selectedKP?.KP_name,
      KP_description: selectedKP?.KP_description,
      KP_type: selectedKP?.KP_type,
      KP_frequency: selectedKP?.KP_frequency,
    });
  };

  const onSubmit = () => {
    const data = form.getFieldsValue();

    console.log(data);
  };

  return (
    <AddKPPageWrapper>
      <Layout title="Добавить контрольную процедуру">
        <Form
          name="checklist-form"
          layout="vertical"
          className="form"
          form={form}
        >
          <FormItem
            tooltip={
              "Выберите из выпадающего списка контрольную процедуру. Необходимые поля описания контрольной процедуры будут заполнены автоматически."
            }
            divider
            title="Код КП"
            className="form-item"
            name="KP_code"
            rules={[
              {
                required: true,
                message: "Необходимо ввести код КП",
                type: "string",
              },
            ]}
          >
            <Select
              showSearch
              allowClear
              filterOption={false}
              placeholder="Наименование контрольной процедуры"
              options={KP_data}
              className="select"
              fieldNames={{ label: "KP_code", value: "KP_code" }}
              onChange={onChooseKP}
              onClear={() => seSelectedKP(undefined)}
              optionRender={(option) => {
                return (
                  <div key={option.data.id}>
                    <p style={{ margin: 0 }}>{option.data.KP_code}</p>
                    <p style={{ margin: 0 }}>{option.data.KP_name}</p>
                  </div>
                );
              }}
            />
          </FormItem>

          {selectedKP?.KP_code && (
            <>
              <FormItem
                divider
                title="Наименование КП"
                name="KP_name"
                initialValue={selectedKP?.KP_name}
                rules={[
                  { required: true, message: "Обязательно для заполнения" },
                ]}
              >
                <InputText
                  autoSize
                  readOnly
                  allowClear={false}
                  contentEditable={false}
                  value={selectedKP?.KP_name}
                  placeholder="Название КП"
                />
              </FormItem>

              <FormItem
                divider
                title="Описание КП"
                name="KP_description"
                initialValue={selectedKP?.KP_description}
                rules={[
                  { required: true, message: "Обязательно для заполнения" },
                ]}
              >
                <InputText
                  autoSize
                  readOnly
                  allowClear={false}
                  contentEditable={false}
                  placeholder="Описание КП"
                />
              </FormItem>

              <FormItem
                divider
                title="Вид КП"
                name="KP_type"
                initialValue={selectedKP?.KP_type}
                rules={[
                  { required: true, message: "Обязательно для заполнения" },
                ]}
              >
                <InputText
                  autoSize
                  readOnly
                  allowClear={false}
                  contentEditable={false}
                  placeholder="Вид КП"
                />
              </FormItem>

              <FormItem
                divider
                title="Частота проведения КП"
                name="KP_frequency"
                initialValue={selectedKP?.KP_description}
                rules={[
                  { required: true, message: "Обязательно для заполнения" },
                ]}
              >
                <InputText
                  autoSize
                  readOnly
                  allowClear={false}
                  contentEditable={false}
                  placeholder="Частота проведения КП"
                />
              </FormItem>

              <FormItem
                divider
                title="Способ подсчета результатов проведения КП"
                name="KP_conductingMethod"
                initialValue={selectedKP?.KP_conductingMethod}
                rules={[
                  { required: true, message: "Обязательно для заполнения" },
                ]}
              >
                <InputText
                  autoSize
                  readOnly
                  allowClear={false}
                  contentEditable={false}
                  placeholder="Способ проведения КП"
                />
              </FormItem>
            </>
          )}

          <FormItem
            divider
            title="Ответственное подразделение"
            name="CHL_responsible_department"
            tooltip="Подразделение, ответственное за выполнение КП"
            initialValue={"СИУС"}
            rules={[{ required: true, message: "Обязательно для заполнения" }]}
          >
            <InputText
              autoSize
              readOnly
              allowClear={false}
              contentEditable={false}
              value={"СИУС"}
              placeholder="Ответственное подразделение"
            />
          </FormItem>

          <FormItem
            divider
            title="Исполнитель ФИО"
            name="CHL_executor"
            initialValue={"Василий Васильевич Васильев"}
            rules={[{ required: true, message: "Обязательно для заполнения" }]}
          >
            <InputText
              autoSize
              readOnly
              allowClear={false}
              contentEditable={false}
              value={"Василий Васильевич Васильев"}
              placeholder="Исполнитель ФИО"
            />
          </FormItem>

          <FormItem
            divider
            title="Количество выполненных КП"
            tooltip={"Количество периодов контроля"}
            name={"KP_number"}
          >
            <InputText
              autoSize
              readOnly
              allowClear={false}
              contentEditable={false}
              placeholder="Количество выполненных КП"
            />
          </FormItem>

          <FormItem
            divider
            tooltip={"Количество выявленных ошибок в периодах контроля"}
            title="Количество выявленных ошибок"
            name={"KP_errors_number"}
          >
            <InputText
              autoSize
              readOnly
              allowClear={false}
              contentEditable={false}
              placeholder="Количество выявленных ошибок"
            />
          </FormItem>

          <Form.Item>
            <ElementsList
              formName="periods"
              form={form}
              onChangeLength={changeKpNumber}
              setErrorsNumber={changeKpErorsNumber}
            />
          </Form.Item>

          <Button
            type="primary"
            wrapperStyle="button-wrapper"
            buttonColor={colors["light"].color_bright_blue_50}
            title="Сохранить"
            onClick={onSubmit}
          />
        </Form>
      </Layout>
    </AddKPPageWrapper>
  );
};

export default AddKPPage;
