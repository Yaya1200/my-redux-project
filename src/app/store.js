import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../featchers/counter/counterSlice"

 export const store = configureStore({
  reducer:{
    count: countReducer,
  }
 })
 export default store;