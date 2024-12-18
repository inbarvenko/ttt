import React from "react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "../../widgets/Sidebar";
import { ContentWrapper } from "./ContentWrapper";
import ChooseRoleButton from "../../shared/ui/ChooseRoleButton/ChooseRoleButton";

const Content: React.FC = () => {
  console.log("main");
  return (
    <ContentWrapper>
      <Sidebar />
      {/* <Header /> */}
      <ChooseRoleButton />
      <Outlet />
    </ContentWrapper>
  );
};

export default Content;
