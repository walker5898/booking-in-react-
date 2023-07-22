import React from "react";
import { useSelector } from "react-redux";
import ReservedCard from "../../components/ReservedCard/ReservedCard";

function Reservation() {
  const reserved = useSelector((state) => state.hotel.reserved);
  // console.log(reserved);
  return (
    <div className="w-[100%] h-auto p-4 flex flex-col gap-4">
      <h1>Reservation</h1>
      <div className="w-[100%] flex flex-wrap justify-center gap-5">
        {reserved.length > 0 ? (
          reserved.map((item) => <ReservedCard key={item.id} {...item} />)
        ) : (
          <p>No hotels found</p>
        )}
      </div>
    </div>
  );
}

export default Reservation;
