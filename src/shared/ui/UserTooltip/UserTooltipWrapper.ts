import styled from "styled-components";
import { colors } from "../../assets/colors";

const UserTooltipWrapper = styled.div`
  min-width: 200px;
  max-width: 350px;
  padding: 15px;
  border-radius: 8px;

  background-color: ${colors["light"].color_grey_20};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  .user-icon {
    max-width: 60px;
    min-width: 30px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .user-name {
    font-weight: 500;
    font-size: 14px;

    color: ${colors["light"].color_bright_blue_50};
  }

  .user-position {
    font-weight: 400;
    font-size: 14px;

    color: ${colors["light"].color_grey_90};
  }

  .contacts {
    margin-top: 5px;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`;

export default UserTooltipWrapper;
