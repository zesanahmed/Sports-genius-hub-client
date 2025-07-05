import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useClasses from "../../../hooks/useClasses";
import MyClassCard from "./MyClassCard";
import Swal from "sweetalert2";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [classes] = useClasses();
  const myClasses = classes.filter(
    (myCls) => myCls.instructorEmail === user.email
  );

  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold ms-4 mb-6">
        My Classes: {myClasses.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((cls, index) => (
              <MyClassCard key={cls._id} cls={cls} index={index}></MyClassCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
