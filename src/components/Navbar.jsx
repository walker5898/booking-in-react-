import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiHotelsdotcom } from "react-icons/si";
import { useSelector } from "react-redux";
import { StateContext } from "../context/context";

function Navbar() {
  const reserved = useSelector((state) => state.hotel.reserved);
  const { userDispatch } = useContext(StateContext);

  const logOutHandler = () => {
    userDispatch({ type: "LOG_OUT" });
  };
  return (
    <nav className="w-[100%] p-4 flex items-center justify-between bg-neutral-400">
      <SiHotelsdotcom className="text-3xl text-white hover:text-red-950" />
      <ul className="flex items-center gap-6 text-white">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"reservation"}>
            Reservation <sup>({reserved.length})</sup>
          </NavLink>
        </li>
        <li>
          <NavLink to={"hotels"}>Hotels</NavLink>
        </li>
        <li>
          <NavLink to={"trips"}>Trips</NavLink>
        </li>
      </ul>
      <div className="w-[20%] flex items-center justify-between ">
        <button className="w-[100px] border-2 border-neutral-500 shadow-xl bg-white rounded-lg hover:bg-black hover:text-white">
          <NavLink to={"/login"}>login</NavLink>
        </button>
        <button
          onClick={logOutHandler}
          className="w-[100px] border-2 border-neutral-500 shadow-xl bg-white rounded-lg hover:bg-black hover:text-white"
        >
          log out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
