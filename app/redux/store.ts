import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./color-slice"; // colorSlice.reducer ni import qilish

export const store = configureStore({
  reducer: { color:colorReducer },
});
// RootState va AppDispatch turlarini chiqarib olish
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
