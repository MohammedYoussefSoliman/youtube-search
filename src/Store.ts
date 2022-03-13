import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchParamsSlice from "app/State/searchParamsSlice";

const rootReducer = combineReducers({
  searchParams: searchParamsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
