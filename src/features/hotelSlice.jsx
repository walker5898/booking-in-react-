import { createSlice } from "@reduxjs/toolkit";
import { hotels } from "../backend/datas";

const initialState = {
  hotels: hotels,
  reserved: JSON.parse(localStorage.getItem("reserved")) || [],
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    addToReserve: (state, action) => {
      state.reserved = [...state.reserved, action.payload];
    },
    deleteFromReserved: (state, action) => {
      const filterReserved = state.reserved.filter(
        (item) => item.id !== action.payload
      );
      state.reserved = filterReserved;
    },
  },
});

export const { addToReserve, deleteFromReserved } = hotelSlice.actions;
export default hotelSlice.reducer;
export const allHotels = (state) => state.hotel.hotels;
