import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const getUserFromLocal = () => {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocal);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = !!user;

  const login = (email, password) => {
    try {
      setLoading(true);
      setError(null);
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (user) => user.email == email && user.password === password
      );

      if (user) {
        // alert("Login Successfully");
        const {password, confirmPassword, ...safeUser} = user;
        localStorage.setItem("currentUser", JSON.stringify(safeUser));
        setUser(user);

        return;
      } else {
        setError("Invalid Email or Password");
        throw new Error("Invalid Email or Password");
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const register = (userData) => {
    try {
      setLoading(true);
      setError(null);

      const users = JSON.parse(localStorage.getItem("users")) || [];

      const exsistingUser = users.find((user) => user.email === userData.email);

      if (exsistingUser) {
        console.log("existing");
        setError("User already exist");
        throw new Error("User already exist");
      }
      if (userData.password !== userData.confirmPassword) {
        console.log("same pass");
        setError("Password and confirm password does not matched");
        throw new Error("Password and confirm password does not matched");
      }
      const {password, confirmPassword, ...safeUserData} = userData;


      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(safeUserData));

      setUser(userData);
      setError(null);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    finally{
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, error, user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);