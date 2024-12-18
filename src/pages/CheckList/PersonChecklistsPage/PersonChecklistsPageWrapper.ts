import styled from "styled-components";

import { colors } from "../../../shared/assets/colors";

const PersonChecklistsPageWrapper = styled.div`
  height: 100vh;
  flex: 1;

  // для изменения иконки выбора даты
  color-scheme: light;

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 15px;

    &-button {
      background-color: ${colors["light"].color_bright_blue_50};
      color: ${colors["light"].color_main_white_0};
    }
  }

  .header-style {
    margin-bottom: 0 !important;
  }

  .body-style {
    grid-template-rows: 70px 1fr;
  }

  .ag-theme-quartz {
    --ag-font-family: "HeliosCondC";

    --ag-header-background-color: ${() =>
      colors["light"].table_title_background};
    --ag-wrapper-border-radius: 0 0 16px 16px;
    --ag-border-color: ${() => colors["light"].border_color};
  }
`;

export default PersonChecklistsPageWrapper;
