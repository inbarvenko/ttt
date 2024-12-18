import React from "react";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";

type Props = TextAreaProps & {};

const InputText: React.FC<Props> = (props: Props) => {
  return <Input.TextArea style={{ overflow: "hidden" }} {...props} />;
};

export default InputText;
