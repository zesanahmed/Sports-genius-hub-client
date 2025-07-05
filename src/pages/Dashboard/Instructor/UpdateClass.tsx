import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const UpdateClass = () => {
  const { user } = useContext(AuthContext);

  return <div className="w-full">{user.length}</div>;
};

export default UpdateClass;
