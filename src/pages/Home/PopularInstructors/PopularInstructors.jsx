import useInstructor from "../../../hooks/useInstructor";
import { Fade, Bounce, Flip, JackInTheBox, Roll, Slide } from "react-awesome-reveal";


const PopularInstructors = () => {
    const [instructors, loading] = useInstructor();
    const popularSixInstructors = instructors.slice(0, 6);
    return (
        <div className=" m-10">
            <Slide><p className="text-center text-6xl font-bold my-5">Popular Instructors</p></Slide>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    popularSixInstructors.map(instructor => <div
                        key={instructor.name} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-96" src={instructor.img} alt="Shoes" /></figure>
                        <div className="card-body justify-end">
                            <h2 className="card-title">{instructor.name}</h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;