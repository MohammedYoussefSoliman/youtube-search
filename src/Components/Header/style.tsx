import styled from "@emotion/styled";
// import CSS from "csstype";
// import { css } from "@emotion/react";
import devices from "helpers/devices";

const Wrapper = styled.div`
  top: 0;
  width: 100%;
  height: 80px;
  padding: 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  ${devices.small} {
    position: static;
    background-color: #ff0000;
  }
  ${devices.medium} {
    position: fixed;
    background-color: #ffffff;
  }
`;

export default Wrapper;
