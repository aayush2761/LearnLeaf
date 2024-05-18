import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Logo, Input } from "./index";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setLoading(true);
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData.email, userData.password));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div className="text-center">Loading...</div>
  ) : (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-slate-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="iniline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign Up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have any account?&nbsp;
          <Link
            to={"/login"}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter you name..."
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email..."
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              placeholder="Enter your password..."
              type="password"
              {...register("password", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(value) ||
                    "Password must be 8 characters long",
                },
              })}
            />
            <Button type="submit" className="w-full hover:bg-blue-500">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
