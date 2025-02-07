import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  color: string;
}

const initialState: InitialStateType = {
  color: "grey",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;
