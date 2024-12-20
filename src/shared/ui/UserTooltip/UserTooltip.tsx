import React from "react";
import UserTooltipWrapper from "./UserTooltipWrapper";
import { NoUser } from "../../assets/svg";
import { BiCopy } from "react-icons/bi";

type Props = {
  value: string;
  src?: string;
};

const UserTooltip: React.FC<Props> = (props: Props) => {
  console.log(props.value);
  return (
    <UserTooltipWrapper>
      <img src={props.src || NoUser} className="user-icon" alt="user" />
      <div className="user-info">
        <p className="user-name">{}</p>
        <p className="user-position">Занимаемая должность</p>
        <div className="contacts">
          <div className="container">
            <BiCopy
              onClick={() =>
                navigator.clipboard.writeText("gdu@gd-urengoy.gazprom.ru").then(
                  function () {
                    console.log("Текст успешно скопирован в буфер обмена");
                  },
                  function (err) {
                    console.error(
                      "Произошла ошибка при копировании текста: ",
                      err,
                    );
                  },
                )
              }
            />
            <p className="user-email">gdu@gd-urengoy.gazprom.ru</p>
          </div>
          <div className="container">
            <BiCopy
              onClick={() =>
                navigator.clipboard.writeText("66-45-45").then(
                  function () {
                    console.log("Текст успешно скопирован в буфер обмена");
                  },
                  function (err) {
                    console.error(
                      "Произошла ошибка при копировании текста: ",
                      err,
                    );
                  },
                )
              }
            />
            <p className="user-phone">66-45-45</p>
          </div>
        </div>
      </div>
    </UserTooltipWrapper>
  );
};

export default UserTooltip;
