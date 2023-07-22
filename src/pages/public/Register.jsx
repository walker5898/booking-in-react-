import React from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../../context/context";

function Register() {
  const navigate = useNavigate();
  const { userState, userDispatch } = useContext(StateContext);

  const registerHandler = (e) => {
    e.preventDefault();
    const forma = new FormData(e.target);
    const { name, email, password } = Object.fromEntries(forma.entries());
    // check email
    const checkEmail = userState.users.some((item) => item.email === email);
    // console.log(checkEmail);
    if (checkEmail) {
      alert("This is already registered !");
      return;
    }
    const newUser = {
      name,
      email,
      password,
      id: nanoid(),
    };
    userDispatch({ type: "ADD_USER", payload: newUser });
    navigate("/login");
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <form
        onSubmit={registerHandler}
        className="w-[500px] flex flex-col items-center gap-4 p-6 border-2 border-neutral-300 shadow-xl shadow-neutral-400"
        action=""
      >
        <input
          required
          name="name"
          type="text"
          placeholder="Enter your name..."
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Enter your email..."
        />
        <input
          required
          name="password"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="w-[50%] border-[1px] p-2 border-neutral-400 text-neutral-500">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
