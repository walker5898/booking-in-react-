import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/private/Home";
import Reservation from "./pages/private/Reservation";
import Hotels from "./pages/private/Hotels";
import Register from "./pages/public/Register";
import Login from "./pages/public/Login";
import { useEffect, useReducer } from "react";
import { initialState, userReducer } from "./reducer/userReducer";
import { StateContext } from "./context/context";
import ProtectedRoutes from "./routes/protectedRoutes";
import { useSelector } from "react-redux";
import Trips from "./pages/private/Trips/Trips";

function App() {
  const [userState, userDispatch] = useReducer(userReducer, initialState);
  const reserved = useSelector((state) => state.hotel.reserved);
  const reservedTrips = useSelector((state) => state.trip.reservedTrips);
  // console.log(userState);
  // localStorage to save
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userState?.users));
    localStorage.setItem("user", JSON.stringify(userState?.user));
    localStorage.setItem("token", JSON.stringify(userState?.token));
  }, [userState]);
  // localstorage to save hotels and trips
  useEffect(() => {
    localStorage.setItem("reserved", JSON.stringify(reserved));
    localStorage.setItem("reservedTrips", JSON.stringify(reservedTrips));
  }, [reserved, reservedTrips]);
  return (
    <div className="App">
      <StateContext.Provider value={{ userState, userDispatch }}>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/trips" element={<Trips />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </StateContext.Provider>
    </div>
  );
}

export default App;
