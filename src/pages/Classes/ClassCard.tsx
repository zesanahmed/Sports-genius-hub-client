import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { useAuth } from "../../context/AuthContext";

const ClassCard = ({ cls }) => {
  const {
    availableSeats,
    classImage,
    className,
    instructorName,
    instructorEmail,
    price,
    _id,
  } = cls;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectBtn = (cls) => {
    console.log("selected class", cls);
    if (user && user.email) {
      const classCart = {
        classId: _id,
        email: user.email,
        classImage,
        className,
        instructorName,
        instructorEmail,
        price,
      };
      fetch("https://sports-genius-hub-server-zesanahmed.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classCart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to join the course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={`card lg:card-side  shadow-xl mb-10 ${
        availableSeats === 0 ? "bg-red-500" : "bg-base-100"
      }`}
    >
      <img className="w-1/2" src={classImage} alt="Album" />
      <div className="card-body">
        <h2 className="text-2xl font-bold mb-6">Class Name :{className}</h2>
        <p className="text-2xl font-semibold">Instructor: {instructorName}</p>
        <p className="text-gray-500">Email: {instructorEmail}</p>
        <p className="font-semibold">Available Seats: {availableSeats}</p>
        <p className="font-semibold">Price: {price}</p>
        <div className="card-actions justify-end">
          {availableSeats === 0 ? (
            <>
              <button
                onClick={() => handleSelectBtn(cls)}
                className="btn bg-lime-700 btn-disabled text-white"
              >
                Select
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleSelectBtn(cls)}
                className="btn bg-lime-700 text-white"
              >
                Select
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
