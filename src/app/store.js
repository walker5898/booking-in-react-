import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../features/hotelSlice";
import tripReducer from "../features/tripSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    trip: tripReducer,
  },
});
