import styled from "styled-components";

const AddKPPageWrapper = styled.div`
  flex: 1;
  /* height: 100vh;
  overflow: auto; */

  .form {
    padding: 15px;

    .ant-col,
    .ant-select-selector,
    textarea,
    input {
      font-family: "HeliosCondC";
    }

    &-item {
      /* height: 50px; */
    }
  }

  .ant-divider-horizontal {
    margin: 12px 0;
  }

  .input-text {
    flex: 1;
  }

  .ant-form-item {
    margin-bottom: 12px;
  }

  .ant-select-single {
    width: 100%;
  }

  .ant-select-selector {
    flex: 1;
  }

  .ant-radio-wrapper {
    font-family: "HeliosCondC";
  }

  .button-wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
`;

export default AddKPPageWrapper;
