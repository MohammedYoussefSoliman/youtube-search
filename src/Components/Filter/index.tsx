import React from "react";
import { SearchIcon } from "@assets/svgs";
import useBreakPoints from "app/hooks/useBreakPoints";
import { SearchButton, Wrapper } from "./styles";

export default function Filter() {
  const breakPoints = useBreakPoints();

  return (
    <Wrapper>
      <input className="filter--input" type="text" />
      <SearchButton type="button">
        <SearchIcon color={breakPoints.smallScreen ? "#ffffff" : "#616161"} />
      </SearchButton>
    </Wrapper>
  );
}
