import styled from "styled-components";
import { colors } from "../../../../shared/assets/colors";

export const ElementsListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .flex-row {
    display: flex;
    flex-direction: row;

    gap: 10px;
    align-items: center;
  }

  .periodWrapper {
    padding: 10px;
    background-color: ${colors["light"].color_grey_20};

    border: 1px solid ${colors["light"].color_main_grey_50};
    border-radius: 8px;
  }

  .title {
    &-row {
      padding: 15px 0 20px 0;
    }

    &-1 {
      font-size: 16px;
      align-self: center;
      margin: 0;
      letter-spacing: 1px;
    }

    &-2 {
      width: 100%;
      display: flex;
      justify-content: center;

      font-family: "HeliosCondC";
      font-size: 14px;
      align-self: center;
      margin: 0;

      color: ${colors["light"].color_grey_90};
    }
  }

  /* Установите нужный размер checkbox */
  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
  }

  .options {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .button-delete {
    background-color: ${colors["light"].color_blue_70};
  }

  .button-add {
    width: 100%;
    gap: 5px;

    align-items: center;
  }
`;
