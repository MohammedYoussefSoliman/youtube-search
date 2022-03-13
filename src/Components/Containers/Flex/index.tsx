import React from "react";
import CSS from "csstype";
import Wrapper from "./styles";

type PropsType = {
  children: React.ReactNode;
  width?: CSS.Property.Width;
  fullWidth?: boolean;
  height?: CSS.Property.Height;
  direction?: CSS.Property.FlexDirection;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  gap?: CSS.Property.Gap;
  styles?: { [key: string]: string | number };
  flex?: CSS.Property.Flex;
};

const Flex = React.forwardRef(
  (
    {
      children,
      width,
      fullWidth,
      height,
      direction,
      justify,
      align,
      gap,
      flex,
      styles,
    }: PropsType,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Wrapper
        ref={ref}
        style={styles}
        width={width}
        fullWidth={fullWidth}
        height={height}
        direction={direction}
        justify={justify}
        align={align}
        gap={gap}
        flex={flex}
      >
        {children}
      </Wrapper>
    );
  },
);

Flex.defaultProps = {
  width: "fit-content",
  direction: "row",
};

export default Flex;
