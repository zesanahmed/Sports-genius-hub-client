import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyClassCard = ({ cls, index }) => {


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={cls.classImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{cls.className}</div>
                    </div>
                </div>
            </td>
            <td>
                {cls.instructorName}
                <br />
                <span className="badge badge-ghost badge-sm">{cls.instructorEmail}</span>
            </td>
            <td>{cls.availableSeats}</td>
            <td>${cls.price}</td>
            <td>{cls.status}</td>
            <td>{cls.feedback}</td>
            <td className="gap-1">
                <Link to='/updateClass'><button className="btn btn-success btn-xs">Update</button></Link>
            </td>
        </tr>
    );
};

export default MyClassCard;