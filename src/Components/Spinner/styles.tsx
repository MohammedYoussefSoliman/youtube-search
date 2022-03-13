import styled from "@emotion/styled";
import CSS from "csstype";
import { keyframes, css } from "@emotion/react";

export const rotate = keyframes`
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg);
    }
`;

type WrapperProps = {
  size?: CSS.Property.Width;
};

export const Wrapper = styled("div")<WrapperProps>`
  ${({ size }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `}
  animation: ${rotate} steps(8) 800ms infinite;
`;
