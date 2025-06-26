import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const param = useParams();
  const user = JSON.parse(localStorage.getItem("currentUser")) || [];
  console.log(user);
  
  return <div>Hello {user.name}</div>;
};

export default Home;
