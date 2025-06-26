import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Prescription from "./pages/Prescription";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Navbar>
          <Home />
        </Navbar>
      ),
    },
    {
      path: "/login",
      element: (
        <Navbar>
          <Login />
        </Navbar>
      ),
    },
    {
      path: "/sign-up",
      element: (
        <Navbar>
          <Register />
        </Navbar>
      ),
    },
    {
      path: "/prescription",
      element: (
        <Navbar>
          <Prescription />
        </Navbar>
      ),
    },
    {
      path: "/booking",
      element: (
        <Navbar>
          <Booking />
        </Navbar>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
