import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "", // хранение строки фильтра
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.query = action.payload; // обновляем поле query в состоянии
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;

export const selectNameFilter = (state) => state.filter.query; // селектор, который возвращает filter.query
