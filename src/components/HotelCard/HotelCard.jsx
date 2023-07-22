import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToReserve } from "../../features/hotelSlice";
import { BiSolidHeartCircle } from "react-icons/bi";

function HotelCard({ item, title, image, price, id }) {
  const dispatch = useDispatch();
  const reserved = useSelector((state) => state.hotel.reserved);
  console.log(reserved);
  // reserve hotel
  const reservedHotel = () => {
    const newHotel = {
      ...item,
      title: title,
      price: price,
      image: image,
      id: id,
    };

    // check hotels
    const checkHotel = reserved.some((item) => item.id === newHotel.id);
    console.log(checkHotel);
    if (checkHotel) {
      alert("This hotel is already in reserve");
      return;
    }
    dispatch(addToReserve(newHotel));
    alert("Your order was received by hotel");
  };
  return (
    <div className="w-[300px] h-[360px] p-2 flex flex-col items-start gap-3 shadow-lg shadow-neutral-100 border-2 border-neutral-500 rounded-tl-xl rounded-br-xl">
      <img src={image} alt={title} />
      <h1 className="text-neutral-800 text-xl">Name: {title}</h1>
      <h1 className="text-neutral-700 text-lg">Price:{price} $ for per-day</h1>
      <div className="w-[100%] flex items-center justify-between">
        <button
          onClick={reservedHotel}
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

export default HotelCard;
