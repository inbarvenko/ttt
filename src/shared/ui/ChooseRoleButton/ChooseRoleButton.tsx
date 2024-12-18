import { useContext } from "react";
import { FloatButton } from "antd";
import { UserContext } from "../../model/UserContext";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ChooseRoleButton = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <FloatButton.Group style={{ insetInlineEnd: 32 }}>
      <FloatButton
        icon={<BiUser />}
        type={user.role !== 3 ? "primary" : "default"}
        style={{ insetInlineEnd: 72 }}
        onClick={() => {
          user.setRole(2);
          navigate("/");
        }}
      />
      <FloatButton
        type={user.role === 3 ? "primary" : "default"}
        style={{ insetInlineEnd: 24 }}
        onClick={() => {
          user.setRole(3);
          navigate("/");
        }}
      />
    </FloatButton.Group>
  );
};

export default ChooseRoleButton;
