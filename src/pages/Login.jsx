import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { useAuth } from "../context/authProvider";

const Login = () => {
  console.log("Login page rendered");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const debouncedEmail = useDebounce(email, 2000);
  const debouncedPass = useDebounce(password, 2000);

  const { login, loading, isAuthenticated, error } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedEmail) {
      console.log("Debounced email:", debouncedEmail);
    }
    if (debouncedPass) {
      console.log("Debounced password:", debouncedPass);
    }
    if (isAuthenticated) navigate("/");
  }, [debouncedEmail, debouncedPass]);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-6">
        <h1 className="mb-6 font-bold">Login</h1>
        <form className="flex flex-col gap-4 w-70" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <label className="text-black">Enter your email</label>
            <div className="border-2 border-[#D1D1D1] rounded-xl p-2">
              <input
                type="email"
                placeholder="enter your email address"
                className="w-full outline-none"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log("Typed: " + e.target.value);
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black">Enter your password</label>
            <div className="border-2 border-[#D1D1D1] rounded-xl flex justify-between p-2">
              <input
                type="password"
                placeholder="enter your password"
                className="w-full outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="cursor-pointer pointer-events-auto">
                <span className="">Hide</span>
              </button>
            </div>
            <a href="">
              <p className="flex justify-end">forget account ?</p>
            </a>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="bg-black text-white text-md p-2 px-8 rounded-xl cursor-pointer hover:bg-gray-800 transition duration-300"
          >
            {loading ? "logging in..." : "Login"}
          </button>
          {error && <p className="text-red-900 flex justify-center">{error}</p>}
          <div className="flex flex-col items-center">
            <p>
              Don't have an account?{" "}
              <NavLink to="/sign-up">
                <strong>Sign Up</strong>
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
    </>
  );
};

export default Login;
