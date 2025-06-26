import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authProvider";

const Navbar = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { logout } = useAuth();
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    setIsLoggedIn(!!user);
    console.log(!!user);
    console.log(user);
  }, []);

  const handleLogout = async (e) => {
    // localStorage.removeItem("currentUser");
    e.preventDefault();
    await logout();
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <div className="flex justify-center items-center bg-black p-2 top-0">
          <ul className="flex justify-between items-center gap-6 bg-[#F0F0F0] py-2 px-6 text-black text-sm border-1 rounded-4xl ">
            <li>
              <NavLink
                to="/"
                className={(e) => {
                  return e.isActive
                    ? "text-white bg-[#828282] flex border-transparent shadow-xl px-2 py-1 rounded-xl"
                    : "flex border-transparent shadow-xl px-2 py-1 rounded-xl bg-[#E2E2E2]";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                className={(e) => {
                  return e.isActive
                    ? "text-white bg-[#828282] flex border-transparent shadow-xl px-2 py-1 rounded-xl"
                    : "flex border-transparent shadow-xl px-2 py-1 rounded-xl bg-[#E2E2E2]";
                }}
              >
                Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prescription"
                className={(e) => {
                  return e.isActive
                    ? "text-white bg-[#828282] flex border-transparent shadow-xl px-2 py-1 rounded-xl"
                    : "flex border-transparent shadow-xl px-2 py-1 rounded-xl bg-[#E2E2E2]";
                }}
              >
                Prescription
              </NavLink>
            </li>
            {isLoggedIn ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-black flex border-transparent shadow-xl px-2 py-1 rounded-xl bg-[#E2E2E2] hover:text-white hover:bg-[#828282]"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={(e) => {
                    return e.isActive
                      ? "text-white bg-[#828282] flex border-transparent shadow-xl px-2 py-1 rounded-xl"
                      : "flex border-transparent shadow-xl px-2 py-1 rounded-xl bg-[#E2E2E2]";
                  }}
                >
                  Login
                </NavLink>
              </li>
            )}

            {/* <li>
              <NavLink
                to="/sign-up"
                className={(e) => {
                  return e.isActive
                    ? "text-white bg-[#828282] flex border-transparent shadow-xl px-2 py-1 rounded-xl"
                    : "flex border-transparent shadow-xl px-2 py-1 rounded-xl bg-[#E2E2E2]";
                }}
              >
                Register
              </NavLink>
            </li> */}
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;
