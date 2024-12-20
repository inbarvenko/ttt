import React from "react";
import BubbleWrapper from "./BubbleWrapper";
import { getTextColor } from "../../model/getTextColor";
import { colors } from "../../assets/colors";

type Props = {
  text: string;
  dot?: boolean;
  color?: string;
  textColor?: string;
};

const Bubble: React.FC<Props> = ({ color, text, dot, textColor }: Props) => {
  const baseColor = color || colors["light"].color_main_blue_50;
  const baseTextColor = textColor || getTextColor(baseColor);
  return (
    <BubbleWrapper color={baseColor} textColor={baseTextColor}>
      {dot && <div className="circle" />}
      {text}
    </BubbleWrapper>
  );
};

export default Bubble;
