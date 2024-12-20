import styled from "styled-components";

type Props = {
  color: string;
  textColor?: string;
};

const BubbleWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["textColor", "color"].includes(prop),
})<Props>`
  width: fit-content;
  height: 25px;
  padding: 2.5px 5px;
  border-radius: 6px;

  background-color: ${(p) => p.color};
  font-family: "HeliosCondC";
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 1px;

  color: ${(p) => p.textColor};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;

  .circle {
    width: 2.5px;
    height: 2.5px;
    border-radius: 50%;
    background-color: ${(p) => p.textColor};
  }
`;

export default BubbleWrapper;
