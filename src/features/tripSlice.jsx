import { createSlice } from "@reduxjs/toolkit";
import { trips } from "../backend/trips";

const initialState = {
  trips: trips,
  reservedTrips: JSON.parse(localStorage.getItem("reservedTrips")) || [],
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    addToTrip: (state, action) => {
      state.reservedTrips = [...state.reservedTrips, action.payload];
    },
    deleteFromTrip: (state, action) => {
      const filterReservedTrips = state.reservedTrips.filter(
        (item) => item.id !== action.payload
      );
      state.reservedTrips = filterReservedTrips;
    },
  },
});

export const { addToTrip, deleteFromTrip } = tripSlice.actions;
export default tripSlice.reducer;
export const allTrips = (state) => state.trip.trips;
