import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { useAuth } from "../context/authProvider";

const Register = () => {
  const [userData, setUserData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    age: "",
    gender: "male",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const { register, isAuthenticated, error, loading } = useAuth();
  const debouncedUserData = useDebounce(userData, 1000);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.name);

    setUserData({
      ...userData,

      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (debouncedUserData)
      console.log("Debounced user data:", debouncedUserData);

    if (isAuthenticated) navigate("/");
  }, [debouncedUserData, isAuthenticated]);

  const handleRegister = async (e) => {
    e.preventDefault();

    await register(userData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[screen] p-6">
      <h1 className="mb-6 font-bold">Register</h1>

      <form className="flex flex-col gap-4 w-70" onSubmit={handleRegister}>
        <div className="flex flex-col gap-2">
          <label className="text-black">Enter your Name</label>
          <div className="border-2 border-[#D1D1D1] rounded-xl p-2">
            <input
              name="name"
              type="text"
              placeholder="enter your full name"
              className="w-full outline-none"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Enter your mobile number</label>
          <div className="border-2 border-[#D1D1D1] rounded-xl p-2">
            <input
              name="mobile"
              type="number"
              placeholder="enter your mobile number"
              className="w-full outline-none"
              value={userData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Enter your email</label>
          <div className="border-2 border-[#D1D1D1] rounded-xl p-2">
            <input
              name="email"
              type="email"
              placeholder="enter your email"
              className="w-full outline-none"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Enter your age</label>
          <div className="border-2 border-[#D1D1D1] rounded-xl p-2">
            <input
              name="age"
              type="number"
              placeholder="enter your age"
              className="w-full outline-none"
              value={userData.age}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Select your gender</label>
          <div className="border-2 border-[#D1D1D1] rounded-xl p-2">
            <select
              name="gender"
              className="w-full outline-none"
              value={userData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Enter your password</label>
          <div className="border-2 border-[#D1D1D1] rounded-xl p-2">
            <input
              name="password"
              type="password"
              placeholder="enter your password"
              className="w-full outline-none"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label>Re-enter your password</label>
          <div className="border-2 border-[#D1D1D1] rounded-xl p-2">
            <input
              name="confirmPassword"
              type="password"
              placeholder="re-enter your password"
              className="w-full outline-none"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="bg-black text-white text-md p-2 px-8 rounded-xl cursor-pointer hover:bg-gray-800 transition duration-300"
        >
          {loading ? "Registering user" : "Sign Up"}
        </button>
        {error && <p className="text-red-900 flex justify-center">{error}</p>}

        <div className="flex flex-col items-center">
          <p>
            Already have an account?{" "}
            <NavLink to="/login">
              <strong>Sign In</strong>
            </NavLink>
          </p>
          <p className="font-semibold text-gray-400">or</p>
          <div className="flex flex-col gap-2 m-2 w-full">
            <button className="p-2 border-1 border-[#D1D1D1] rounded-xl cursor-pointer">
              <span>G </span>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
