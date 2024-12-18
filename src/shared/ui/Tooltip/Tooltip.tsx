import React from "react";
import { Tooltip } from "antd";
import { TooltipProps } from "antd/lib";
import { AiOutlineQuestionCircle } from "react-icons/ai";

type Props = TooltipProps & {};

const TooltipLocal: React.FC<Props> = ({
  placement,
  trigger,
  overlayStyle,
  children,
  ...props
}: Props) => {
  return (
    <Tooltip
      placement={placement || "right"}
      trigger={trigger || "hover"}
      {...props}
    >
      <div style={{ verticalAlign: "middle", marginLeft: "5px" }}>
        {children || (
          <AiOutlineQuestionCircle style={{ verticalAlign: "text-top" }} />
        )}
      </div>
    </Tooltip>
  );
};

export { TooltipLocal as Tooltip };
