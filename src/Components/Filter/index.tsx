import React from "react";
import { SearchIcon } from "@assets/svgs";
import { SearchButton, Wrapper } from "./styles";

export default function Filter() {
  return (
    <Wrapper>
      <input className="filter--input" type="text" />
      <SearchButton type="button">
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  );
}
