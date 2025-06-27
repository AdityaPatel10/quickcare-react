import { NavLink, useParams } from "react-router-dom";
import { useAuth } from "../context/authProvider";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("currentUser")) || [];
  console.log(user);
  const { isAuthenticated } = useAuth();

  return (
    <>
      <div className="flex justify-center h-screen bg-[#F0F0F0]">
        <div className="flex flex-col w-[80%]">
          <div className="flex justify-center m-3">
            {isAuthenticated ? (
              <h2>Welcome {user.name} to HealthCare Application</h2>
            ) : (
              <h2 className="font-bold">Welcome to HealthCare Application</h2>
            )}
          </div>
          <p className="text-center text-gray-600 ">
            Your comprehensive solution for managing appointments,
            prescriptions, and healthcare needs
          </p>
          <div className="flex justify-center">
            <div className="flex justify-center items-center gap-4 mt-4 bg-[#F0F0F0] text-black w-fit p-2 rounded-md hover:bg-green-500 hover:text-white transition duration-300 m-4 shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
              {isAuthenticated ? (
                <NavLink to="/booking">Book Appointment</NavLink>
              ) : (
                <NavLink to="/login">Login or Register</NavLink>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <div className="flex flex-col gap-2 text-sm  shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-4 rounded-lg w-[20%]">
              <div className="text-3xl">📅</div>
              <h3 className="font-bold">Easy Appointment Booking</h3>
              <p>
                Schedule appointments with your preferred doctors at your
                convenience
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm  shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-4 rounded-lg w-[20%]">
              <div className="text-3xl">💊</div>
              <h3 className="font-bold">Prescription Management</h3>
              <p>
                Keep track of all your medications and prescriptions in one
                place
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm  shadow-[0px_3px_8px_rgba(0,0,0,0.24)] p-4 rounded-lg w-[20%]">
              <div className="text-3xl">📱</div>
              <h3 className="font-bold">Mobile Friendly</h3>
              <p>
                Access your healthcare information anytime, anywhere on any
                device
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
      <div className="absolute fixed w-full bottom-0 bg-black text-white p-2">
        <div className="flex gap-3 justify-center">
          <a href="#">Privacy Policy</a>
          <a href="#">Term of Service</a>
          <a href="#">Contact Us</a>
          <a href="#">Help</a>
          <p>&copy; 2025 HealthCare Application</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
