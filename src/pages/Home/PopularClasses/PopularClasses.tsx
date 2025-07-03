import { Bounce, Slide } from "react-awesome-reveal";
import useClasses from "../../../hooks/useClasses";


const PopularClasses = () => {
    const [classes] = useClasses();

    const topClasses = classes.sort((a, b) => b.
        enrolledStudents - a.
            enrolledStudents);

    const topSix = topClasses.slice(0, 6);

    return (
        <div className=" md:m-10">
            <Slide><p className="text-center text-6xl font-bold my-5">Popular Classes</p></Slide>
            <div className="grid md:grid-cols-3 md:gap-6 px-4 gap-4">
                {
                    topSix.map(cls => <div
                        key={cls._id} className="card md:w-96  bg-base-100 shadow-xl">
                        <figure><img className="h-96" src={cls.classImage} alt="Shoes" /></figure>
                        <div className="card-body justify-end bg-lime-100">
                            <Bounce>
                                <h2 className="card-title">{cls.className}</h2>
                            </Bounce>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;