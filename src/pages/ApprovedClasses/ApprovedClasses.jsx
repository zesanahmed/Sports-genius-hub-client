import useClasses from "../../hooks/useClasses";
import ClassCard from "../ClassCard/ClassCard";


const ApprovedClasses = () => {
    const [classes] = useClasses();
    const approvedClasses = classes.filter((cls) => cls.status === 'approved');


    return (
        <div className="pt-20 pb-20">
            <h2 className="text-5xl text-center bg-lime-700 text-white font-bold py-3 mb-12">All Classes</h2>
            <div className="grid md:grid-cols-2 md:mx-10 gap-8">
                {
                    approvedClasses.map(cls => <ClassCard
                        key={cls._id}
                        cls={cls}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default ApprovedClasses;