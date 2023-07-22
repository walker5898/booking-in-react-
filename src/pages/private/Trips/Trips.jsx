import React from "react";
import { useSelector } from "react-redux";
import { allTrips } from "../../../features/tripSlice";
import "./TripReserved.css";
import TripCard from "./TripCard";
import { FaDownload } from "react-icons/fa";
import { BiSolidHeartCircle } from "react-icons/bi";
import TripReserveCard from "./TripReserveCard";
import { useState } from "react";

function Trips() {
  const [like, setLike] = useState(false);
  // useSelector orqali olib kelib uni bitta ozgaruvchiga olamiz
  const totalTrips = useSelector(allTrips);
  const reservedTrips = useSelector((state) => state.trip.reservedTrips);
  // console.log(totalTrips);
  // function likes
  const myLikesToggle = (e) => {
    e.preventDefault();
    setLike((p) => !p);
  };
  return (
    <div className="w-[100%] h-auto p-4 flex flex-col gap-4">
      <header className="w-[100%] p-1 flex items-center justify-between shadow-lg shadow-neutral-200">
        <ul className="text-white cursor-pointer">
          <li
            className="hover:text-neutral-600"
            style={{ display: "inline-block", padding: "10px 0px" }}
          >
            Categories
          </li>
          <li
            className="hover:text-neutral-600"
            style={{ display: "inline-block", padding: "10px 20px" }}
          >
            Best Sellers
          </li>
          <li
            className="hover:text-neutral-600"
            style={{ display: "inline-block", padding: "10px 20px" }}
          >
            Tickets
          </li>
          <li
            className="hover:text-neutral-600"
            style={{ display: "inline-block", padding: "10px 20px" }}
          >
            City Walks
          </li>
          <li
            className="hover:text-neutral-600"
            style={{ display: "inline-block", padding: "10px 20px" }}
          >
            Food and Drinks
          </li>
          <li
            onClick={myLikesToggle}
            className="hover:text-neutral-600"
            style={{ display: "inline-block", padding: "10px 20px" }}
          >
            Likes <sup>({reservedTrips.length})</sup>
            <div
              className="myReservedTrips"
              style={{ display: `${like ? "flex" : "none"}` }}
            >
              {reservedTrips.length > 0 ? (
                reservedTrips.map((item) => (
                  <TripReserveCard key={item.id} {...item} />
                ))
              ) : (
                <p>No trips</p>
              )}
            </div>
          </li>
          {/* <BiSolidHeartCircle
            className="text-2xl hover:text-neutral-600"
            style={{ display: "inline-block" }}
          >
            <sup>{reservedTrips.length}</sup>
          </BiSolidHeartCircle> */}
        </ul>
        <select className="w-[130px] cursor-pointer" name="" id="">
          <option value="">Daily</option>
          <option value="">Weekly</option>
          <option value="">Monthly</option>
        </select>
        <select className="w-[130px] cursor-pointer" name="" id="">
          <option value="">English/USD</option>
          <option value="">English/EU</option>
          <option value="">English/FUNT</option>
        </select>
        <button className="shadow-lg shadow-neutral-300 p-1 flex items-center gap-2 hover:text-white">
          <FaDownload /> Download App
        </button>
      </header>
      <div className="w-[100%] flex flex-wrap justify-center gap-5">
        {totalTrips.length > 0 ? (
          totalTrips.map((item) => <TripCard key={item.id} {...item} />)
        ) : (
          <p>No trips found!</p>
        )}
      </div>
    </div>
  );
}

export default Trips;
