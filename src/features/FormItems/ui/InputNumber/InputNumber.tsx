import { InputNumber as AntInputNumber, InputNumberProps } from "antd";
import React from "react";

type Props = InputNumberProps & {
  initialValue?: number;
};

const InputNumber: React.FC<Props> = (props: Props) => {
  return (
    <AntInputNumber
      defaultValue={0}
      min={0}
      style={{ width: "100%", overflow: "hidden" }}
      {...props}
    />
  );
};

export default InputNumber;
