import React from "react";
import illustration from "../../shared/assets/svg/home_ill.svg";
import HomePageWrapper from "./HomePageWrapper";
import { Image } from "antd";
import Bubble from "../../shared/ui/Bubble/Bubble";
import { Helmet } from "react-helmet";
import { UserContext } from "../../shared/model/UserContext";

const HomePage: React.FC = () => {
  const user = React.useContext(UserContext);
  return (
    <HomePageWrapper>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <div className="home-content">
        <div className="text">
          <div className="text-bubbles">
            <Bubble
              text={
                user.role === 3
                  ? "Права исполнителя"
                  : "Права руководителя/ответственного"
              }
              color="#007DFE"
            />
            <Bubble text="Версия 0.0.1" color="#619BEF" textColor="#fff" />
          </div>
          <p className="text-title">Учет контрольных процедур</p>
          <p className="text-subtitle">
            Учет выполнения и документирования результатов контрольных процедур,
            осуществляемых в целях налогового мониторинга
          </p>
        </div>
        <Image src={illustration} preview={false} width={"30vw"} />
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
