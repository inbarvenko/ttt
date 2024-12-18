import { Col, Divider, Form, FormItemProps, Row } from "antd";
import React from "react";
import { Tooltip } from "../../../../shared/ui/Tooltip/Tooltip";

type Props = FormItemProps & {
  title: string;
  children: React.ReactNode;
  tooltip?: string;
  divider?: boolean;
};

const FormItem: React.FC<Props> = ({
  title,
  divider,
  tooltip,
  children,
  ...formItemProps
}: Props) => {
  return (
    <>
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginRight: 10,
          }}
          flex={2}
          span={5}
        >
          {title}
          {tooltip && <Tooltip title={tooltip} />}
        </Col>
        <Col className="input-text" flex={3}>
          <Form.Item className="form-item" name="KP_code" {...formItemProps}>
            {children}
          </Form.Item>
        </Col>
      </Row>

      {divider && <Divider type="horizontal" />}
    </>
  );
};

export default FormItem;
