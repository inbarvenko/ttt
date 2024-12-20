import styled from "styled-components";
import background from "../../shared/assets/svg/home-background.svg";
import { colors } from "../../shared/assets/colors";

const HomePageWrapper = styled.div`
  flex: 1;
  min-height: 100vh;

  background: url(${background}) no-repeat;
  background-size: cover;
  font-family: "HeliosCondC";

  display: flex;
  justify-content: center;
  align-items: center;

  .home-content {
    display: flex;
    justify-content: center;
    gap: 90px;

    padding: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 40vw;

    &-bubbles {
      display: flex;
      gap: 5px;
    }

    &-title {
      font-family: "HeliosCondBlack";
      color: ${colors["light"].color_text};
      font-size: 48px;

      margin: 0;
    }

    &-subtitle {
      font-family: "HeliosCondC";
      color: ${colors["light"].color_grey_90};
      font-size: 24px;
    }
  }
`;

export default HomePageWrapper;
