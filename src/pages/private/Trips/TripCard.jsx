import React from "react";
import { BiSolidHeartCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToTrip } from "../../../features/tripSlice";

function TripCard({ item, title, image, price, id }) {
  const dispatch = useDispatch();
  const reservedTrips = useSelector((state) => state.trip.reservedTrips);
  console.log(reservedTrips);
  //   reserved Trip
  const reservedToTrip = () => {
    const newTrip = {
      ...item,
      title: title,
      price: price,
      image: image,
      id: id,
    };
    // checking trips
    const checkTrips = reservedTrips.some((item) => item.id === newTrip.id);
    if (checkTrips) {
      alert("This trip is already in reserve");
      return;
    }
    dispatch(addToTrip(newTrip));
    alert("Your order was received by trips");
  };
  return (
    <div className="w-[300px] h-[360px] p-2 flex flex-col items-start gap-3 shadow-lg shadow-neutral-100 border-2 border-neutral-500 rounded-tl-xl rounded-br-xl">
      <img className="w-[100%] h-[55%]" src={image} alt={title} />
      <h1 className="text-neutral-800 text-xl">Name: {title}</h1>
      <h1 className="text-neutral-700 text-lg">Price:{price} $ for per-day</h1>
      <div className="w-[100%] flex items-center justify-between">
        <button
          onClick={reservedToTrip}
          className="w-[150px] p-2 border-2 border-neutral-400 shadow-lg shadow-neutral-400"
        >
          Booking
        </button>
        <h1>
          <BiSolidHeartCircle className="text-3xl text-red-700" />
        </h1>
      </div>
    </div>
  );
}

export default TripCard;
