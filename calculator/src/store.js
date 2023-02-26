import { configureStore, createSlice } from "@reduxjs/toolkit";

const historyslice = createSlice({
  name: "history",
  initialState: { list: [] },
  reducers: {
    addtohistory: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    deletehistory: (state) => {
      state.list = [];
    },
  },
});

export const historyaction = historyslice.actions;

const store = configureStore({
  reducer: { history: historyslice.reducer },
});

export default store;
