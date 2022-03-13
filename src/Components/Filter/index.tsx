import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "app/State/searchParamsSlice";
import { SearchIcon } from "@assets/svgs";
import useHttp from "app/hooks/useHTTP";
import useBreakPoints from "app/hooks/useBreakPoints";
import { RootState } from "../../Store";
import { SearchButton, Wrapper } from "./styles";

export default function Filter() {
  const searchParams = useSelector((state: RootState) => state.searchParams);
  const dispatch = useDispatch();
  const breakPoints = useBreakPoints();

  const { isSubmitting, call, data } = useHttp({
    params: searchParams,
  });

  const handleSearch = React.useCallback(
    (event) => {
      const q: string = event.target.value;
      dispatch(setSearchQuery({ q }));
    },
    [dispatch],
  );

  const handleClickSearchButton = React.useCallback(() => {
    call();
  }, [call]);

  return (
    <Wrapper>
      {/* eslint-disable-next-line no-console */}
      {console.log(data)}
      <input className="filter--input" onChange={handleSearch} type="text" />
      <SearchButton
        type="button"
        onClick={handleClickSearchButton}
        disabled={isSubmitting}
      >
        <SearchIcon color={breakPoints.smallScreen ? "#ffffff" : "#616161"} />
      </SearchButton>
    </Wrapper>
  );
}
