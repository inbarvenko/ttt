import React from "react";
import { FloatButton } from "antd/lib";
import { BiQuestionMark } from "react-icons/bi";
import { Tour, TourStepProps } from "antd";
import { useLocation } from "react-router-dom";

type Props = { steps: TourStepProps[] };

const SidebarTour: React.FC<Props> = ({ steps }: Props) => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <FloatButton
          icon={
            <BiQuestionMark size={20} style={{ verticalAlign: "bottom" }} />
          }
          style={{ right: 24, top: 24 }}
          onClick={() => {
            console.log("open");
            setOpen(true);
          }}
        />
      )}
      <Tour
        placement={"right"}
        open={open}
        steps={steps}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default SidebarTour;
