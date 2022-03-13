import styled from "@emotion/styled";
// import CSS from "csstype";
// import { css } from "@emotion/react";

export const Wrapper = styled.div`
  label: filter-wrapper;
  display: flex;
  flex: 1;
  border: 1px solid #e4e4e4;
  &:focus-within {
    border: 1px solid #707070;
  }
  &:hover {
    border: 1px solid #707070;
  }
  .filter--input {
    flex: 1;
    border: none;
    padding: 10px;
    font-size: 16px;
    &:focus {
      outline: 1px solid #707070;
      box-shadow: rgba(14, 85, 240, 0.671) 0px 0px 1px 1px inset;
    }
  }
`;

export const SearchButton = styled.button`
  label: search-button;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  padding: 8px 32px;
  background-color: #eeeeee;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
`;
