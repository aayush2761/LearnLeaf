import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch(); // for the redux dispatcher 
  const navigate = useNavigate(); // Initialize navigate

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/"); // Redirect to home page after logout
      })
      .catch(() => console.log("Logout error"));
  };

  return (
    <button
      className="inline-block px-6 py-3 bg-green-500 text-coolGray-800 font-semibold rounded-full transition duration-300 hover:bg-[#b6f1d8e9] shadow-md focus:bg-coolGray-800"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
