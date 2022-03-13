import React from "react";
import Wrapper from "./styles";

type PropsType = {
  width?: "normal" | "medium" | "wide" | "extraWide" | "fullWidth";
  children: React.ReactNode;
};

const containerWidths = {
  fullWidth: {
    xSmall: "100%",
    small: "100%",
    medium: "100%",
    large: "100%",
    xLarge: "100%",
    xxLarge: "100%",
  },
  extraWide: {
    xSmall: "100%",
    small: "100%",
    medium: "100%",
    large: "960px",
    xLarge: "1250px",
    xxLarge: "1860px",
  },
  wide: {
    xSmall: "100%",
    small: "100%",
    medium: "100%",
    large: "960px",
    xLarge: "1250px",
    xxLarge: "1660px",
  },
  medium: {
    xSmall: "100%",
    small: "460px",
    medium: "640px",
    large: "900px",
    xLarge: "1200px",
    xxLarge: "1520px",
  },
  normal: {
    xSmall: "100%",
    small: "420px",
    medium: "600px",
    large: "840px",
    xLarge: "1150px",
    xxLarge: "1150px",
  },
};

export default function Container({ width = "normal", children }: PropsType) {
  return <Wrapper variants={containerWidths[width]}>{children}</Wrapper>;
}
