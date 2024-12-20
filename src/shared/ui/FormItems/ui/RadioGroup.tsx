import React, { useState } from "react";
import { FormItemWrapper } from "./FormItemWrapper";
import { Radio } from "antd";
import { RadioChangeEvent } from "antd/lib";

type Props = {
  data: any;
};

const RatioGroup: React.FC<Props> = ({ data }: Props) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <FormItemWrapper>
      <Radio.Group onChange={onChange} value={value}>
        {data.map((item: any) => {
          return (
            <Radio value={item.value} key={item.value}>
              {item.name}
            </Radio>
          );
        })}
      </Radio.Group>
    </FormItemWrapper>
  );
};

export default RatioGroup;
