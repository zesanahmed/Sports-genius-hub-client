import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
