import React from "react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { StateContext } from "../../context/context";

function Login() {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(StateContext);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const loginHandler = (e) => {
    e.preventDefault();
    // checkuser
    const checkUsers = userState.users.find(
      (item) => item.email === user.email && item.password === user.password
    );
    // console.log(checkUsers);
    if (checkUsers) {
      userDispatch({ type: "SET_USER", payload: checkUsers });
      navigate("/");
      return;
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <form
        onSubmit={loginHandler}
        className="w-[500px] flex flex-col items-center gap-4 p-6 border-2 border-neutral-300 shadow-xl shadow-neutral-400"
        action=""
      >
        <input
          onChange={handleChange}
          required
          autoComplete="off"
          name="email"
          type="email"
          placeholder="Enter your email..."
        />
        <input
          onChange={handleChange}
          required
          autoComplete="off"
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="w-[50%] border-[1px] p-2 border-neutral-400 text-neutral-500">
          Login
        </button>
        <p className="text-sm text-neutral-500">
          Have you already have an account or{" "}
          <Link to={"/register"} className="text-blue-500">
            register
          </Link>
        </p>
        {/* <p className="text-md text-red-500">{error && error}</p> */}
      </form>
    </div>
  );
}

export default Login;
