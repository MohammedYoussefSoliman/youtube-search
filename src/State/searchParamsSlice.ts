import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParamsType } from "helpers/types";

const initialSearchParamsState: ParamsType = {
  part: "snippet",
  order: "relevance",
  type: "video",
  q: "",
};

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState: initialSearchParamsState,
  reducers: {
    setParams(state, action: PayloadAction<Partial<ParamsType>>) {
      return { ...state, ...action.payload };
    },
    setSearchQuery(state, action: PayloadAction<{ q: string }>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setParams, setSearchQuery } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
