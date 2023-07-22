import React from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { deleteFromTrip } from "../../../features/tripSlice";

function TripReserveCard({ item, title, price, image, id }) {
  const dispatch = useDispatch();
  const deleteReserveTrip = (e) => {
    dispatch(deleteFromTrip(id));
  };
  return (
    <div className="w-[100%] h-auto flex items-center justify-between gap-1 shadow-sm shadow-neutral-200">
      <img className="w-[40px] h-[40px]" src={image} alt="" />
      <div>
        <h1 className="" style={{ fontSize: "10px" }}>
          {title}
        </h1>
        <h1 style={{ fontSize: "10px" }}>${price}</h1>
      </div>
      <AiFillDelete onClick={deleteReserveTrip} className="text-red-700" />
    </div>
  );
}

export default TripReserveCard;
