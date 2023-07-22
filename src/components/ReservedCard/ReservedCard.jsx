import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromReserved } from "../../features/hotelSlice";
import { BiSolidHeartCircle } from "react-icons/bi";

function ReservedCard({ item, title, price, image, id }) {
  const dispatch = useDispatch();
  // for likes
  const [likes, setLikes] = useState(0);
  const likeHandler = (e) => {
    e.preventDefault();
    setLikes(likes + 1);
  };
  // delete from reserve
  const deleteReserve = () => {
    dispatch(deleteFromReserved(id));
  };
  return (
    <div className="w-[300px] h-[360px] p-2 flex flex-col items-start gap-3 shadow-lg shadow-neutral-100 border-2 border-neutral-500 rounded-tl-xl rounded-br-xl">
      <img src={image} alt={title} />
      <h1 className="text-neutral-800 text-xl">Name: {title}</h1>
      <h1 className="text-neutral-700 text-lg">Price:{price} $ for per-day</h1>
      <div className="w-[100%] flex items-center justify-between">
        <button
          onClick={deleteReserve}
          className="w-[150px] p-2 border-2 border-neutral-400 shadow-lg shadow-neutral-400"
        >
          Delete
        </button>
        <h1
          onClick={likeHandler}
          className="flex text-xl text-red-600 cursor-pointer hover:shadow-2xl hover:shadow-neutral-600"
        >
          <BiSolidHeartCircle className="text-3xl" />
          <sup className="text-neutral-400 text-sm">({likes})</sup>
        </h1>
      </div>
    </div>
  );
}

export default ReservedCard;
