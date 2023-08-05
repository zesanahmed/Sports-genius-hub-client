import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const { user } = useContext(AuthContext);


    const handleAddClass = (e) => {
        e.preventDefault();
        const form = e.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;
        const enrolledStudents = 0;
        const status = 'pending';
        const feedback = '';
        const cls = { className, classImage, instructorName, instructorEmail, availableSeats, price, enrolledStudents, status, feedback }
        console.log(cls);


        fetch("https://sports-genius-hub-server-zesanahmed.vercel.app/classes", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cls)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successfully Added!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    form.reset();
                }
            })
    };

    return (
        <div className="w-full">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/3">
                        <h1 className="text-5xl font-bold">Add Class</h1>
                        <p className="py-6">Add a New Class: Create an Exciting Journey. Together, we can create a dynamic learning community where knowledge knows no bounds.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleAddClass} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="className"
                                    placeholder="Class Name"
                                    className="input input-bordered"
                                    required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input
                                    type="text"
                                    name="classImage"
                                    placeholder="Class Image"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="instructorName"
                                    value={user?.displayName}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input
                                    type="text"
                                    name="instructorEmail"
                                    value={user?.email}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input
                                    type="number"
                                    name="availableSeats"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Price"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div type="submit" className="form-control mt-6">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClass;