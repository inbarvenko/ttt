import React, { useMemo } from "react";
import Layout from "../../../shared/ui/Layout/Layout";
import OneChecklistPageWrapper from "./OneChecklistPageWrapper";
import { useSearchParams } from "react-router-dom";
import { getCHLidByDate } from "../../../shared/model/getCHLidByDate";
import { Form } from "antd";
import { FormItem } from "../../../features/FormItems";
import { InputText, RadioGroup } from "../../../shared/ui/FormItems";

const OneChecklistPage: React.FC = () => {
  const [searchParams, _] = useSearchParams();
  const [form] = Form.useForm();

  const params_id = useMemo(() => {
    const id = searchParams?.entries().next().value?.[1];
    if (!id) {
      const new_id = getCHLidByDate();
      return new_id;
    }

    return id;
  }, [searchParams?.entries().next().value]);

  return (
    <OneChecklistPageWrapper>
      <Layout title={`Чек-лист №${params_id}`}>
        <Form
          name="CHL"
          layout="vertical"
          className="checklist-data"
          form={form}
        >
          <FormItem
            divider
            name={"CHL_responsibleDepartment"}
            title={"Ответственное подразделение"}
          >
            <InputText autoSize />
          </FormItem>

          <FormItem divider name={"CHL_executor"} title={"Исполнитель"}>
            <InputText autoSize />
          </FormItem>

          <FormItem
            divider
            tooltip="Чек-лист должен быть заблокирован для отправки на согласование. Разблокировать чек-лист могут только ответственные, руководители и представители налоговой. После разблокировки чек-лист отправляется к исполнителю. Звблокировать чек-лист может только исполнитель."
            name={"CHL_status"}
            title={"Статус чек-листа"}
          >
            <RadioGroup
              data={[
                {
                  name: "Заблокирован",
                  value: false,
                },
                {
                  name: "Разблокирован",
                  value: true,
                },
              ]}
            />
          </FormItem>
        </Form>
      </Layout>
    </OneChecklistPageWrapper>
  );
};

export default OneChecklistPage;
