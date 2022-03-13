import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SearchParams from "helpers/types";

const initialSearchParamsState: SearchParams = {
  part: "snippet",
  order: "relevance",
  type: "video",
  q: "",
};

const searchParamsSlice = createSlice({
  name: "user",
  initialState: initialSearchParamsState,
  reducers: {
    setParams(state, action: PayloadAction<SearchParams>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setParams } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
