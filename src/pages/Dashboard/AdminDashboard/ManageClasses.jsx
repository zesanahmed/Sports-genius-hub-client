import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })


    const handleApprove = id => {
        fetch(`http://localhost:5000/classes/approve/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = id => {
        fetch(`http://localhost:5000/classes/denied/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-full">
            <h2 className="text-3xl font-semibold ms-4 mb-6">Total Classes: {classes.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
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
                        {
                            classes.map((cls, index) => <tr
                                key={cls._id}
                            >
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
                                <td className="gap-1">
                                    <button onClick={() => handleApprove(cls._id)} className="btn btn-success btn-xs">Approve</button>
                                    <button onClick={() => handleDeny(cls._id)} className="btn btn-error btn-xs">Deny</button>
                                    <button className="btn btn-info btn-xs">Feedback</button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;