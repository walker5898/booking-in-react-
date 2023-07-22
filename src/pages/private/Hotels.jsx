import React from "react";
import { useSelector } from "react-redux";
import HotelCard from "../../components/HotelCard/HotelCard";
import { allHotels } from "../../features/hotelSlice";

function Hotels() {
  // useSelector orqali olib kelib uni bitta ozgaruvchiga oldik
  const totalHotels = useSelector(allHotels);
  // console.log(totalHotels);
  return (
    <div className="w-[100%] h-auto p-4 flex flex-col gap-4">
      <h1>Hotels</h1>
      <div className="w-[100%] flex flex-wrap justify-center gap-5">
        {totalHotels.length > 0 ? (
          totalHotels.map((item) => <HotelCard key={item.id} {...item} />)
        ) : (
          <p>No hotels found</p>
        )}
      </div>
    </div>
  );
}

export default Hotels;
