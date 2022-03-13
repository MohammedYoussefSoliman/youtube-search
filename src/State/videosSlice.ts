import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideosState } from "helpers/types";

const initialVideosState: VideosState = {
  videos: [],
};

const videosSlice = createSlice({
  name: "videos",
  initialState: initialVideosState,
  reducers: {
    setVideos(state, action: PayloadAction<VideosState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setVideos } = videosSlice.actions;
export default videosSlice.reducer;
