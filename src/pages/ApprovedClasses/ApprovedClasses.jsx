import useClasses from "../../hooks/useClasses";


const ApprovedClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter((cls) => cls.status === 'approved');
    return (
        <div className="pt-20 pb-20">
            <h2 className="text-5xl text-center bg-lime-700 text-white font-bold py-3 mb-12">All Classes</h2>
            <div className="grid md:grid-cols-2 md:mx-10 gap-8">
                {
                    approvedClasses.map(cls => <div
                        key={cls.classId}
                        className="card lg:card-side bg-base-100 shadow-xl">
                        <img className="w-1/2" src={cls.classImage} alt="Album" />
                        <div className="card-body">
                            <h2 className="text-2xl font-bold mb-6">Class Name :{cls.className}</h2>
                            <p className="text-2xl font-semibold">Instructor: {cls.instructorName}</p>
                            <p className="text-gray-500">Email: {cls.instructorEmail}</p>
                            <p className="font-semibold">Available Seats: {cls.availableSeats}</p>
                            <p className="font-semibold">Price: {cls.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-lime-700 text-white">Select</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ApprovedClasses;