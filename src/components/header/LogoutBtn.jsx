import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        
      })
      .catch(() => console.log("Logout error"));
  };

  return (
    <button
      className="inline-block px-6 py-5 duration-2  hover:bg-[#b6f1d8e9] text-coolGray-800 rounded-full focus:bg-coolGray-800"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
