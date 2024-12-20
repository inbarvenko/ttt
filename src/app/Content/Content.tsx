import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../../widgets/Sidebar";
import { ContentWrapper } from "./ContentWrapper";
import ChooseRoleButton from "../../shared/ui/ChooseRoleButton/ChooseRoleButton";
import SidebarTour from "../../widgets/Sidebar/ui/SidebarTour/SidebarTour";
import { TourStepProps } from "antd";

const Content: React.FC = () => {
  const [stepsObject, setStepsObject] = React.useState<TourStepProps[]>([]);

  return (
    <ContentWrapper>
      <ChooseRoleButton />
      <SidebarTour steps={stepsObject} />

      {/* <Header /> */}
      <Sidebar setSteps={setStepsObject} />
      <Outlet />
    </ContentWrapper>
  );
};

export default Content;
