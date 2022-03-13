import React from "react";
import CSS from "csstype";
import { Wrapper } from "./styles";

type PropsType = {
  size?: CSS.Property.Width;
  color?: CSS.Property.Color;
};

export default function Spinner({ size, color }: PropsType) {
  return (
    <Wrapper size={size}>
      <svg viewBox="-10 -10 140 140">
        <circle cx="60" cy="10" r="7" opacity="0.2" fill={color || "#A1A1A1"} />
        <circle cx="95" cy="25" r="8" opacity="0.3" fill={color || "#A1A1A1"} />
        <circle
          cx="110"
          cy="60"
          r="9"
          opacity="0.4"
          fill={color || "#A1A1A1"}
        />
        <circle
          cx="95"
          cy="95"
          r="10"
          opacity="0.5"
          fill={color || "#A1A1A1"}
        />
        <circle
          cx="60"
          cy="110"
          r="11"
          opacity="0.6"
          fill={color || "#A1A1A1"}
        />
        <circle
          cx="25"
          cy="95"
          r="12"
          opacity="0.7"
          fill={color || "#A1A1A1"}
        />
        <circle
          cx="10"
          cy="60"
          r="13"
          opacity="0.8"
          fill={color || "#A1A1A1"}
        />
        <circle
          cx="25"
          cy="25"
          r="15"
          opacity="1.0"
          fill={color || "#A1A1A1"}
        />
      </svg>
    </Wrapper>
  );
}
